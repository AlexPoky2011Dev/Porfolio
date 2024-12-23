import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(data: {
  name: string;
  email: string;
  message: string;
}) {
  const { name, email, message } = data;

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "alexpoky2011.dev@gmail.com",
    subject: `Nová zpráva od ${name}`,
    text: `
      Jméno: ${name}
      Email: ${email}
      Zpráva: ${message}
    `,
    html: `
      <h3>Nová zpráva z kontaktního formuláře</h3>
      <p><strong>Jméno:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Zpráva:</strong></p>
      <p>${message}</p>
    `,
  });
}

//U lib/email.ts pomohla ChatGPT