import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certs = [
  { name: 'Google AI Essentials', org: 'Google', date: '2024', category: 'AI', color: 'cyan', verify: '#' },
  { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services', date: '2024', category: 'Cloud', color: 'blue', verify: '#' },
  { name: 'Microsoft Azure Fundamentals', org: 'Microsoft', date: '2023', category: 'Cloud', color: 'blue', verify: '#' },
  { name: 'Meta Front-End Developer', org: 'Meta / Coursera', date: '2023', category: 'Dev', color: 'emerald', verify: '#' },
  { name: 'IBM Data Science Professional', org: 'IBM / Coursera', date: '2023', category: 'Data', color: 'teal', verify: '#' },
  { name: 'Google UX Design Certificate', org: 'Google', date: '2023', category: 'Design', color: 'cyan', verify: '#' },
  { name: 'Professional Scrum Master I', org: 'Scrum.org', date: '2022', category: 'Agile', color: 'emerald', verify: '#' },
  { name: 'GitHub Actions', org: 'GitHub', date: '2022', category: 'DevOps', color: 'teal', verify: '#' },
  { name: 'Responsive Web Design', org: 'freeCodeCamp', date: '2021', category: 'Dev', color: 'cyan', verify: '#' },
  { name: 'JavaScript Algorithms & DS', org: 'freeCodeCamp', date: '2021', category: 'Dev', color: 'emerald', verify: '#' },
  { name: 'Cybersecurity Fundamentals', org: 'IBM / Coursera', date: '2023', category: 'Security', color: 'blue', verify: '#' },
  { name: 'Python for Everybody', org: 'University of Michigan', date: '2022', category: 'Dev', color: 'teal', verify: '#' },
];

const categories = ['All', 'AI', 'Cloud', 'Dev', 'Data', 'Agile', 'DevOps', 'Security', 'Design'];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  cyan:    { bg: 'bg-cyan-400/10',    text: 'text-cyan-400',    border: 'border-cyan-400/20' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  blue:    { bg: 'bg-blue-400/10',    text: 'text-blue-400',    border: 'border-blue-400/20' },
  teal:    { bg: 'bg-teal-400/10',    text: 'text-teal-400',    border: 'border-teal-400/20' },
};

import { useState } from 'react';

export default function Certifications() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? certs : certs.filter(c => c.category === active);

  return (
    <section id="certifications" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Professional Development</p>
          <h2 className="section-title text-white mb-4">
            Certifications &<br /><span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Continuous learning backed by globally recognized certifications
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-3 py-1.5 rounded-xl text-sm font-semibold transition-all ${
                active === c ? 'bg-cyan-400 text-gray-950' : 'glass text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((cert, i) => {
            const c = colorMap[cert.color];
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card p-5 border ${c.border} group`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Award className={`w-4 h-4 ${c.text}`} strokeWidth={1.5} />
                  </div>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-cyan-400 transition-colors"
                    aria-label={`Verify ${cert.name}`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-white font-semibold text-sm mb-1 leading-tight group-hover:text-cyan-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-slate-500 text-xs mb-3">{cert.org}</p>

                <div className="flex items-center justify-between">
                  <span className={`tag text-xs ${cert.category === 'AI' ? 'tag-primary' : `${c.bg} ${c.text} border ${c.border}`}`}>
                    {cert.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-600 text-xs">
                    <Calendar className="w-3 h-3" /> {cert.date}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
