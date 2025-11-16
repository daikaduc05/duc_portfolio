import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = "danghoaiduc9@gmail.com";
    const subject = `Portfolio Contact: ${name}`;
    const emailBody = `
Name: ${name}
Email: ${email}

Message:
${message}
    `.trim();

    // Send email using Resend
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Portfolio Contact <onboarding@resend.dev>",
          to: recipientEmail,
          replyTo: email,
          subject: subject,
          text: emailBody,
        });
      } catch (emailError) {
        console.error("Resend email error:", emailError);
        // Fallback: log the email if Resend fails
        console.log("Contact Form Submission (Fallback):");
        console.log("To:", recipientEmail);
        console.log("Subject:", subject);
        console.log("Body:", emailBody);
      }
    } else {
      // Fallback: log the email if no API key is configured
      console.log("Contact Form Submission (No API Key):");
      console.log("To:", recipientEmail);
      console.log("Subject:", subject);
      console.log("Body:", emailBody);
      console.log("Note: Set RESEND_API_KEY in .env.local to enable email sending");
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}

