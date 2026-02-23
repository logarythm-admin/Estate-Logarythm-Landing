import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENTS = [
  "hello@logarythm.ai",
  "hanoon@logarythm.ai",
  "dhvanil@logarythm.ai",
  "thomas@logarythm.ai",
];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = typeof body?.email === "string" ? body.email.trim() : "";

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const user = process.env.DEMO_EMAIL_USER;
    const pass = process.env.DEMO_EMAIL_APP_PASSWORD;

    if (!user || !pass) {
      console.error("DEMO_EMAIL_USER or DEMO_EMAIL_APP_PASSWORD not set");
      return NextResponse.json(
        { message: "Email configuration missing" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Logarythm" <${user}>`,
      to: RECIPIENTS.join(", "),
      subject: "Request for Demo – Logarythm",
      text: `A visitor has requested a demo.\n\nEmail: ${email}\n\nPlease follow up within 24 hours.`,
      html: `
        <p>A visitor has requested a demo.</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Please follow up within 24 hours.</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Request demo email error:", err);
    return NextResponse.json(
      { message: "Failed to send request" },
      { status: 500 }
    );
  }
}
