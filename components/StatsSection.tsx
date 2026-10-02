'use client';

import { personalInfo } from '@/data/portfolioData';

export default function StatsSection() {
  return (
    <section
      aria-labelledby="stats-title"
      className="space-y-10 md:space-y-12 py-10 md:py-16"
    >
      <div className="text-center max-w-4xl mx-auto space-y-4">
        {/* Titlu cu ierarhie vizuală clară */}
        <h2
          id="stats-title"
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
        >
          The <span className="text-[#cfff5e]">Dev</span>{' '}
          <span className="relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-[#cfff5e]/60 after:mt-1">
            Behind
          </span>{' '}
          the Code
        </h2>

        {/* Carduri de text pentru descriere (Clean hierarchy) */}
        <div className="flex flex-col md:flex-row gap-4 text-left text-sm sm:text-base text-slate-300 leading-relaxed pt-4">
          <p className="flex-1 bg-[#111216] p-6 rounded-xl border border-slate-800/80 shadow-sm">
            {personalInfo.aboutParagraphs[0]}
          </p>
          <p className="flex-1 bg-[#111216] p-6 rounded-xl border border-slate-800/80 shadow-sm">
            {personalInfo.aboutParagraphs[1]}
          </p>
        </div>

        <p className="text-[11px] font-mono text-slate-500 pt-1 tracking-widest uppercase">
          // Turning Coffee Into Scalable Web Apps
        </p>
      </div>

      {/* Carduri Statistice - Format clar "Data > Label" (Refactoring UI: Labels are secondary) */}
      <dl className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {personalInfo.stats.map((stat, idx) => (
          <div
            key={idx}
            className="min-w-0 bg-[#111216] border border-slate-800/80 p-4 sm:p-5 rounded-xl text-center space-y-1 hover:border-[#cfff5e]/40 transition-colors"
          >
            {/* Valoarea de date este elementul principal */}
            <dd className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {stat.value}
            </dd>
            {/* Eticheta (Label) este secundară - mai mică și mai opacă */}
            <dt className="text-[11px] font-mono font-medium tracking-wider text-slate-400 uppercase">
              {stat.label}
            </dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
