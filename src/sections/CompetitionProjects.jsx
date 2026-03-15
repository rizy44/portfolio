import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Github, Users, Award, ExternalLink } from 'lucide-react';
import { competitions } from '../data/competitions';
import SkillTag from '../components/SkillTag';

function CompetitionCard({ comp, index }) {
  const [imgError, setImgError] = useState({});
  const validImages = comp.images.filter((_, i) => !imgError[i]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 transition-all duration-300 hover:border-slate-700/80 hover:shadow-lg hover:shadow-amber-500/5"
    >
      {/* Header with role & result */}
      <div className="flex flex-wrap items-center gap-3 border-b border-slate-800/40 px-5 py-4">
        <h3 className="text-lg font-semibold text-white">{comp.title}</h3>
        {comp.subtitle && (
          <span className="rounded bg-slate-800 px-2 py-0.5 text-xs text-slate-400">
            {comp.subtitle}
          </span>
        )}
      </div>

      <div className="p-5">
        {/* Badges row */}
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400 ring-1 ring-violet-500/20">
            <Users className="h-3.5 w-3.5" />
            {comp.role}
          </span>
          <span className={`inline-flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-3 py-1.5 text-xs font-bold ring-1 ring-slate-700/50 ${comp.resultColor}`}>
            <Award className="h-3.5 w-3.5" />
            {comp.result}
          </span>
        </div>

        {comp.project && (
          <div className="mb-3 rounded-lg bg-slate-800/40 px-3 py-2">
            <p className="text-xs text-slate-500">Project</p>
            <p className="text-sm font-medium text-slate-200">{comp.project}</p>
          </div>
        )}

        <p className="mb-4 text-sm leading-relaxed text-slate-400">{comp.description}</p>

        {/* Image gallery */}
        {validImages.length > 0 && (
          <div className={`mb-4 grid gap-2 ${validImages.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {validImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${comp.title} ${i + 1}`}
                className={`w-full rounded-lg border border-slate-700/50 object-cover ${
                  validImages.length === 3 && i === 0 ? 'col-span-2' : ''
                }`}
                onError={() =>
                  setImgError((prev) => ({ ...prev, [comp.images.indexOf(src)]: true }))
                }
              />
            ))}
          </div>
        )}

        {/* Skills */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {comp.skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>

        {/* Links */}
        {comp.githubUrl && (
          <a
            href={comp.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-700/50 hover:text-white"
          >
            <Github className="h-3.5 w-3.5" />
            Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function CompetitionProjects() {
  return (
    <section id="competitions" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-amber-400" />
            <span className="font-mono text-sm text-amber-400">03</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Competitions
          </h2>
          <p className="max-w-2xl text-slate-400">
            Cybersecurity competitions, hackathons, and technical challenges —
            consistently leading teams and delivering solutions under pressure.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {competitions.map((comp, i) => (
            <CompetitionCard key={comp.id} comp={comp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
