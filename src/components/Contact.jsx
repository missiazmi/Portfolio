import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
       import.meta.env.VITE_EMAILJS_SERVICE_ID,    // from .env
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   // from .env
  form.current,                               // your form ref
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error("❌ Failed...", error.text);
          alert("❌ Failed to send message. Try again later.");
          setLoading(false);
        }
      );
  };

  const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <section id="contact" className="w-full min-h-screen bg-bg1 py-20 px-6 md:px-16 snap-start">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-accent mb-4">Contact Me</h2>
          <p className="text-text/70 text-lg">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-card p-8 rounded-2xl shadow-lg space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full text-text p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full text-text p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="user_number"
              placeholder="Your Number"
            
              className="w-full text-text p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
            />
            <input
              type="text"
              name="user_subject"
              placeholder="Subject"
              required
              className="w-full text-text p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full text-text p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:outline-none resize-none"
          ></textarea>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-accent text-white font-semibold rounded-lg shadow-md hover:bg-accent/90 transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
