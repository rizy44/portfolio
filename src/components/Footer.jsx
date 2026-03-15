import { Github, Linkedin, Mail, Phone, Shield, Heart } from 'lucide-react';

const EMAIL = 'tommytran1312@gmail.com';
const GITHUB = 'https://github.com/rizy44';
const LINKEDIN = 'https://www.linkedin.com/in/baotran-sec';
const PHONE = '+84 888 944 945';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-100 dark:border-slate-800/60 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get in Touch</h3>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Interested in collaborating on security projects or discussing cloud infrastructure?
              Feel free to reach out — I'm always open to new opportunities and conversations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              <Mail className="h-4 w-4" />
              {EMAIL}
            </a>

            <a
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              <Github className="h-4 w-4" />
              github.com/rizy44
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 transition-colors hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-400"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/baotran-sec
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 dark:border-slate-800/60 sm:flex-row">
          <p className="flex items-center gap-1 text-xs text-slate-500">
            Built with <Heart className="h-3 w-3 text-rose-500" /> by Tran Gia Bao
          </p>
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
