import { NextApiRequest, NextApiResponse } from 'next';
import { renderToStaticMarkup } from 'react-dom/server';
import { transporter } from './config';
import ContactEmail from '@/src/shared/email/ContactEmail';
import { ContactFormValues } from '@/src/pages/Contact/ContactForm';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { body } = req;
      const contactData: ContactFormValues & { recaptcha: string | null } =
        body;

      // Simulate processing the order (replace with actual logic)

      const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${contactData.recaptcha}`,
        }
      );

      const recaptchaData = await recaptchaResponse.json();
      if (recaptchaData.success) {
      const emailHTML = renderToStaticMarkup(ContactEmail({ ...contactData }));

      await sendEmailConfirmation(contactData.email, emailHTML);
      // Respond with success message
      res.status(200).json({ message: 'Contact submitted successfully!' });
      } else {
        res.status(500).json({ message: 'Failed to submit contact' });
      }
    } catch (error) {
      console.error('Error processing contact:', error);
      res.status(500).json({ message: 'Failed to submit contact' });
    }
  } else {
    // Handle other HTTP methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
async function sendEmailConfirmation(email: string, emailHTML: string) {
  try {
    // Send email using Nodemailer
    const info = await transporter.sendMail({
      from: `"Formular Naitec" <${process.env.NEXT_PUBLIC_EMAIL_LOGIN}>`,
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL_RECIPIENT,
      subject: 'Kontakt zo stránky Naitec',
      html: emailHTML,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
