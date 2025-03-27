'use client';

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import FuzzyText from '@/components/FuzzyText';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal',
    contactMethod: 'email',
    encrypted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center bg-black text-white overflow-hidden px-4 sm:px-6">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className={styles.gridLines}></div>
        <div className={styles.scanlines}></div>
        <div className={styles.noise}></div>
      </div>

      <Navbar />
      
      <section className="text-center mt-20 md:mt-24 z-10 w-full max-w-3xl pb-8 md:pb-12">
        {/* Responsive heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-red-400 ${styles.glowRed} font-mono my-6 md:my-8`}>
          <FuzzyText 
            baseIntensity={0.1} 
            hoverIntensity={0.3} 
            color='red' 
            fontSize="clamp(32px, 6vw, 48px)"
          >
            Establish Connection
          </FuzzyText>
        </h1>

        {/* Form with responsive padding */}
        <form className={`p-4 sm:p-6 md:p-8 rounded-lg ${styles.glassEffect} backdrop-blur-lg border border-white/20`}>
          {/* Name Field */}
          <div className="relative mb-6 sm:mb-8 group">
            <label 
              htmlFor="name"
              className={`absolute left-2 sm:left-3 -top-3 px-1 text-xs font-mono bg-black text-red-400 transition-all duration-300 ${formData.name ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100'}`}
            >
              [IDENTITY_VERIFICATION]
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/20 font-mono focus:border-red-400 focus:outline-none transition-all text-sm sm:text-base"
              placeholder="> enter_your_name"
            />
          </div>

          {/* Email Field */}
          <div className="relative mb-6 sm:mb-8 group">
            <label 
              htmlFor="email"
              className={`absolute left-2 sm:left-3 -top-3 px-1 text-xs font-mono bg-black text-blue-400 transition-all duration-300 ${formData.email ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100'}`}
            >
              [CONTACT_NODE]
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/20 font-mono focus:border-blue-400 focus:outline-none transition-all text-sm sm:text-base"
              placeholder="> input_email_address"
            />
          </div>

          {/* Subject Field */}
          <div className="relative mb-6 sm:mb-8 group">
            <label 
              htmlFor="subject"
              className={`absolute left-2 sm:left-3 -top-3 px-1 text-xs font-mono bg-black text-purple-400 transition-all duration-300 ${formData.subject ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100'}`}
            >
              [QUERY_PARAMETERS]
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/20 font-mono focus:border-purple-400 focus:outline-none transition-all text-sm sm:text-base"
              placeholder="> subject_line"
            />
          </div>

          {/* Message Field */}
          <div className="relative mb-6 sm:mb-8 group">
            <label 
              htmlFor="message"
              className={`absolute left-2 sm:left-3 -top-3 px-1 text-xs font-mono bg-black text-green-400 transition-all duration-300 ${formData.message ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100'}`}
            >
              [MESSAGE_PAYLOAD]
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/20 font-mono focus:border-green-400 focus:outline-none transition-all text-sm sm:text-base"
              placeholder="> input_message_content"
            ></textarea>
          </div>

          {/* Additional Fields Grid - stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Urgency Selector */}
            <div className="relative group">
              <label 
                className={`absolute left-2 sm:left-3 -top-3 px-1 text-xs font-mono bg-black text-yellow-400 transition-all duration-300 ${formData.urgency !== 'normal' ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100'}`}
              >
                [PRIORITY_LEVEL]
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/20 font-mono focus:border-yellow-400 focus:outline-none appearance-none text-sm sm:text-base"
              >
                <option value="low">Low Priority</option>
                <option value="normal">Standard Priority</option>
                <option value="high">High Priority</option>
                <option value="critical">CRITICAL EMERGENCY</option>
              </select>
            </div>

            {/* Contact Method */}
            <div className="relative group">
              <label 
                className={`absolute left-2 sm:left-3 -top-3 px-1 text-xs font-mono bg-black text-cyan-400 transition-all duration-300 ${formData.contactMethod !== 'email' ? 'opacity-100' : 'opacity-0 group-focus-within:opacity-100'}`}
              >
                [COMMS_PROTOCOL]
              </label>
              <select
                name="contactMethod"
                value={formData.contactMethod}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-black/50 border border-white/20 font-mono focus:border-cyan-400 focus:outline-none appearance-none text-sm sm:text-base"
              >
                <option value="email">Email Response</option>
                <option value="signal">Signal Message</option>
                <option value="pgp">PGP Encrypted</option>
                <option value="burner">Burner Phone</option>
              </select>
            </div>
          </div>

          {/* Encryption Checkbox */}
          <div className="flex items-center mb-6 sm:mb-8">
            <input
              type="checkbox"
              id="encrypted"
              name="encrypted"
              checked={formData.encrypted}
              onChange={handleChange}
              className="w-4 h-4 bg-black/50 border border-white/20 focus:ring-red-400"
            />
            <label htmlFor="encrypted" className="ml-2 font-mono text-xs sm:text-sm text-gray-300">
              Enable End-to-End Encryption <span className="text-red-400">(Recommended)</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 sm:py-4 font-mono border border-red-400 bg-red-400/10 hover:bg-red-400 hover:text-black transition-all ${styles.glowRed} flex items-center justify-center text-sm sm:text-base`}
          >
            <span className="mr-2">[TRANSMIT]</span> 
            INITIATE_SECURE_HANDSHAKE
          </button>
        </form>

        {/* Alternative Contact - responsive grid */}
        <div className={`mt-8 sm:mt-12 p-4 sm:p-6 rounded-lg ${styles.glassEffect} max-w-2xl mx-auto border border-white/20`}>
          <h3 className="text-lg sm:text-xl font-bold text-red-400 font-mono mb-2 sm:mb-3">DIRECT_ACCESS_PROTOCOLS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 font-mono text-xs sm:text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors py-1">{'>'} Secure Email</a>
            <a href="#" className="hover:text-blue-400 transition-colors py-1">{'>'} Signal: +1 XXX-XXX-XXXX</a>
            <a href="#" className="hover:text-blue-400 transition-colors py-1">{'>'} PGP Key</a>
            <a href="#" className="hover:text-blue-400 transition-colors py-1">{'>'} Emergency Contact</a>
          </div>
        </div>
      </section>

      {/* Terminal Footer - responsive text size */}
      <footer className="mt-auto py-4 sm:py-6 w-full text-center text-gray-500 text-xs sm:text-sm font-mono">
        <p>(root@0xpwns3c)-[~/contact] # <span className={styles.typingEffect}>initiate_secure_channel</span></p>
      </footer>
    </main>
  );
}