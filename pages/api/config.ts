import nodemailer from 'nodemailer';

export const apiHeaders = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
  'Content-Type': 'application/json',
};

export const apiBaseURL = 'https://admin.naitec.kravestudio.sk/api';

export const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_EMAIL_HOST,
  port: 465, // 587,
  secure: true, // true, // ssl
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL_LOGIN, // generated ethereal user
    pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // generated ethereal password
  },
});

