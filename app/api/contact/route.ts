import { NextResponse } from "next/server";
import { sendOwnerEmail } from "@/lib/mailer";

type ContactPayload = {
  name: string;
  subject: string;
  message: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, subject, message } = body;
  if (!isNonEmptyString(name) || !isNonEmptyString(subject) || !isNonEmptyString(message)) {
    return NextResponse.json({ error: "Please fill out all fields before submitting." }, { status: 400 });
  }

  try {
    await sendOwnerEmail({
      subject: subject.trim(),
      text: `From: ${name.trim()}\n\n${message.trim()}`,
      html: `<p><strong>From:</strong> ${name.trim()}</p><p>${message.trim().replace(/\n/g, "<br/>")}</p>`,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact form: failed to send email.", err);
    return NextResponse.json({ error: "Something went wrong on our end — please try again in a moment." }, { status: 502 });
  }
}
