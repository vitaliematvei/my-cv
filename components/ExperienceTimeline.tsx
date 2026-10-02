'use client';

import { motion } from 'framer-motion';

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  badgeText?: string;
  points: string[];
}

const experiencesData: ExperienceItem[] = [
  {
    period: '2022 – Present',
    role: 'Creator & Lead Developer',
    company: 'Setkorg (www.setkorg.com)',
    location: 'Remote, Moldova',
    badgeText: 'LEAD, Developer, Owner',
    points: [
      'Designed, developed, and deployed a complex full-stack web application from scratch, demonstrating advanced software architecture.',
      'Utilized Next.js, TypeScript, Tailwind CSS, Sanity CMS, and Stripe.',
      'Leveraged Copilot and Gemini AI workflows to write secure database queries and optimize UI/UX components.',
    ],
  },
  {
    period: '11/2018 – 07/2019',
    role: 'DevOps(Internship) & React-Native Developer',
    company: 'NTG S.R.L',
    location: 'Chisinau, Moldova',
    badgeText: 'React-Native Developer',
    points: [
      'Collaborated closely with a cross-functional development team to build and test cross-platform mobile apps with React-Native.',
      'Streamlined DevOps workflows and CI pipelines using Ansible, Terraform, and Docker containerization.',
      'Wrote clean, reusable components adhering to strict development milestones and product releases.',
    ],
  },
  {
    period: '09/2005 – Present',
    role: 'MIDI / Audio Engineer',
    company: 'Freelance / Self-Employed',
    location: 'Remote',
    badgeText: 'FREELANCE',
    points: [
      'Diagnosed and resolved complex audio issues specializing in DSP, multi-track mixing, and audio restoration.',
      'Provided Audio-to-MIDI conversion, spectral noise reduction (iZotope RX), and clean master processing.',
      'Managed contracts for local and international clients via platforms like Upwork, Fiverr, as well as direct engagements with local clients. ',
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="bg-[#08080a] text-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Professional <span className="text-[#cfff5e]">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Where I've been turning bugs into features.
          </p>
          <div className="flex justify-center pt-2">
            <div className="w-12 h-1 bg-[#cfff5e] rounded-full" />
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-32 md:ml-48 space-y-12">
          {experiencesData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#08080a] border-2 border-slate-700 flex items-center justify-center group-hover:border-[#cfff5e] transition-colors duration-300">
                <div className="w-3.5 h-3.5 rounded-full bg-[#cfff5e] shadow-[0_0_10px_rgba(207,255,94,0.8)]" />
              </div>

              {/* Period Label (Afișat în stânga pe ecran mare, sus pe mobil) */}
              <div className="sm:absolute sm:-left-36 md:-left-52 sm:top-1 sm:text-right sm:w-28 md:w-44 mb-2 sm:mb-0">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight block">
                  {item.period}
                </span>
              </div>

              {/* Cardul cu Experiența */}
              <div className="bg-[#111216] border border-slate-800/90 rounded-2xl p-6 sm:p-8 hover:border-[#cfff5e]/30 transition-all duration-300 shadow-xl relative overflow-hidden group-hover:shadow-[0_0_25px_rgba(207,255,94,0.05)]">
                {/* Glow subtil la hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#cfff5e]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#cfff5e]/10 transition-all duration-500" />

                {/* Role Header */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {item.role}
                </h3>

                {/* Company & Location Badges */}
                <div className="flex flex-wrap items-center gap-2.5 mt-2 mb-6">
                  {item.badgeText && (
                    <span className="bg-[#1e2415] text-[#cfff5e] text-[11px] font-bold px-2.5 py-0.5 rounded-md border border-[#cfff5e]/20 uppercase tracking-wider">
                      {item.badgeText}
                    </span>
                  )}
                  <span className="text-slate-400 text-xs sm:text-sm font-medium">
                    • {item.company} ({item.location})
                  </span>
                </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-slate-800/60 mb-6" />

                {/* Bullet Points */}
                <ul className="space-y-3">
                  {item.points.map((point, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="inline-block w-2 h-2 rounded-full border border-[#cfff5e] mt-1.5 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
