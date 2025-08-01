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
      await axios.post('https://notifications.smarttix.com/verify-contact', {
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

  return (
    <div className="contact-area border-[#595959] border-opacity-30 bg-azure md:pt-[100px] pt-[45px] md:pb-[140px] pb-[60px]">
      <ToastContainer />
      <div className="custom-container rounded-lg px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[18px] md:text-[22px] font-semibold mb-8 text-center md:text-left pt-[35px]">
            Submit a general or career inquiry below
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
                placeholder="First Name"
                type="text"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
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
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
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
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
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
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
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
                className={`bg-[#6AEF5B] text-[#13144D] px-6 py-3 text-[16px] font-bold rounded-md shadow transition flex items-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#5adc4d]'
                }`}
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
