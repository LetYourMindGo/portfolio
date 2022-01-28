import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const serviceID = 'service_u05hhek';
  const templateID = 'template_ft92w9j';
  const userID = 'user_8lBGn8qbE9v0PwW4rHEMw';

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
    e.target.classList.add("form-done");
    e.target.nextElementSibling.classList.remove("hidden")

  };


  return (
    <div id="contact" className="contact-section">
      <div className="contact-section__header">
        <h2 className="header__contact">Contact</h2>
        <div className="header__contact-line"></div>
      </div>
      <div className="contact-section__main">
        <p className="main__text">Are you interested to work together?</p>
        <form id="form" className="main__form" ref={form} onSubmit={sendEmail}>
          <div className="form__info">
            <input className="info__input" placeholder="Your name..." type="text" name="user_name" required/>
            <input className="info__input" placeholder="Your email..." type="email" name="user_email" required />
          </div>
          <textarea className="form__textfield" placeholder="Your message..." name="message"/>
          <button className="form__button" type="submit" value="Send">Submit</button>
        </form>
        <p className="main__text hidden">Thank you! Your message has been sent successfully!</p>
      </div>
    </div>
  );
};

export default Contact;
