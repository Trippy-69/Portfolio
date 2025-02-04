import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

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
          alert('Message sent successfully!');
          form.current.reset(); // Reset the form after sending
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <section className="text-white px-6 md:px-20 py-16 relative" id="contact">
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-xl z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-cyan-400 text-center neon-text">
          Contact
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <input
              type="text"
              name="user_name" // Required for EmailJS
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
              name="user_email" // Required for EmailJS
              placeholder="Email"
              className="w-full p-4 bg-black/30 backdrop-blur-sm border border-cyan-400/20
              rounded-lg focus:border-cyan-400/40 focus:outline-none focus:ring-1 focus:ring-cyan-400/30
              transition-all placeholder-gray-400"
              required
            />
          </div>

          <div>
            <textarea
              name="message" // Required for EmailJS
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