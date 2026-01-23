'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineRight } from 'react-icons/ai';

function DemoForm() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    org: '',
    email: '',
    phone: '',
    message: '',
    timezone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      to: formData.email,
      subject: `New inquiry from ${formData.fname} ${formData.lname}`,
      text: `Company: ${formData.org}\nPhone: ${formData.phone}\nTimezone: ${formData.timezone}\nMessage: ${formData.message}`,
    };

    try {
      await axios.post('https://notifications.smarttix.com/verify-demo', payload);
      toast.success('Message sent successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-area bg-azure border-[#595959] border-opacity-30 md:pt-[100px] pt-[45px] md:pb-[140px] pb-[60px]">
      <ToastContainer />
      <div className="custom-container rounded-lg px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[18px] md:text-[22px] font-semibold mb-8 text-center md:text-left pt-[35px]">
            Submit a demo inquiry below
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
                required
                disabled={isSubmitting}
              />
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Last Name"
                type="text"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <input
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              placeholder="Company/Organization"
              type="text"
              id="org"
              value={formData.org}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            />

            <div className="flex flex-col md:flex-row gap-4">
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
              <input
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
                placeholder="Phone"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <select
                id="timezone"
                value={formData.timezone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black bg-white"
              >
                <option value="" disabled>Select your timezone</option>
                <option value="Eastern">Eastern</option>
                <option value="Central">Central</option>
                <option value="Mountain">Mountain</option>
                <option value="Pacific">Pacific</option>
              </select>
            </div>

            <textarea
              className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-black"
              placeholder="Message Inquiry"
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
            ></textarea>

            <div className="pt-6 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#6AEF5B] text-[#13144D] px-6 py-3 text-[16px] font-bold rounded-md shadow transition flex items-center gap-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#5adc4d]'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'} <AiOutlineRight />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DemoForm;