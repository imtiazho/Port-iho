import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import AvailabilityBadge from './AvailabilityBadge';
import LocalStatus from './LocalStatus';
import SectionIndicator from './SectionIndicator';

const socialLinks = [
  { label: '[LINKEDIN ↗]', url: 'https://linkedin.com', title: 'LinkedIn' },
  { label: '[GITHUB ↗]', url: 'https://github.com', title: 'GitHub' },
  { label: '[X / TWITTER ↗]', url: 'https://twitter.com', title: 'X / Twitter' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const directEmail = 'minhpham.design@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="contact-form" className="relative w-full bg-[#090909] text-[#D6C8B0] py-20 sm:py-28 px-4 sm:px-8 lg:px-24 border-b border-[rgba(214,200,176,0.12)] selection:bg-[#FF5035] selection:text-black overflow-hidden">
      <SectionIndicator sectionNumber="08" />

      {/* Outer 2-Column Grid Container with Precise Col Spans */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

        {/* Left Column: Heading, Availability Status & Direct Contact Badges */}
        <div className="lg:col-span-6 xl:col-span-7 w-full overflow-hidden space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] border border-[#D6C8B0]/15 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-[#FF5035] uppercase font-bold">
                [ 08 / CONTACT ]
              </span>
            </div>

            <AvailabilityBadge text="AVAILABLE FOR NEW PROJECTS 2026" />
            <div>
              <LocalStatus />
            </div>
          </div>

          {/* Dynamic Clamped & Word-Wrapped Headline */}
          <h2 className="text-[clamp(2.2rem,4vw,4.25rem)] font-extrabold tracking-tight leading-[0.92] uppercase text-white break-words font-display">
            Let's build something <span className="text-[#FF5035]">extraordinary</span> together.
          </h2>

          <p className="text-base sm:text-lg text-[#8C8375] font-normal leading-relaxed max-w-xl">
            Have a project in mind, need full-stack architecture, or want to build interactive web experiences? Drop a message below or email directly.
          </p>

          {/* Direct Email & Copy Badge */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${directEmail}`}
                className="font-mono text-xs sm:text-sm text-[#D6C8B0] bg-[#111111] border border-[#D6C8B0]/20 hover:border-[#FF5035] hover:text-[#FF5035] px-4 py-2.5 rounded-full transition-all duration-300 inline-flex items-center gap-2 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF5035] animate-pulse shrink-0" />
                <span className="truncate">{directEmail}</span>
                <span className="text-[10px] text-[#8C8375]">✉</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="font-mono text-xs text-[#8C8375] bg-[#090909] border border-[rgba(214,200,176,0.15)] hover:border-[#FF5035] hover:text-white px-3.5 py-2.5 rounded-full transition-all duration-300 cursor-pointer shrink-0"
                title="Copy Email Address"
              >
                {copied ? '[COPIED! ✓]' : '[COPY]'}
              </button>
            </div>

            {/* Social / Professional Links Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-[#D6C8B0] bg-[#0B0B0B] border border-[#D6C8B0]/20 hover:border-[#FF5035] hover:text-[#FF5035] px-3.5 py-2 rounded-full transition-all duration-300 inline-flex items-center gap-1 cursor-pointer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Response Time Indicator */}
          <div className="pt-4 space-y-2 font-mono text-xs border-t border-[rgba(214,200,176,0.1)]">
            <div className="flex items-center gap-2">
              <span className="text-[#8C8375] uppercase">Average Response Time:</span>
              <span className="text-[#D6C8B0] font-bold">Within 24 Hours</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-6 xl:col-span-5 w-full bg-[#0B0B0B] border border-[rgba(214,200,176,0.15)] p-6 sm:p-10 rounded-xl shadow-2xl">
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
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 text-xs font-mono font-bold text-black bg-[#FF5035] rounded-full uppercase tracking-wider hover:bg-white transition-colors cursor-pointer"
              >
                Send Another Message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between border-b border-[rgba(214,200,176,0.1)] pb-4 mb-2">
                <span className="text-xs font-mono text-[#FF5035] uppercase font-bold tracking-wider">
                  [ DIRECT PROJECT BRIEF FORM ]
                </span>
                <span className="text-xs font-mono text-[#8C8375]">
                  Instant Dispatch
                </span>
              </div>

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
                    className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded-lg px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors"
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
                    className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded-lg px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors"
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
                  className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded-lg px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors"
                >
                  <option value="Web Development">Full-Stack Web App</option>
                  <option value="SaaS Engineering">SaaS & Product Engineering</option>
                  <option value="3D & Interactive UI">3D & WebGL Experience</option>
                  <option value="Performance Tuning">Performance & Code Optimization</option>
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
                  className="w-full bg-[#090909] border border-[rgba(214,200,176,0.2)] rounded-lg px-4 py-3 text-sm text-[#D6C8B0] focus:border-[#FF5035] focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs font-bold font-mono tracking-[0.2em] text-black bg-[#FF5035] rounded-lg uppercase hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
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
