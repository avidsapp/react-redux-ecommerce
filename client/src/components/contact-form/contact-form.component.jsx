import React, { useState } from "react";

// import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { ContactFormContainer } from './contact-form.styles.jsx';

const ContactForm = () => {
  const [status, setStatus] = useState("SEND IT");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("SEND IT");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <ContactFormContainer>
      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" placeholder="Name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Message" required />
        </div>
        <CustomButton type='submit'>{status}</CustomButton>
      </form>
    </ContactFormContainer>
  );
};

export default ContactForm;
