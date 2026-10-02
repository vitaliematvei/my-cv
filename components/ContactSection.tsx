'use client';

import React from 'react';
import { BriefcaseBusiness, Code2, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  download?: boolean;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    icon: (
      <Code2 className="w-5 h-5 text-slate-300 group-hover:text-[#cfff5e] transition-colors" />
    ),
    href: 'https://github.com/vitaliematvei?tab=repositories',
  },
  {
    name: 'LinkedIn',
    icon: (
      <BriefcaseBusiness className="w-5 h-5 text-slate-300 group-hover:text-[#cfff5e] transition-colors" />
    ),
    href: 'https://www.linkedin.com/in/vitalie-matvei-3a7881140/?isSelfProfile=true', // Pune link-ul tău de LinkedIn
  },
  {
    name: 'Email',
    icon: (
      <Mail className="w-5 h-5 text-slate-300 group-hover:text-[#cfff5e] transition-colors" />
    ),
    href: 'mailto:vitaliematvei@gmail.com',
  },
  {
    name: 'Download CV',
    icon: (
      <Download className="w-5 h-5 text-slate-300 group-hover:text-[#cfff5e] transition-colors" />
    ),
    href: '/Vitalie_Matvei_CV_En.pdf', // Calea către fișierul PDF din public
    download: true,
  },
];

export default function LetsChat() {
  return (
    <section
      id="contact"
      className="bg-[#08080a] text-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let's <span className="text-[#cfff5e]">Chat</span>
          </h2>

          {/* Accent Line */}
          <div className="flex justify-center pt-1">
            <div className="w-12 h-1 bg-[#cfff5e] rounded-full" />
          </div>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed pt-2">
            Feel free to reach out if you have a project in mind, want to hire
            me, or just want to tell me my animations are "too much".
          </p>
        </motion.div>

        {/* Social Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center gap-4 pt-4"
        >
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.download ? '_self' : '_blank'}
              rel="noopener noreferrer"
              download={link.download}
              title={link.name}
              className="group p-3.5 bg-[#111216] border border-slate-800/80 rounded-xl hover:border-[#cfff5e]/50 hover:bg-[#181a20] transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(207,255,94,0.15)] hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
