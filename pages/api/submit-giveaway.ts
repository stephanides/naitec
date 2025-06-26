import { NextApiRequest, NextApiResponse } from 'next';
import { renderToStaticMarkup } from 'react-dom/server';
import { apiBaseURL, apiHeaders, transporter } from './config';
import ContactEmail from '@/src/shared/email/ContactEmail';

type ContactData = {
  name: string;
  surname: string;
  phone: string;
  email: string;
  country: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { body } = req;
      const contactData: ContactData & {
        recaptcha: string | null;
      } = body;

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
        // const emailHTML = renderToStaticMarkup(ContactEmail({ ...contactData }));
        const checkEmailRes = await fetch(
          `${apiBaseURL}/giveaways?filters[email][$eq]=${encodeURIComponent(
            contactData.email
          )}`,
          {
            method: 'GET',
            headers: apiHeaders,
          }
        );

        const existingData = await checkEmailRes.json();
        if (existingData.data && existingData.data.length > 0) {
          // Email already exists
          return res.status(400).json({ message: 'Email already exists' });
        }

        const customerPayload = {
          data: {
            email: contactData.email,
            name: contactData.name,
            surname: contactData.surname,
            phone: contactData.phone,
            country: contactData.country,
          },
        };

        const createCustomerRes = await fetch(`${apiBaseURL}/giveaways`, {
          method: 'POST',
          headers: apiHeaders,
          body: JSON.stringify(customerPayload),
        });

        if (!createCustomerRes.ok) {
          const errorText = await createCustomerRes.text();
          console.error('Failed to create customer in Strapi:', errorText);
        }

        // await sendEmailConfirmation(contactData.email, emailHTML);
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
// async function sendEmailConfirmation(email: string, emailHTML: string) {
//   try {
//     // Send email using Nodemailer
//     const info = await transporter.sendMail({
//       from: `"Formular Naitec" <${process.env.NEXT_PUBLIC_EMAIL_LOGIN}>`,
//       to: process.env.NEXT_PUBLIC_CONTACT_EMAIL_RECIPIENT,
//       subject: 'Kontakt zo stránky Naitec',
//       html: emailHTML,
//     });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     throw error;
//   }
// }
