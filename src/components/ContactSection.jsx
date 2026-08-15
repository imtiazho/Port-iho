import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import AvailabilityBadge from './AvailabilityBadge';
import LocalStatus from './LocalStatus';

export default function ContactSection({ onOpenBooking }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);

    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF5035', '#D6C8B0', '#FFFFFF', '#FFD700'],
      });
    } catch (err) {
      // Fallback
    }
  };

  return (
    <section id="contact-form" className="relative w-full bg-[#090909] text-[#D6C8B0] py-20 sm:py-28 px-4 sm:px-8 lg:px-24 border-b border-[rgba(214,200,176,0.12)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* Left Column: Heading, Availability Status & Local Live Clock */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <AvailabilityBadge text="AVAILABLE FOR NEW PROJECTS 2026" />
            <div>
              <LocalStatus />
            </div>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-white leading-tight uppercase">
            Let's build something <span className="text-[#FF5035]">extraordinary</span> together.
          </h2>

          <p className="text-base text-[#8C8375] leading-relaxed">
            Have a project in mind, a design query, or want to discuss interactive 3D experiences? Send a message directly or schedule a 15-minute call.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenBooking}
              className="px-5 py-3 text-xs font-mono font-bold tracking-wider text-black bg-[#FF5035] rounded-full hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <span>BOOK A 15-MIN CALL</span>
              <span>📅</span>
            </button>
          </div>

          <div className="pt-4 space-y-3 font-mono text-sm border-t border-[rgba(214,200,176,0.1)]">
            <div>
              <span className="text-[#8C8375] uppercase block text-xs">Direct Email:</span>
              <a href="mailto:minhpham.design@gmail.com" className="text-white font-bold hover:text-[#FF5035] transition-colors">
                minhpham.design@gmail.com
              </a>
            </div>
            <div>
              <span className="text-[#8C8375] uppercase block text-xs">Response Time:</span>
              <span className="text-[#D6C8B0]">Within 24 hours</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#0B0B0B] border border-[rgba(214,200,176,0.15)] p-6 sm:p-10 rounded-xl shadow-2xl">
          {submitted ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#FF5035]/20 border border-[#FF5035] flex items-center justify-center text-[#FF5035] text-2xl mx-auto font-bold">
                ✓
              </div>
              <h3 className="font-display text-2xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-sm text-[#8C8375] max-w-md mx-auto">
                Thank you for reaching out, {formData.name}. I'll review your project details and get back to you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 text-xs font-mono font-bold text-black bg-[#FF5035] rounded-full uppercase tracking-wider hover:bg-white transition-colors"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded font-mono">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono text-[#8C8375] uppercase block mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#8C8375] uppercase block mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-[#8C8375] uppercase block mb-2">
                  Project Type
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors"
                >
                  <option value="Web Development">Web App Development</option>
                  <option value="3D & WebGL Experience">3D & WebGL Experience</option>
                  <option value="Product Design">Product & UI/UX Design</option>
                  <option value="Consulting">Design System Consulting</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-[#8C8375] uppercase block mb-2">
                  Project Brief / Message *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project goals, timeline, and vision..."
                  className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs font-bold font-mono tracking-[0.2em] text-black bg-[#FF5035] rounded uppercase hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SEND MESSAGE</span>
                <span>→</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
