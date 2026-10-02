'use client';

import Image from 'next/image';
import { Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
}

// Datele proiectelor (poți adăuga oricâte proiecte dorești)
const projectsData: ProjectItem[] = [
  {
    id: 'set-korg',
    title: 'Set Korg e-commerce',
    description:
      'An e-commerce web store for Set Korg, featuring a full-stack implementation with Next.js, TypeScript, Tailwind CSS, Sanity CMS, and Stripe integration.',
    image: '/set-korg.png',
    tags: [
      'NEXT.JS',
      'TYPESCRIPT',
      'NODE.JS',
      'SANITY CMS',
      'TAILWINDCSS',
      'STRIPE',
    ],
    websiteUrl: 'https://setkorg.com',
    githubUrl: 'https://github.com/vitaliematvei/korgpa',
  },
  {
    id: 'lumiere-solaire',
    title: 'Lumiere Solaire',
    description:
      'A platform for managing solar energy solutions, featuring automated compliance tracking and secure payment integrations for both business and blockchain.',
    image: '/lumiere-solaire.png',
    tags: [
      'NEXT.JS',
      'TYPESCRIPT',
      'NODE.JS',
      'SANITY CMS',
      'TAILWINDCSS',
      'STRIPE',
    ],
    websiteUrl: 'https://www.lumieresolaire.ca/',
    githubUrl: 'https://github.com/vitaliematvei/johnEcom',
  },
  {
    id: 'next-trip',
    title: 'Next Trip - on PROCESS',
    description:
      'A travel planning platform that helps users organize trips efficiently, featuring itinerary management, booking integrations, and personalized recommendations.',
    image: '/next-trip.png', // Înlocuiește cu calea către imaginea ta
    tags: ['NEXT.JS', 'TYPESCRIPT', 'TAILWINDCSS'],
    websiteUrl: 'https://example.com',
    githubUrl: 'https://github.com/vitaliematvei/next-trip',
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#08080a] text-white py-10 md:py-16 px-4 sm:px-6 lg:px-8 w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            FEATURED <span className="text-[#cfff5e]">CREATIONS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto font-mono">
            // A selection of my best work, from concept to deployment.
          </p>
          <div className="flex justify-center pt-2">
            <div className="w-12 h-1 bg-[#cfff5e] rounded-full" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#111216] border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#cfff5e]/40 transition-all duration-300 group shadow-xl"
            >
              <div>
                {/* Image Container */}
                <div className="relative w-full h-52 bg-slate-900 overflow-hidden border-b border-slate-800/80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-5">
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="bg-[#181a20] border border-slate-800 text-slate-300 text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 flex items-center gap-3">
                {project.websiteUrl && (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#181a20] hover:bg-[#22252e] border border-slate-800 hover:border-slate-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all duration-200"
                  >
                    <Globe className="w-4 h-4 text-slate-300" />
                    <span>Website</span>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[#181a20] hover:bg-[#22252e] border border-slate-800 hover:border-slate-700 text-white font-semibold text-xs py-2.5 px-4 rounded-xl transition-all duration-200"
                  >
                    {/* <Github className="w-4 h-4 text-slate-300" /> */}
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
