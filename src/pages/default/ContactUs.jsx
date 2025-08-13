import React, { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    alert("Your message has been sent! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="bg-amber-100 py-10 text-center shadow-md">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Have questions or feedback? We're here to help you.
        </p>
      </div>

      <div className="max-w-4xl mx-auto py-12 px-6 w-full">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-amber-400 text-white py-3 rounded-lg font-semibold hover:bg-amber-500 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Support</h2>
          <p className="text-gray-700">📞 +91-6386065376</p>
          <p className="text-gray-700">📧 bibhu0404@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
