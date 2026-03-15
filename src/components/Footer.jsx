import { useState } from 'react';
import { Github, Linkedin, Mail, Copy, Check, Shield, Heart } from 'lucide-react';

const EMAIL = 'trangiabaoit@gmail.com';
const GITHUB = 'https://github.com/rizy44';
const LINKEDIN = 'https://linkedin.com/in/trangiabaoit';

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked */
    }
  };

  return (
    <footer id="contact" className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Get in Touch</h3>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-slate-400">
              Interested in collaborating on security projects or discussing cloud infrastructure?
              Feel free to reach out — I'm always open to new opportunities and conversations.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
              >
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <button
                onClick={copyEmail}
                className="rounded-md border border-slate-700 p-1.5 text-slate-400 transition-all hover:border-slate-600 hover:text-white"
                title="Copy email"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>

            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
            >
              <Github className="h-4 w-4" />
              github.com/rizy44
            </a>

            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-cyan-400"
            >
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/trangiabaoit
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/60 pt-8 sm:flex-row">
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
