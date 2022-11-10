import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const form = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("Message sent succesfully...");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <input type="hidden" name="contact_number" />
        <label>
          First Name:
          <input name="user_name" type="text" placeholder="Sergey" required />
        </label>
        <label>
          Last Name:
          <input name="last_name" type="text" placeholder="Petrov" required />
        </label>
        <label>
          Email:
          <input
            name="user_email"
            type="email"
            placeholder="me@you.com"
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            placeholder="Hi, i just want to know..."
            required
          ></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contacts;
