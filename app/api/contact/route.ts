import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "krishgadara0701@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #2563eb, #4f46e5); padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Message</h1>
          </div>
          
          <div style="padding: 20px; background-color: #f8fafc;">
            <div style="margin-bottom: 15px;">
              <strong style="color: #2563eb;">Name:</strong>
              <p style="margin: 5px 0; color: #374151;">${name}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #2563eb;">Email:</strong>
              <p style="margin: 5px 0; color: #374151;">${email}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #2563eb;">Subject:</strong>
              <p style="margin: 5px 0; color: #374151;">${subject}</p>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #2563eb;">Message:</strong>
              <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb; margin-top: 5px;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="padding: 15px; background-color: #e5e7eb; border-radius: 0 0 10px 10px; text-align: center;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
  }
}
