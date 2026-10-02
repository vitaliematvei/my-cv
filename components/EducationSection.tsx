'use client';

import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  faculty?: string;
  gpaScore?: {
    value: string;
    max: string;
  };
  description: string;
}

const educationData: EducationItem[] = [
  {
    institution: 'Technical University of Moldova',
    degree: "Bachelor's Degree in Engineering",
    period: '2012 – 2017',
    faculty: 'Computers, Informatics & Microelectronics',
    gpaScore: {
      value: '9',
      max: '10',
    },
    description:
      'Focused on algorithms, data structures, high-level programming (C/C++, C#), computer architecture, and numerical computation.',
  },
  {
    institution: 'Pentalog CHI S.R.L',
    degree: 'Web Academy (Angular Development)',
    period: '2017 – 2018',
    faculty: 'Frontend Architecture & Engineering',
    description:
      'Completed an intensive frontend academy focusing on modern web development, component architecture, and engineering best practices.',
  },
];

export default function AcademicBackground() {
  return (
    <section
      id="education"
      className="bg-[#08080a] text-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Academic <span className="text-[#cfff5e]">Background</span>
          </h2>
          <div className="flex justify-center pt-2">
            <div className="w-12 h-1 bg-[#cfff5e] rounded-full" />
          </div>
        </div>

        {/* Education List Container */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111216] border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-[#cfff5e]/30 transition-all duration-300 shadow-xl relative overflow-hidden group"
            >
              {/* Header inside Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {item.institution}
                  </h3>
                  <p className="text-indigo-400 font-medium text-sm sm:text-base mt-1">
                    {item.degree}
                  </p>
                </div>

                {/* Period Badge + Cap Icon */}
                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <span className="bg-[#181a20] border border-slate-800 text-slate-300 text-xs font-semibold px-4 py-1.5 rounded-full tracking-wider">
                    {item.period}
                  </span>
                  <div className="p-2 rounded-full bg-slate-800/50 text-indigo-400/80">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Grid content inside Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                {/* Left Side: Score Box & Faculty info */}
                <div className="md:col-span-5 flex flex-col justify-center space-y-3">
                  {/* GPA Score Box - identic cu imaginea ta */}
                  {item.gpaScore && (
                    <div className="bg-[#0b0c0e] border border-slate-800/90 rounded-xl py-4 px-6 flex flex-col items-center justify-center text-center shadow-inner">
                      <span className="text-[11px] font-mono font-bold tracking-widest text-slate-400 uppercase mb-1">
                        GPA SCORE
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-extrabold text-white tracking-tight">
                          {item.gpaScore.value}
                        </span>
                        <span className="text-slate-400 text-base font-semibold">
                          / {item.gpaScore.max}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Faculty Info Box */}
                  {item.faculty && (
                    <div className="bg-[#0b0c0e] border border-slate-800/90 rounded-xl py-3 px-4 text-center">
                      <span className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase block mb-0.5">
                        FACULTY
                      </span>
                      <p className="text-xs font-bold text-slate-200 leading-snug">
                        {item.faculty}
                      </p>
                    </div>
                  )}
                </div>

                {/* Right Description / Quote */}
                <div className="md:col-span-7 flex items-center p-2">
                  <p className="text-slate-400 text-sm sm:text-base italic leading-relaxed font-sans border-l-2 border-indigo-500/30 pl-4">
                    "{item.description}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
