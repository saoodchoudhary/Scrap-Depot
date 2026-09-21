"use server";

import { site } from "@/data/site";
import { sendEnquiryMail } from "@/lib/mailer";

/**
 * Enquiry handling. Submissions are emailed to the address in MAIL_TO
 * (defaults to site.email) over SMTP — see `src/lib/mailer.js` and `.env.example`.
 */

const PHONE_RE = /^(\+?91[-\s]?)?[6-9]\d{9}$/;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const clean = (v) => (typeof v === "string" ? v.trim() : "");

function reference(prefix) {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `${prefix}-${stamp}-${rand}`;
}

/** Bots fill every field they find; humans never see this one. */
const isSpam = (formData) => clean(formData.get("website")).length > 0;

const DELIVERY_FAILED =
  `We could not send that through just now. Please call ${site.phones[0].value} ` +
  `or email ${site.email} and we will pick it up straight away.`;

/* ------------------------------------------------------------ Quote form */

export async function submitQuote(prevState, formData) {
  // React resets uncontrolled fields once an action settles, so the client
  // remounts the form on each attempt to re-apply defaultValue from `values`.
  const attempt = (prevState?.attempt ?? 0) + 1;

  const data = {
    name: clean(formData.get("name")),
    company: clean(formData.get("company")),
    phone: clean(formData.get("phone")),
    email: clean(formData.get("email")),
    city: clean(formData.get("city")),
    material: clean(formData.get("material")),
    quantity: clean(formData.get("quantity")),
    timeline: clean(formData.get("timeline")),
    message: clean(formData.get("message")),
    consent: formData.get("consent") === "on",
  };

  const errors = {};
  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!PHONE_RE.test(data.phone.replace(/[\s-]/g, "")))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (data.email && !EMAIL_RE.test(data.email))
    errors.email = "That email address doesn't look right.";
  if (!data.material) errors.material = "Select the material you want to dispose of.";
  if (!data.city) errors.city = "Tell us where the pickup is.";
  if (!data.consent) errors.consent = "Please agree to be contacted about this enquiry.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      attempt,
      errors,
      values: data,
      message: "Please correct the highlighted fields and submit again.",
    };
  }

  const ref = reference("SD");

  // Accept and drop silently — never tell a bot why it failed.
  if (isSpam(formData)) {
    return {
      status: "success",
      attempt,
      reference: ref,
      message:
        "Thank you — your enquiry is with our valuation desk. You will hear from us within one working day.",
      errors: {},
      values: {},
    };
  }

  const sent = await sendEnquiryMail({
    heading: "New quotation request",
    subject: `Quote request — ${data.material} — ${data.name} (${ref})`,
    reference: ref,
    replyTo: data.email || undefined,
    rows: [
      ["Name", data.name],
      ["Company", data.company],
      ["Mobile", data.phone],
      ["Email", data.email],
      ["Pickup city", data.city],
      ["Material", data.material],
      ["Quantity", data.quantity],
      ["Timeline", data.timeline],
    ],
    message: data.message,
  });

  if (!sent.ok) {
    return {
      status: "error",
      attempt,
      errors: {},
      values: data,
      message: DELIVERY_FAILED,
    };
  }

  return {
    status: "success",
    attempt,
    reference: ref,
    message:
      "Thank you — your enquiry is with our valuation desk. You will hear from us within one working day.",
    errors: {},
    values: {},
  };
}

/* ---------------------------------------------------------- Contact form */

export async function submitContact(prevState, formData) {
  const attempt = (prevState?.attempt ?? 0) + 1;

  const data = {
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    phone: clean(formData.get("phone")),
    subject: clean(formData.get("subject")),
    message: clean(formData.get("message")),
  };

  const errors = {};
  if (data.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.phone && !PHONE_RE.test(data.phone.replace(/[\s-]/g, "")))
    errors.phone = "Enter a valid 10-digit Indian mobile number.";
  if (data.message.length < 10) errors.message = "A line or two more, please.";

  if (Object.keys(errors).length) {
    return {
      status: "error",
      attempt,
      errors,
      values: data,
      message: "Please check the fields marked below.",
    };
  }

  const ref = reference("SDC");

  if (isSpam(formData)) {
    return {
      status: "success",
      attempt,
      reference: ref,
      message: "Message received. Our team will respond within one working day.",
      errors: {},
      values: {},
    };
  }

  const sent = await sendEnquiryMail({
    heading: "New website message",
    subject: `${data.subject || "Website enquiry"} — ${data.name} (${ref})`,
    reference: ref,
    replyTo: data.email,
    rows: [
      ["Name", data.name],
      ["Email", data.email],
      ["Mobile", data.phone],
      ["Subject", data.subject],
    ],
    message: data.message,
  });

  if (!sent.ok) {
    return {
      status: "error",
      attempt,
      errors: {},
      values: data,
      message: DELIVERY_FAILED,
    };
  }

  return {
    status: "success",
    attempt,
    reference: ref,
    message: "Message received. Our team will respond within one working day.",
    errors: {},
    values: {},
  };
}
