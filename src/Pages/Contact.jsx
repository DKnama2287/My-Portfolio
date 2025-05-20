import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
       'service_7wksk45',     // 🔁 Replace with your actual EmailJS Service ID
       'template_x6fwtgj',    // 🔁 Replace with your Template ID
      form.current,
      'oqmWAMQ_3mwTkmAEl'      // 🔁 Replace with your EmailJS Public Key
    )
      .then(() => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      })
      .catch((error) => {
        alert('❌ Failed to send message: ' + error.text);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-100 to-sky-200 text-gray-900">
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-blue-700"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        📬 Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg border-l-4 border-blue-500 space-y-5 animate-pulse-once"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <input
          name="user_name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="user_email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
