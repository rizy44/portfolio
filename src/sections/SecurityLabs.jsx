import { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical } from 'lucide-react';
import { labs, labCategories } from '../data/labs';
import ProjectCard from '../components/ProjectCard';

export default function SecurityLabs() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? labs : labs.filter((l) => l.category === active);

  return (
    <section id="security-labs" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-2">
            <FlaskConical className="h-5 w-5 text-emerald-400" />
            <span className="font-mono text-sm text-emerald-400">02</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Security Labs & CTF
          </h2>
          <p className="max-w-2xl text-slate-400">
            Hands-on security research across forensics, reverse engineering, web
            exploitation, and binary analysis — demonstrating practical offensive
            and defensive skills.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8 flex flex-wrap gap-2"
        >
          {labCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                active === cat
                  ? 'bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30'
                  : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((lab, i) => (
            <ProjectCard
              key={lab.id}
              index={i}
              title={lab.title}
              description={lab.description}
              technologies={lab.tools}
              skills={lab.skillsLearned}
              images={lab.images}
              highlights={lab.techniques}
              reportLinks={lab.reportLinks}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            No labs in this category yet — more coming soon.
          </div>
        )}
      </div>
    </section>
  );
}
