import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState({ text: '', type: '' }); // State for success/error messages

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_u54k6pw', // Service ID
        'template_i0u4qzi', // Template ID
        form.current,
        'VWkATe6LaJAiLg6DQ' // Public Key
      )
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          setMessage({ text: 'Message sent successfully!', type: 'success' });
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          setMessage({ text: 'Failed to send message. Please try again!', type: 'error' });
        }
      );
  };

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ text: '', type: '' });
      }, 3000); // Message disappears after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <section className="text-white px-6 md:px-20 py-12 relative" id="contact">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400 text-center neon-text">
          Contact
        </h2>

        {/* Success/Error Message - Fixed height to prevent shifting */}
        <div className="h-12 flex items-center justify-center mb-2">
          {message.text && (
            <div
              className={`p-3 rounded-lg text-center transition-opacity duration-300 ease-in-out ${
                message.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                  : 'bg-red-500/20 border border-red-500/40 text-red-400'
              }`}
            >
              {message.text}
            </div>
          )}
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <input
              type="text"
              name="user_name" // Corrected for EmailJS
              placeholder="Name"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="user_email" // Corrected for EmailJS
              placeholder="Email"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
              required
            />
          </div>

          <div>
            <textarea
              name="message" 
              placeholder="Message"
              rows="5"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-8 
            rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-[1.02]
            shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;