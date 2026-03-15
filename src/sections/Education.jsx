import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="mb-3 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
            <span className="font-mono text-sm text-cyan-600 dark:text-cyan-400">04</span>
          </div>
          <h2 className="mb-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
            Education
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400">
            Academic background in information security and secure systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm sm:flex-row sm:items-center sm:gap-8 dark:border-slate-800/60 dark:bg-slate-900/50"
        >
          <div className="flex shrink-0 items-center justify-center border-b border-slate-200 bg-white p-8 sm:border-b-0 sm:border-r dark:border-slate-800/40 sm:py-12">
            <img
              src="/images/uit-logo.png"
              alt="University of Information Technology – VNU-HCM"
              className="h-28 w-auto object-contain sm:h-32"
            />
          </div>
          <div className="flex-1 p-6 sm:p-8">
            <h3 className="mb-1 text-xl font-semibold text-slate-900 dark:text-white">
              University of Information Technology – VNU-HCM
            </h3>
            <p className="mb-3 text-sm text-slate-500">2023 – Present</p>
            <p className="mb-2 font-medium text-cyan-600 dark:text-cyan-400">
              Bachelor of Engineering in Information Security
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <span>
                GPA: <span className="font-semibold text-slate-900 dark:text-white">8.6/10</span>{' '}
                <span className="text-slate-500">(3.5/4)</span>
              </span>
              <span>Expected Graduation: 2027</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
