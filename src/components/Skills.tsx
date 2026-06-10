import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: 'cyan',
    skills: [
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'React', level: 88 },
      { name: 'TypeScript', level: 80 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: 'emerald',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Python', level: 78 },
      { name: 'Java', level: 70 },
      { name: 'PHP', level: 68 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    color: 'blue',
    skills: [
      { name: 'SQL / PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'Firebase', level: 72 },
      { name: 'Supabase', level: 78 },
    ],
  },
  {
    id: 'devops',
    label: 'Cloud & DevOps',
    color: 'teal',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'CI/CD Pipelines', level: 68 },
      { name: 'Linux / CLI', level: 75 },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Data',
    color: 'cyan',
    skills: [
      { name: 'Prompt Engineering', level: 90 },
      { name: 'Generative AI', level: 85 },
      { name: 'ML Fundamentals', level: 70 },
      { name: 'Data Analysis', level: 68 },
    ],
  },
  {
    id: 'soft',
    label: 'Collaboration',
    color: 'emerald',
    skills: [
      { name: 'Agile / Scrum', level: 92 },
      { name: 'Technical Mentorship', level: 95 },
      { name: 'Curriculum Design', level: 90 },
      { name: 'Public Speaking', level: 88 },
      { name: 'Facilitation', level: 92 },
    ],
  },
];

const colorMap: Record<string, string> = {
  cyan: 'from-cyan-400 to-blue-500',
  emerald: 'from-emerald-400 to-cyan-500',
  blue: 'from-blue-400 to-cyan-400',
  teal: 'from-teal-400 to-emerald-500',
};

function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimate(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{name}</span>
        <span className="text-xs font-semibold text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${colorMap[color]}`}
          initial={{ width: 0 }}
          animate={{ width: animate ? `${level}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('frontend');

  const current = categories.find(c => c.id === active)!;

  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Technical Expertise</p>
          <h2 className="section-title text-white mb-4">
            Skills <span className="gradient-text">Matrix</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A comprehensive overview of my technical proficiency across the full stack
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === cat.id
                  ? 'bg-cyan-400 text-gray-950'
                  : 'glass text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {current.skills.map(skill => (
            <div key={skill.name} className="glass-card p-5">
              <SkillBar {...skill} color={current.color} />
            </div>
          ))}
        </motion.div>

        {/* All skills cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-6">All technologies I work with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java', 'PHP',
              'SQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'Supabase', 'Docker', 'Git', 'GitHub',
              'Tailwind CSS', 'REST APIs', 'Prompt Engineering', 'Generative AI', 'Agile', 'Scrum',
              'Linux', 'VS Code', 'Figma', 'Jira', 'Postman'].map(t => (
              <span key={t} className="tag tag-primary text-xs">{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
