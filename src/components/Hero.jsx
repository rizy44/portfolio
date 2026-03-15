import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Terminal } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const socials = [
  { icon: Github, href: 'https://github.com/rizy44', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/trangiabaoit', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:trangiabaoit@gmail.com', label: 'Email' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0a1628] to-slate-950" />
      <div className="bg-grid-pattern absolute inset-0" />
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Text content */}
          <motion.div variants={container} initial="hidden" animate="show" className="flex-1">
            {/* Terminal-style tag */}
            <motion.div variants={item} className="mb-6 flex items-center gap-2">
              <Terminal className="h-4 w-4 text-cyan-400" />
              <span className="font-mono text-sm text-cyan-400">~/security-engineer</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={item}
              className="mb-4 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Tran Gia Bao
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={item}
              className="mb-6 text-lg font-medium sm:text-xl lg:text-2xl"
            >
              <span className="text-cyan-400">Security Engineer</span>
              <span className="mx-3 text-slate-600">|</span>
              <span className="text-emerald-400">DevSecOps</span>
              <span className="mx-3 text-slate-600">|</span>
              <span className="text-violet-400">Cloud Security</span>
            </motion.p>

            {/* Description */}
            <motion.p
              variants={item}
              className="mb-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              I build secure cloud infrastructure and automation systems that detect
              security risks before they become incidents.
            </motion.p>

            <motion.p
              variants={item}
              className="mb-8 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              Passionate about bridging security and operations — from designing
              SOAR platforms and IaC pipelines on OpenStack to hands-on CTF
              challenges in forensics and reverse engineering. I approach every
              system with a DevSecOps mindset: automate detection, enforce
              compliance, and remediate fast.
            </motion.p>

            {/* Social links */}
            <motion.div variants={item} className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-lg border border-slate-700/60 bg-slate-800/40 px-4 py-2.5 text-sm font-medium text-slate-300 transition-all hover:border-cyan-500/40 hover:bg-slate-800/80 hover:text-white"
                >
                  <Icon className="h-4 w-4 transition-colors group-hover:text-cyan-400" />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-500/30 via-violet-500/20 to-emerald-500/30 blur-md" />
              <img
                src="/images/profile.jpg"
                alt="Tran Gia Bao"
                className="relative h-56 w-56 rounded-full border-2 border-slate-700/60 object-cover shadow-2xl sm:h-64 sm:w-64 lg:h-72 lg:w-72"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="h-5 w-5 text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
