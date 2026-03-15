import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Languages as LanguagesIcon } from 'lucide-react';

const languages = [
  {
    name: 'Vietnamese',
    level: 'Native',
    score: null,
    percentage: 100,
    description: 'Native language — fluent in all professional and technical contexts.',
    color: 'bg-emerald-500',
    trackColor: 'bg-emerald-500/15',
  },
  {
    name: 'English',
    level: 'IELTS 6.0',
    score: '6.0',
    percentage: 75,
    description:
      'Comfortable reading technical documentation, writing reports, and communicating in international technical environments. Regularly work with English-language tools, papers, and open-source communities.',
    color: 'bg-cyan-500',
    trackColor: 'bg-cyan-500/15',
  },
];

function ProgressBar({ percentage, color, trackColor, inView }) {
  return (
    <div className={`h-2.5 w-full overflow-hidden rounded-full ${trackColor}`}>
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={inView ? { width: `${percentage}%` } : { width: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
      />
    </div>
  );
}

export default function Languages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="languages" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-200/50 to-transparent dark:via-slate-900/30" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-2">
            <LanguagesIcon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
            <span className="font-mono text-sm text-violet-600 dark:text-violet-400">05</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Language Proficiency
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800/60 dark:bg-slate-900/50"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{lang.name}</h3>
                <span className="rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {lang.level}
                </span>
              </div>

              <ProgressBar
                percentage={lang.percentage}
                color={lang.color}
                trackColor={lang.trackColor}
                inView={inView}
              />

              {lang.score && (
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900 dark:text-white">{lang.score}</span>
                  <span className="text-sm text-slate-500">/ 9.0</span>
                </div>
              )}

              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {lang.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
