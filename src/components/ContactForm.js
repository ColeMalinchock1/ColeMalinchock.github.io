import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const SERVICE_ID = 'service_ic8c1gj';
  const TEMPLATE_ID = 'template_dd4njsn';
  const PUBLIC_KEY = '84htRGAmMaK073Mvw';

  const sendEmail = (e) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Initialize EmailJS if not already initialized
    if (!window.emailjs && PUBLIC_KEY) {
      emailjs.init(PUBLIC_KEY);
    }
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSubmitStatus('success');
          form.current.reset();
      }, (error) => {
          console.error('Email error:', error.text);
          setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      
      {submitStatus === 'success' && (
        <div className="success-message">
          Message sent successfully! I'll get back to you soon.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="error-message">
          Failed to send message. Please try again or contact me directly at your@email.com
        </div>
      )}
      
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Your Name" required />
        <input type="email" name="user_email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}