import nodemailer from "nodemailer";

export type MailAttachment = {
  filename: string;
  content: string;
  contentType?: string;
};

export type SendOwnerEmailInput = {
  subject: string;
  text: string;
  html?: string;
  attachments?: MailAttachment[];
};

function getTransporter() {
  const { CONTACT_EMAIL_USER, CONTACT_EMAIL_APP_PASSWORD } = process.env;
  if (!CONTACT_EMAIL_USER || !CONTACT_EMAIL_APP_PASSWORD) {
    return null;
  }
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: CONTACT_EMAIL_USER,
      pass: CONTACT_EMAIL_APP_PASSWORD,
    },
  });
}

/**
 * Sends an email to the site owner (CONTACT_EMAIL_TO) from the configured
 * Gmail account. Shared by the Contact Me form and the Rushi's AI chat
 * notification/transcript emails. Throws on failure — callers that must not
 * break their own flow over a failed send (chat notifications) should wrap
 * this in their own try/catch and log-only.
 */
export async function sendOwnerEmail({ subject, text, html, attachments }: SendOwnerEmailInput): Promise<void> {
  const { CONTACT_EMAIL_USER, CONTACT_EMAIL_TO } = process.env;
  const transporter = getTransporter();
  if (!transporter || !CONTACT_EMAIL_USER || !CONTACT_EMAIL_TO) {
    throw new Error("Email credentials missing (CONTACT_EMAIL_USER / CONTACT_EMAIL_APP_PASSWORD / CONTACT_EMAIL_TO).");
  }

  await transporter.sendMail({
    from: CONTACT_EMAIL_USER,
    to: CONTACT_EMAIL_TO,
    replyTo: CONTACT_EMAIL_USER,
    subject,
    text,
    html,
    attachments,
  });
}
