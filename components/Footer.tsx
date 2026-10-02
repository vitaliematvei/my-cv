'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08080a] text-white py-12 px-4 w-full border-t border-slate-900/60">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Quote line with code typography */}
        <p className="text-slate-400 font-mono text-sm sm:text-base tracking-wide">
          "Designed, Developed, Debugged and Deployed by{' '}
          <span className="text-[#cfff5e] underline underline-offset-4 font-semibold">
            Vitalie Matvei
          </span>
          ."
        </p>

        {/* Copyright notice */}
        <p className="text-slate-500 font-mono text-[11px] sm:text-xs tracking-widest uppercase pt-2">
          © {currentYear} VITALIE.DEV • ALL RIGHTS RESERVED • STAY CURIOUS
        </p>
      </div>
    </footer>
  );
}
