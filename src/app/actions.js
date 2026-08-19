"use server";

/**
 * Enquiry handling.
 *
 * TODO (before launch): replace `deliverEnquiry` with a real transport —
 * e.g. Resend / SES for email, or a POST into the CRM. The validation and
 * reference-number generation below stay as they are.
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

async function deliverEnquiry(kind, payload) {
  // Placeholder transport. Swap for an email/CRM call.
  console.log(`[scrapdepot] ${kind} enquiry received`, payload);
  await new Promise((r) => setTimeout(r, 450));
}

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
  await deliverEnquiry("quote", { ...data, ref });

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
  await deliverEnquiry("contact", { ...data, ref });

  return {
    status: "success",
    attempt,
    reference: ref,
    message: "Message received. Our team will respond within one working day.",
    errors: {},
    values: {},
  };
}
