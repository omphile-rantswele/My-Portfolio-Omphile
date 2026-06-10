import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';

const projects = [
  {
    title: 'TalentBridge – Learner Management Platform',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem: 'Bootcamp facilitators had no centralized system to track learner progress, project submissions, and attendance.',
    solution: 'Built a full-stack LMS with real-time dashboards for facilitators and personalized portals for learners.',
    impact: '500+ learners managed, 60% reduction in admin overhead, 90%+ on-time submission rates.',
    github: 'https://github.com/OmphileRantswele',
    demo: '#',
  },
  {
    title: 'AI Career Coach',
    category: 'AI',
    tags: ['React', 'OpenAI API', 'Tailwind', 'Supabase'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem: "Job seekers in South Africa lack personalized, affordable career coaching for tech roles.",
    solution: 'An AI-powered career coach that reviews CVs, simulates interviews, and provides tailored career roadmaps.',
    impact: '200+ job seekers assisted, 70% interview success rate improvement for users.',
    github: 'https://github.com/OmphileRantswele',
    demo: '#',
  },
  {
    title: 'PromptCraft Studio',
    category: 'AI',
    tags: ['React', 'TypeScript', 'OpenAI', 'Supabase'],
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem: 'Learners struggle to write effective prompts for AI tools, limiting their productivity.',
    solution: 'Interactive prompt engineering playground with templates, examples, and real-time AI feedback.',
    impact: 'Used in 15+ AI workshops, 300+ prompts crafted and shared by the community.',
    github: 'https://github.com/OmphileRantswele',
    demo: '#',
  },
  {
    title: 'DevLearn Community Portal',
    category: 'Full Stack',
    tags: ['React', 'Firebase', 'Node.js', 'Tailwind'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem: 'Tech learners in townships lacked a safe, free, community-driven space to share resources and get help.',
    solution: 'Open-source community platform with forums, resource sharing, mentorship matching, and job boards.',
    impact: '1,000+ members, 500+ resources shared, 50+ successful mentorship matches.',
    github: 'https://github.com/OmphileRantswele',
    demo: '#',
  },
  {
    title: 'Scrum Sprint Tracker',
    category: 'Full Stack',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem: 'Bootcamp teams needed a lightweight Agile tool designed for learner-paced sprints.',
    solution: 'Real-time Kanban board with sprint planning, burndown charts, and daily standup features.',
    impact: 'Used by 10+ bootcamp cohorts, 85% improvement in sprint completion rates.',
    github: 'https://github.com/OmphileRantswele',
    demo: '#',
  },
  {
    title: 'Digital Skills Assessment Engine',
    category: 'Backend',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'React'],
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
    problem: 'Manual assessments were inconsistent and time-consuming for large cohorts.',
    solution: 'Automated assessment engine with adaptive questioning, instant feedback, and detailed analytics.',
    impact: '2,000+ assessments processed, 80% reduction in grading time.',
    github: 'https://github.com/OmphileRantswele',
    demo: '#',
  },
];

const filters = ['All', 'Full Stack', 'AI', 'Backend'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Portfolio</p>
          <h2 className="section-title text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real-world solutions built with modern technology to create meaningful impact
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                active === f ? 'bg-cyan-400 text-gray-950' : 'glass text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {f === 'All' && <Filter className="w-3.5 h-3.5" />}
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card overflow-hidden group cursor-pointer"
                onClick={() => setSelected(p)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                  <span className="absolute top-3 right-3 tag tag-primary text-xs">{p.category}</span>
                </div>

                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{p.problem}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map(t => (
                      <span key={t} className="tag tag-accent text-xs">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-slate-400 hover:text-white text-xs font-medium transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" /> Code
                    </a>
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 text-xs font-medium transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/90 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto"
            >
              <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover rounded-t-2xl" />
              <div className="p-6">
                <h3 className="text-white text-xl font-bold mb-2">{selected.title}</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Problem Statement', value: selected.problem },
                    { label: 'Solution', value: selected.solution },
                    { label: 'Impact Achieved', value: selected.impact },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">{label}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{value}</p>
                    </div>
                  ))}
                  <div>
                    <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.tags.map(t => <span key={t} className="tag tag-primary text-xs">{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-6">
                  <a href={selected.github} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2 text-sm flex-1 justify-center">
                    <Github className="w-4 h-4" /> View Code
                  </a>
                  <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2 text-sm flex-1 justify-center">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
