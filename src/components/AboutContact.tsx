import { motion } from 'motion/react';
import { BIO_DETAILS } from '../data';
import { Mail, MapPin, Send, ArrowUpRight, CheckCircle } from 'lucide-react';
import React, { useState } from 'react';

interface AboutContactProps {
  initialTab?: 'about' | 'contact';
}

export default function AboutContact({ initialTab = 'about' }: AboutContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 5000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 space-y-24 md:space-y-36" id="about-contact-root">
      {/* SECTION 1: BIOGRAPHY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20" id="bio-section">
        {/* Left column: High-profile Title & Location */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-mono text-[10px] tracking-widest text-stone-500 font-bold uppercase block mb-2">
            01 / WHO IS AJITH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-none tracking-tighter uppercase text-[#141414]">
            MAKING <br />
            CODE FEEL <br />
            <span className="font-serif italic lowercase font-normal text-[#141414]/60 hover:text-[#141414] transition-all duration-300">tactile.</span>
          </h2>
          
          <div className="flex items-center gap-2.5 font-mono text-[11px] text-stone-600">
            <MapPin size={14} className="text-[#141414]/70" />
            Bengaluru, India (Global Remote Service)
          </div>

          {/* Bio image fallback avatar */}
          <div className="aspect-square w-full sm:w-80 rounded-2xl overflow-hidden border border-[#141414]/10 relative bg-stone-300 group shadow-sm">
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#141414]/90 p-4 z-10">
              <span className="font-mono text-[9px] text-[#F5F5F4]/80 tracking-widest">CREATIVE DIRECTION</span>
              <p className="font-sans text-xs text-[#F5F5F4] font-semibold">Ajith — Code & Visuals</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80"
              alt="Minimalist abstract curves"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102 filter grayscale bg-neutral-900"
            />
          </div>
        </div>

        {/* Right column: Narrative Text & Timeline */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6 font-sans text-[15px] sm:text-[16px] text-stone-700 leading-relaxed font-normal">
            {BIO_DETAILS.aboutText.map((paragraph, index) => (
              <p key={index} id={`bio-para-${index}`}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Timeline and History */}
          <div className="space-y-6" id="experience-log">
            <h3 className="font-sans text-xs tracking-widest font-bold uppercase text-stone-500 border-b border-[#141414]/10 pb-2">
              Select Experience Timeline
            </h3>

            <div className="space-y-4">
              {BIO_DETAILS.experience.map((exp, index) => (
                <div 
                  key={index} 
                  className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#141414]/10 pb-4 gap-2"
                  id={`exp-row-${index}`}
                >
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs text-stone-500">{exp.year}</span>
                    <span className="font-sans text-sm font-semibold text-[#141414]">{exp.role}</span>
                  </div>
                  <span className="font-mono text-xs text-stone-500 sm:text-right">{exp.studio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SKILLS MATRIX */}
      <section className="space-y-10" id="visual-skills">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] tracking-widest text-[#141414]/60 font-bold uppercase block">
            02 / TECH STACK & DESIGN MATRICES
          </span>
          <h2 className="font-display text-xl tracking-widest font-bold uppercase text-[#141414]">
            Core Competencies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="skills-grid">
          {BIO_DETAILS.skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-stone-200/40 border border-[#141414]/10 rounded-3xl p-6 sm:p-8 space-y-6"
              id={`skill-group-${skillGroup.category.toLowerCase()}`}
            >
              <h3 className="font-sans text-xs font-bold tracking-widest uppercase text-[#141414] border-b border-[#141414]/10 pb-3">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map(skill => (
                  <span
                    key={skill}
                    className="bg-[#F5F5F4] hover:bg-[#141414] text-stone-700 hover:text-[#F5F5F4] hover:border-[#141414] transition-all duration-300 font-mono text-[11px] px-3.5 py-1.5 rounded-xl border border-[#141414]/15 shadow-sm"
                    id={`skill-tag-${skill}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: CONTACT FORM */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 border-t border-[#141414]/10 pt-16" id="contact-section">
        {/* Contact info handles */}
        <div className="lg:col-span-5 space-y-6">
          <span className="font-mono text-[10px] tracking-widest text-[#141414]/60 font-bold uppercase block">
            03 / ESTABLISHING CONTACT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black leading-none tracking-tighter uppercase text-[#141414]">
            LET’S WORK <br />
            TOGETHER
          </h2>
          <p className="font-sans text-sm text-stone-600 max-w-sm leading-relaxed">
            Have an experimental venture, a studio project, or a creative contract? Reach out and let’s construct something timeless.
          </p>

          <div className="space-y-4 pt-4" id="social-accounts">
            <p className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">Social Feeds</p>
            <div className="grid grid-cols-2 gap-3 max-w-xs">
              {BIO_DETAILS.socials.map(sock => (
                <a
                  key={sock.name}
                  href={sock.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#141414]/10 rounded-xl p-3 bg-stone-200/40 hover:bg-[#141414] hover:text-[#F5F5F4] hover:border-[#141414] text-xs text-stone-700 transition-all duration-300 group"
                  id={`social-link-${sock.name.toLowerCase()}`}
                >
                  {sock.name}
                  <ArrowUpRight size={10} className="text-stone-400 group-hover:text-[#F5F5F4] transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Email Form */}
        <div className="lg:col-span-7 bg-stone-200/40 border border-[#141414]/10 p-6 sm:p-10 rounded-3xl" id="form-container">
          {formSubmitted ? (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex flex-col items-center justify-center text-center py-12 space-y-4"
              id="submit-success-dialog"
            >
              <CheckCircle size={44} className="text-[#141414] animate-bounce" />
              <h3 className="font-sans text-lg font-bold uppercase text-[#141414]">Transmission Received</h3>
              <p className="font-sans text-sm text-stone-600 max-w-xs">
                Greetings! Your message was routed. Ajith will contact you back shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6" id="contact-form-portal">
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#F5F5F4] border border-[#141414]/15 rounded-xl px-4 py-3 font-sans text-sm text-[#141414] placeholder-stone-400 focus:outline-none focus:border-[#141414] focus:ring-1 focus:ring-[#141414]/15 transition-all duration-300"
                  id="form-input-name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g. john@domain.com"
                  className="w-full bg-[#F5F5F4] border border-[#141414]/15 rounded-xl px-4 py-3 font-sans text-sm text-[#141414] placeholder-stone-400 focus:outline-none focus:border-[#141414] focus:ring-1 focus:ring-[#141414]/15 transition-all duration-300"
                  id="form-input-email"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] text-stone-500 tracking-wider uppercase">
                  Project Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Explain your venture details..."
                  className="w-full bg-[#F5F5F4] border border-[#141414]/15 rounded-xl px-4 py-3 font-sans text-sm text-[#141414] placeholder-stone-400 focus:outline-none focus:border-[#141414] focus:ring-1 focus:ring-[#141414]/15 transition-all duration-300 resize-none"
                  id="form-textarea-message"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 rounded-xl bg-[#141414] text-[#F5F5F4] font-sans text-[11px] font-bold tracking-widest uppercase flex items-center justify-center gap-2 cursor-pointer focus:outline-none hover:bg-stone-800 transition-colors shadow-sm"
                id="form-submit-cta"
              >
                Send Message
                <Send size={11} className="text-[#F5F5F4] opacity-80" />
              </motion.button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
