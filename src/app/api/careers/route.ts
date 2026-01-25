import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, linkedin, portfolio, position, message, attachment } =
      body;

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const attachments = attachment
      ? [
          {
            filename: attachment.name,
            content: attachment.content.split("base64,")[1],
            encoding: "base64",
          },
        ]
      : [];

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || '"DLX Careers" <no-reply@dlxsystems.com>',
      to: process.env.SMTP_TO, // Or a dedicated careers email env var if available, but staying safe with same one
      subject: `New Application: ${position} - ${name}`,
      replyTo: email,
      attachments,
      text: `
        Name: ${name}
        Email: ${email}
        Position: ${position}
        LinkedIn: ${linkedin || "N/A"}
        Portfolio: ${portfolio || "N/A"}
        
        Cover Letter / Message:
        ${message}
      `,
      html: `
        <h2>New Job Application</h2>
        <p><strong>Position:</strong> ${position}</p>
        <hr/>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>LinkedIn:</strong> ${
          linkedin ? `<a href="${linkedin}">${linkedin}</a>` : "N/A"
        }</p>
        <p><strong>Portfolio:</strong> ${
          portfolio ? `<a href="${portfolio}">${portfolio}</a>` : "N/A"
        }</p>
        <br/>
        <p><strong>Cover Letter / Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending application email:", error);
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    );
  }
}
