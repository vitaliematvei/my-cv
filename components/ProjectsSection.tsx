'use client';

import { projects } from '@/data/portfolioData';
import { ExternalLink, GitBranch } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold text-white uppercase tracking-wider">
          Featured <span className="text-[#adff2f]">Creations</span>
        </h2>
        <p className="text-xs font-mono text-slate-500">
          // A selection of my best work, from concept to deployment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111216] border border-slate-800/90 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#adff2f]/50 transition-all duration-300"
          >
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-white">{project.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono bg-slate-900 text-slate-300 px-2 py-0.5 rounded border border-slate-800"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0 flex gap-4 text-xs font-mono text-slate-300">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  className="flex items-center gap-1.5 hover:text-[#adff2f] transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Website
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-1.5 hover:text-[#adff2f] transition-colors"
                >
                  <GitBranch className="w-3.5 h-3.5" /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
