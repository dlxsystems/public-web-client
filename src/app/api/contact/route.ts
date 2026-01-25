import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message, attachment } = body;

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
      from: process.env.SMTP_FROM || '"DLX Systems" <no-reply@dlxsystems.com>',
      to: process.env.SMTP_TO,
      subject: `New Project Request from ${name}`,
      attachments,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Service: ${service}
        Budget: ${budget}
        
        Message:
        ${message}
      `,
      html: `
        <h2>New Project Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
