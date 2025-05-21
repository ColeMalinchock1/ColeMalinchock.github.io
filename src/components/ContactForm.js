import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './ContactForm.css';

export default function ContactForm() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Access environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();
    
    // Check if environment variables are properly loaded
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error('EmailJS environment variables are missing');
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }
    
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
          console.error('Email error:', error);
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
          Failed to send message. Please try again or contact me directly at cole.malinchock@gmail.com
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