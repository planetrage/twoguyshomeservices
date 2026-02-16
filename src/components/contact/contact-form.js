'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    org: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', {
        to: formData.email,
        subject: `New inquiry from ${formData.fname} ${formData.lname}`,
        text: `Company: ${formData.org}\nPhone: ${formData.phone}\nMessage: ${formData.message}`,
      });

      toast.success('Message sent!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full border rounded-md px-4 py-3 focus:outline-none transition-colors";
  const inputStyle = {
    background: 'var(--olympus-navy)',
    borderColor: 'rgba(201, 168, 76, 0.2)',
    color: 'var(--marble-white)',
  };

  return (
    <div className="olympus-sky" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-3xl)' }}>
      <ToastContainer />
      <div className="custom-container">
        <div className="max-w-4xl mx-auto">
          <h2
            className="mb-8 text-center md:text-left"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-subsection)',
              fontWeight: 600,
              letterSpacing: 'var(--tracking-display)',
              color: 'var(--marble-white)',
            }}
          >
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className={inputClasses}
                style={inputStyle}
                placeholder="First Name"
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              <input
                className={inputClasses}
                style={inputStyle}
                placeholder="Last Name"
                type="text"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <input
              className={inputClasses}
              style={inputStyle}
              placeholder="Company/Organization"
              type="text"
              id="org"
              value={formData.org}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                className={inputClasses}
                style={inputStyle}
                placeholder="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              <input
                className={inputClasses}
                style={inputStyle}
                placeholder="Phone"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
            </div>

            <textarea
              className={inputClasses}
              style={inputStyle}
              placeholder="Message Inquiry"
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            ></textarea>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gold-cta"
                style={isSubmitting ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Submit >'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
