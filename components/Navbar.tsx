'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Tech', href: '#tech' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#08080a]/90 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand / Logo - High Hierarchy */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center"
        >
          <Link
            href="#home"
            className="text-xl font-extrabold tracking-wider text-white hover:text-[#cfff5e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfff5e]"
          >
            VM
          </Link>
        </motion.div>

        {/* Desktop Navigation - De-emphasized secondary links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center space-x-8"
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <Link
                href={link.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}

          {/* Primary Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <a
              href="/Vitalie_Matvei_CV_En.pdf"
              download="Vitalie_Matvei_CV_En.pdf"
              className="inline-block bg-[#cfff5e] hover:bg-[#b8eb4a] text-black font-bold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-[0_0_15px_rgba(207,255,94,0.3)] hover:shadow-[0_0_25px_rgba(207,255,94,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Resume
            </a>
          </motion.div>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-white p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cfff5e]"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="lg:hidden max-h-[calc(100dvh-5rem)] bg-[#08080a] border-b border-slate-800 px-6 py-6 space-y-4 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white text-base font-medium transition-colors duration-200 block py-1"
                >
                  {link.name}
                </Link>
              </div>
            ))}

            <div className="pt-2">
              <a
                href="/Vitalie_Matvei_CV_En.pdf"
                download="Vitalie_Matvei_CV_En.pdf"
                onClick={() => setIsOpen(false)}
                className="inline-block w-full text-center bg-[#cfff5e] text-black font-bold px-6 py-2.5 rounded-full text-sm shadow-[0_0_15px_rgba(207,255,94,0.3)]"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
