import nodemailer from 'nodemailer';
import type { NextApiHandler } from 'next';

const handler: NextApiHandler = async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return res.status(405).end('Method Not Allowed');
    }

    try {
        let emailBody = '';
        for (const [key, value] of Object.entries(req.body)) {
            emailBody += `${key}: ${value}<br />`;
        }

        const transporter = nodemailer.createTransport({
            port: 587,
            host: 'smtp.gmail.com',
            auth: {
                user: process.env.GMAIL_ADDRESS,
                pass: process.env.GMAIL_PASSWORD
            },
            secure: false,
            ignoreTLS: false
        });

        await transporter.sendMail({
            from: process.env.GMAIL_ADDRESS,
            to: process.env.GMAIL_ADDRESS,
            subject: 'New booking request',
            html: emailBody
        });

        return res.status(201).json({ message: 'Email sent.' });
    } catch (err: any) {
        return res.status(500).send({ error: err.message });
    }
}

export default handler;