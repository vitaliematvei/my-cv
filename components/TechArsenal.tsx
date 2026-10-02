'use client';

import React from 'react';
import {
  Layout,
  Server,
  Database,
  Cpu,
  Wrench,
  Globe,
  Zap,
  Bot,
  Box,
  Code2,
  Terminal,
} from 'lucide-react';

interface TechItem {
  name: string;
  icon?: React.ReactNode;
}

interface TechCategory {
  title: string;
  categoryIcon: React.ReactNode;
  technologies: TechItem[];
}

const techData: TechCategory[] = [
  {
    title: 'Frontend',
    categoryIcon: <Layout className="w-5 h-5 text-cyan-400" />,
    technologies: [
      { name: 'React.js' },
      { name: 'Next.js' },
      { name: 'Redux' },
      { name: 'TailwindCSS' },
      { name: 'Framer Motion' },
    ],
  },
  {
    title: 'Backend',
    categoryIcon: <Server className="w-5 h-5 text-emerald-400" />,
    technologies: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'TypeScript' },
    ],
  },
  {
    title: 'Database & Storage',
    categoryIcon: <Database className="w-5 h-5 text-cyan-400" />,
    technologies: [
      { name: 'Sanity' },
      { name: 'PostgreSQL' },
      { name: 'Prisma' },
      { name: 'MongoDB' },
      { name: 'MySQL' },
    ],
  },
  {
    title: 'AI & Automation',
    categoryIcon: <Cpu className="w-5 h-5 text-purple-400" />,
    technologies: [
      { name: 'Gemini AI' },
      { name: 'Microsoft Copilot' },
      { name: 'AI Agents' },
    ],
  },
  {
    title: 'Tools & Platforms',
    categoryIcon: <Wrench className="w-5 h-5 text-lime-400" />,
    technologies: [
      { name: 'Postman' },
      { name: 'GitHub' },
      { name: 'Vercel' },
      { name: 'Stripe' },
      { name: 'AWS' },
      { name: 'Docker' },
    ],
  },
];

export default function TechArsenal() {
  return (
    <section
      id="tech"
      className="bg-[#08080a] text-white py-10 md:py-16 px-4 md:px-8 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Tech <span className="text-[#cfff5e]">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Weaponry of choice for building modern web apps.
          </p>
          {/* Accent Line */}
          <div className="flex justify-center pt-2">
            <div className="w-16 h-1 bg-[#cfff5e] rounded-full" />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start">
          {techData.map((category, idx) => (
            <div key={idx} className="flex flex-col space-y-5 relative group">
              {/* Category Header */}
              <div className="flex flex-col space-y-3">
                <div className="p-2.5 w-fit rounded-lg bg-slate-900/80 border border-slate-800 shadow-inner">
                  {category.categoryIcon}
                </div>
                <h3 className="text-lg font-bold tracking-wide text-slate-100">
                  {category.title}
                </h3>
              </div>

              {/* Badges Grid (2-column inside each category) */}
              <div className="grid grid-cols-2 gap-2.5">
                {category.technologies.map((tech, tIdx) => {
                  const isFullWidth =
                    category.technologies.length % 2 !== 0 &&
                    tIdx === category.technologies.length - 1;

                  return (
                    <div
                      key={tIdx}
                      className={`flex items-center justify-center gap-2 bg-[#111216] border border-slate-800/80 hover:border-slate-700 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-200 transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md ${
                        isFullWidth ? 'col-span-2' : 'col-span-1'
                      }`}
                    >
                      <span className="truncate">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
