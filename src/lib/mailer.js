import "server-only";
import nodemailer from "nodemailer";
import { site } from "@/data/site";

/**
 * SMTP delivery for website enquiries.
 *
 * Configure in `.env` (see `.env.example`). With Gmail you must use an
 * App Password — a normal account password will be rejected. Generate one at
 * https://myaccount.google.com/apppasswords after enabling 2-Step Verification.
 */

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_SECURE,
  SMTP_USER,
  SMTP_PASS,
  MAIL_TO,
  MAIL_FROM_NAME,
} = process.env;

export function isMailConfigured() {
  return Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);
}

let cached = null;

function transporter() {
  if (cached) return cached;

  cached = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT) || 465,
    // Port 465 is implicit TLS; 587 upgrades via STARTTLS.
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : Number(SMTP_PORT) !== 587,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  return cached;
}

/* ------------------------------------------------------------- formatting */

const esc = (v) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Strip CR/LF so user input can never inject extra mail headers. */
const headerSafe = (v) => String(v ?? "").replace(/[\r\n]+/g, " ").trim();

function renderHtml({ heading, reference, rows, message }) {
  const cells = rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #E2DCCC;font:600 12px/1.4 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#6B7A72;white-space:nowrap;vertical-align:top">${esc(label)}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #E2DCCC;font:400 15px/1.5 Arial,sans-serif;color:#071A13">${esc(value)}</td>
        </tr>`
    )
    .join("");

  const note = message
    ? `<div style="margin-top:24px;padding:16px 20px;background:#F2EDE1;border-left:3px solid #C4A24B">
         <div style="font:600 12px/1.4 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#6B7A72">Message</div>
         <div style="margin-top:8px;font:400 15px/1.65 Arial,sans-serif;color:#071A13;white-space:pre-wrap">${esc(message)}</div>
       </div>`
    : "";

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#FBF9F4">
  <table role="presentation" style="max-width:640px;margin:0 auto;border-collapse:collapse;background:#ffffff;border:1px solid #E2DCCC">
    <tr>
      <td style="padding:24px;background:#0B3327">
        <div style="font:700 20px/1.2 Georgia,serif;color:#FBF9F4">Scrap Depot</div>
        <div style="margin-top:6px;font:600 11px/1.4 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#C4A24B">${esc(heading)}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:24px">
        <div style="font:400 13px/1.4 Arial,sans-serif;color:#6B7A72">Reference</div>
        <div style="margin-top:4px;font:700 18px/1.3 Georgia,serif;color:#0F4232">${esc(reference)}</div>
        <table role="presentation" style="margin-top:20px;width:100%;border-collapse:collapse">${cells}</table>
        ${note}
      </td>
    </tr>
    <tr>
      <td style="padding:16px 24px;background:#F2EDE1;font:400 12px/1.5 Arial,sans-serif;color:#6B7A72">
        Sent automatically from ${esc(site.domain)}. Reply to this email to respond to the enquirer directly.
      </td>
    </tr>
  </table>
</body></html>`;
}

function renderText({ heading, reference, rows, message }) {
  const lines = rows.filter(([, v]) => v).map(([l, v]) => `${l}: ${v}`);
  return [
    `Scrap Depot — ${heading}`,
    `Reference: ${reference}`,
    "",
    ...lines,
    message ? `\nMessage:\n${message}` : "",
    "",
    `Sent automatically from ${site.domain}.`,
  ].join("\n");
}

/* ----------------------------------------------------------------- sending */

/**
 * @returns {Promise<{ ok: boolean, reason?: string }>}
 */
export async function sendEnquiryMail({ heading, subject, reference, rows, message, replyTo }) {
  const payload = { heading, reference, rows, message };

  if (!isMailConfigured()) {
    console.warn(
      "[scrapdepot] SMTP is not configured — enquiry NOT emailed. Set SMTP_HOST / SMTP_USER / SMTP_PASS in .env",
      { reference, rows, message }
    );
    return { ok: false, reason: "not-configured" };
  }

  try {
    await transporter().sendMail({
      from: `"${MAIL_FROM_NAME || "Scrap Depot Website"}" <${SMTP_USER}>`,
      to: MAIL_TO || site.email,
      replyTo: replyTo ? headerSafe(replyTo) : undefined,
      subject: headerSafe(subject),
      text: renderText(payload),
      html: renderHtml(payload),
    });
    return { ok: true };
  } catch (error) {
    console.error("[scrapdepot] Failed to send enquiry email", { reference, error });
    return { ok: false, reason: "send-failed" };
  }
}
