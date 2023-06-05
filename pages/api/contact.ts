import mail from "@sendgrid/mail";
import { NextApiRequest, NextApiResponse } from "next";
import Validator from "validatorjs";

export default function Contact(req: NextApiRequest, res: NextApiResponse) {
  const validator = new Validator(req.body, {
    name: "required|string",
    email: "required|email",
    message: "required|string",
  });

  if (validator.fails()) {
    return res.status(422).json({
      message: "Validation failed",
      errors: validator.errors.all(),
    });
  }
  mail.setApiKey(process.env.SENDGRID_API_KEY!);

  const { name, email, message } = req.body;

  const msg = {
    to: "mail@meespostma.nl",
    from: "mail@meespostma.nl",
    subject: `New message from ${name}`,
    text: message,
    html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    `,
  };

  mail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: "Message sent successfully" });
    })
    .catch((error) => {
      res.status(500).json({ message: "Something went wrong" });
    });
}
