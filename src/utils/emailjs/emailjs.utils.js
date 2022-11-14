import emailjs from "@emailjs/browser";

export const sendEmail = async (form) =>
  await emailjs.sendForm(
    process.env.REACT_APP_SERVICE_ID,
    process.env.REACT_APP_TEMPLATE_ID,
    form.current,
    process.env.REACT_APP_PUBLIC_KEY
  );
