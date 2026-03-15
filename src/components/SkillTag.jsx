const colorMap = {
  'DevSecOps': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  'Infrastructure Security': 'bg-red-500/15 text-red-400 border-red-500/25',
  'Cloud Security': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
  'SOAR': 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  'Automation': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25',
  'Cloud Infrastructure': 'bg-blue-500/15 text-blue-400 border-blue-500/25',
  'IaC': 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  'Load Balancing': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
  'Container Orchestration': 'bg-teal-500/15 text-teal-400 border-teal-500/25',
  'CI/CD': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25',
  'Anomaly Detection': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  'Hybrid Cloud': 'bg-sky-500/15 text-sky-400 border-sky-500/25',
  'Threat Analysis': 'bg-red-500/15 text-red-400 border-red-500/25',
  'Digital Forensics': 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  'Memory Analysis': 'bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/25',
  'Incident Response': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  'Evidence Collection': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  'Reverse Engineering': 'bg-pink-500/15 text-pink-400 border-pink-500/25',
  'Malware Analysis': 'bg-red-500/15 text-red-400 border-red-500/25',
  'PE Format Internals': 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  'Binary Analysis': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  'Web Security': 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25',
  'Penetration Testing': 'bg-red-500/15 text-red-400 border-red-500/25',
  'OWASP Top 10': 'bg-orange-500/15 text-orange-400 border-orange-500/25',
  'Vulnerability Assessment': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  'Binary Exploitation': 'bg-red-500/15 text-red-400 border-red-500/25',
  'Low-Level Security': 'bg-pink-500/15 text-pink-400 border-pink-500/25',
  'x86 Assembly': 'bg-slate-500/15 text-slate-400 border-slate-500/25',
  'Exploit Development': 'bg-rose-500/15 text-rose-400 border-rose-500/25',
  'AI/ML Security': 'bg-violet-500/15 text-violet-400 border-violet-500/25',
  'Smart Contract Security': 'bg-amber-500/15 text-amber-400 border-amber-500/25',
  'NLP': 'bg-purple-500/15 text-purple-400 border-purple-500/25',
  'Deep Learning': 'bg-indigo-500/15 text-indigo-400 border-indigo-500/25',
  'RAG Systems': 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',
};

const defaultColor = 'bg-slate-500/15 text-slate-400 border-slate-500/25';

export default function SkillTag({ name }) {
  const colorClass = colorMap[name] || defaultColor;

  return (
    <span
      className={`inline-block rounded-full border px-3 py-1 text-xs font-medium ${colorClass}`}
    >
      {name}
    </span>
  );
}
