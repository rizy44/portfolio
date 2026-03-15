import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import { competitions } from '../data/competitions';
import ProjectCard from '../components/ProjectCard';

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
            Competition Projects
          </h2>
          <p className="max-w-2xl text-slate-400">
            Projects built during competitions, focusing on system design,
            security architecture, and AI-powered security automation.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {competitions.map((comp, i) => (
            <ProjectCard
              key={comp.id}
              index={i}
              title={comp.title}
              description={comp.description}
              technologies={comp.technologies}
              skills={comp.skills}
              images={comp.images}
              highlights={comp.highlights}
              pipeline={comp.pipeline}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
