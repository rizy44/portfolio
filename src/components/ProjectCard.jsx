import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import SkillTag from './SkillTag';

export default function ProjectCard({
  title,
  description,
  technologies = [],
  skills = [],
  images = [],
  githubUrl,
  highlights = [],
  reportLinks = [],
  pipeline = [],
  index = 0,
}) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState({});

  const validImages = images.filter((_, i) => !imgError[i]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col overflow-hidden rounded-xl border border-slate-800/60 bg-slate-900/50 transition-all duration-300 hover:border-slate-700/80 hover:shadow-lg hover:shadow-cyan-500/5"
    >
      {validImages.length > 0 && (
        <div className="relative overflow-hidden">
          <div className="grid gap-2 p-3">
            {validImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} screenshot ${i + 1}`}
                className="w-full rounded-lg border border-slate-700/50 object-cover"
                onError={() => setImgError((prev) => ({ ...prev, [images.indexOf(src)]: true }))}
              />
            ))}
          </div>
        </div>
      )}

      {validImages.length === 0 && (
        <div className="flex h-40 items-center justify-center bg-gradient-to-br from-slate-800/50 to-slate-900/80">
          <div className="text-center">
            <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10">
              <span className="text-xl text-cyan-400">{'</>'}</span>
            </div>
            <p className="text-xs text-slate-500">Architecture Diagram</p>
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-cyan-400">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{description}</p>

        {pipeline.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap items-center gap-1">
              {pipeline.map((step, i) => (
                <div key={i} className="flex items-center">
                  <span className="rounded bg-cyan-500/10 px-2 py-0.5 text-xs font-medium text-cyan-400">
                    {step.step}
                  </span>
                  {i < pipeline.length - 1 && (
                    <span className="mx-1 text-slate-600">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {highlights.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              {expanded ? 'Hide' : 'Show'} Details
              {expanded ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>
            {expanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-2 space-y-1.5"
              >
                {highlights.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs leading-relaxed text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </motion.ul>
            )}
          </div>
        )}

        <div className="mb-3 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-slate-800/80 px-2 py-0.5 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <SkillTag key={skill} name={skill} />
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-700/50 hover:text-white"
            >
              <Github className="h-3.5 w-3.5" />
              Source Code
            </a>
          )}
          {reportLinks?.map((link, i) => (
            <a
              key={i}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-700/50 hover:text-white"
            >
              <FileText className="h-3.5 w-3.5" />
              Report {reportLinks.length > 1 ? i + 1 : ''}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
