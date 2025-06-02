import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

// one transporter for the whole lambda → warm‑start friendly
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  secure: process.env.MAIL_SECURE === 'true', // SSL
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // allow only POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { fullName, email, phone, subject, message } = req.body as {
    fullName: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
  };

  // super‑light validation (feel free to beef this up)
  if (!fullName || !email || !subject || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,                       // so you can hit “reply” in Gmail
      subject: `[GNDU Contact] ${subject}`,
      text: `
Name:  ${fullName}
Email: ${email}
Phone: ${phone || 'N/A'}
----------------------------------------
${message}
      `.trim(),
    });

    return res.status(200).json({ success: true });
  } catch (err: any) {
    console.error('Mail error', err);
    return res.status(500).json({ message: 'Could not send email' });
  }
}
