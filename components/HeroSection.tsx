'use client';

import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolioData';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  };

  return (
    <section
      id="about"
      aria-labelledby="hero-title"
      className="scroll-mt-24 pt-28 md:pt-40 pb-10 md:pb-16 flex flex-col justify-between items-center min-h-[calc(100vh-5rem)] overflow-hidden"
    >
      {/* Structură Flex/Grid pe 2 Coloane (Stânga: Text, Dreapta: Foto) */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 my-auto">
        {/* COLOANA 1 (STÂNGA): Text & Call-to-Action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full md:w-[55%] space-y-5"
        >
          {/* Subtitlu/Greeting - Nivel secundar de ierarhie */}
          <motion.p
            variants={itemVariants}
            className="text-sm font-mono text-slate-400 tracking-wide"
          >
            Hi, I'm{' '}
            <span className="text-[#cfff5e] font-semibold">
              {personalInfo.name}
            </span>{' '}
            👋
          </motion.p>

          {/* Titlu Principal - Elementul cu cea mai mare pondere vizuală */}
          <motion.h1
            variants={itemVariants}
            id="hero-title"
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Full Stack <br />
            <span className="text-[#cfff5e]">{personalInfo.title}</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-xl font-medium text-slate-400 h-8"
          >
            <Typewriter
              options={{
                strings: [
                  'Full Stack & Audio Engineer.',
                  'React/Next.js Developer.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.h2>

          {/* Descriere/Bio cu contrast ajustat pe fundal închis */}
          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed font-mono"
          >
            {personalInfo.bio}
            <br />
            <span className="text-[#cfff5e]/90 font-mono text-sm inline-block mt-3">
              {personalInfo.quote}
            </span>
          </motion.p>

          {/* Micro Quote - Text terțiar */}
          <motion.p
            variants={itemVariants}
            className="text-xs font-mono text-slate-500 pt-1"
          >
            {personalInfo.microQuote}
          </motion.p>
        </motion.div>

        {/* COLOANA 2 (DREAPTA): Fotografie & Elemente Accente */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-[40%] flex justify-center relative items-center py-6"
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96">
            {/* Matrice de puncte - De-accentuată (opacitate mică pentru a nu perturba focalizarea) */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -left-6 grid grid-cols-8 gap-2 text-indigo-500/20 z-0 pointer-events-none"
            >
              {Array.from({ length: 64 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 rounded-full bg-current" />
              ))}
            </div>

            {/* Ramă offset accent shadow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 border border-white/20 rounded-md z-0 pointer-events-none"
            />

            {/* Imaginea de profil propriu-zisă */}
            <div className="relative w-full h-full rounded-md overflow-hidden z-10 shadow-2xl border border-white/10">
              <Image
                src="/mViFoto.jpg"
                alt={personalInfo.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* MESAJUL SCROLL DOWN (Jos, centrat pe lățimea întregii secțiuni) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="w-full flex justify-center items-center pt-8"
        aria-hidden="true"
      >
        <motion.p
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-xs font-mono text-slate-400 flex flex-col items-center gap-1.5 cursor-pointer hover:text-[#cfff5e] transition-colors"
        >
          <span>Scroll down</span>
          <span className="text-sm">↓</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
