import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ic8c1gj', 'template_dd4njsn', form.current, '84htRGAmMaK073Mvw')
      .then((result) => {
          alert('Message sent successfully!');
          form.current.reset();
      }, (error) => {
          alert('Failed to send message. Please try again.');
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <input type="text" name="user_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  );
}