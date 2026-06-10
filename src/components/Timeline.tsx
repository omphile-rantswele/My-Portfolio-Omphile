import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code2, Users, Mic2, Cpu, BookOpen, Layers } from 'lucide-react';

const milestones = [
  {
    year: '2021',
    role: 'Software Developer',
    company: 'Various Projects & Clients',
    icon: Code2,
    color: 'cyan',
    summary: 'Started full-stack development journey — building web applications with HTML, CSS, JavaScript, React, and Node.js.',
    details: [
      'Built and deployed 10+ web applications for clients and personal projects',
      'Mastered React ecosystem: hooks, context, routing, and state management',
      'Developed RESTful APIs using Node.js and Express with MongoDB databases',
      'Contributed to open-source projects on GitHub',
    ],
  },
  {
    year: '2022',
    role: 'Technical Mentor',
    company: 'CAPACITI / OfferZen Foundation',
    icon: Users,
    color: 'emerald',
    summary: 'Transitioned into technical mentorship — guiding learners through software development concepts and real-world project delivery.',
    details: [
      'Mentored 150+ learners across frontend and backend development streams',
      'Conducted weekly code reviews and project feedback sessions',
      'Developed assessment rubrics and project evaluation frameworks',
      'Facilitated Agile Scrum ceremonies for learner project teams',
    ],
  },
  {
    year: '2022',
    role: 'Bootcamp Facilitator',
    company: 'CAPACITI Tech Accelerator',
    icon: BookOpen,
    color: 'blue',
    summary: 'Took on full bootcamp delivery responsibilities — facilitating intensive software development programs end-to-end.',
    details: [
      'Delivered 5+ bootcamp cohorts covering full-stack development fundamentals',
      'Designed and curated curriculum content for JavaScript, React, and Python streams',
      'Facilitated career readiness sessions including CV workshops and interview prep',
      'Maintained 85%+ learner retention and completion rates',
    ],
  },
  {
    year: '2023',
    role: 'Tech Champion',
    company: 'CAPACITI Tech Accelerator',
    icon: Layers,
    color: 'teal',
    summary: 'Elevated to Tech Champion — supporting multiple technology streams and driving quality across all programmes.',
    details: [
      'Supported 5+ technology streams: Data Engineering, Cybersecurity, Cloud, Software Dev, UX',
      'Reviewed 100+ learner projects with detailed technical feedback',
      'Created technical documentation and learning guides for all streams',
      'Represented learners in programme steering committees',
    ],
  },
  {
    year: '2023',
    role: 'AI Facilitator',
    company: 'CAPACITI / Industry Partners',
    icon: Cpu,
    color: 'cyan',
    summary: 'Became a dedicated AI Facilitator — delivering workshops on Generative AI, Prompt Engineering, and responsible AI use.',
    details: [
      'Delivered 20+ AI and Prompt Engineering workshops to learners and professionals',
      'Designed AI literacy curriculum for non-technical audiences',
      'Facilitated hands-on sessions with ChatGPT, Gemini, GitHub Copilot, and more',
      'Created AI ethics and responsible use frameworks for bootcamp programmes',
    ],
  },
  {
    year: '2024',
    role: 'Learning Experience Leader',
    company: 'CAPACITI Tech Accelerator',
    icon: Mic2,
    color: 'emerald',
    summary: 'Leading learning experience design and delivery — shaping how thousands of learners across South Africa engage with technology.',
    details: [
      'Led design of end-to-end learning journeys for multiple cohorts',
      'Mentored a team of junior facilitators and technical coaches',
      'Delivered keynote talks at industry events on AI in education and digital skills',
      'Established partnerships with industry partners for learner placement programmes',
    ],
  },
];

const colorMap: Record<string, { dot: string; ring: string; text: string; bg: string }> = {
  cyan:    { dot: 'bg-cyan-400',    ring: 'ring-cyan-400/30',    text: 'text-cyan-400',    bg: 'bg-cyan-400/10' },
  emerald: { dot: 'bg-emerald-400', ring: 'ring-emerald-400/30', text: 'text-emerald-400', bg: 'bg-emerald-400/10' },
  blue:    { dot: 'bg-blue-400',    ring: 'ring-blue-400/30',    text: 'text-blue-400',    bg: 'bg-blue-400/10' },
  teal:    { dot: 'bg-teal-400',    ring: 'ring-teal-400/30',    text: 'text-teal-400',    bg: 'bg-teal-400/10' },
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Career Journey</p>
          <h2 className="section-title text-white mb-4">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A progressive journey from developer to technology leader
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-emerald-500/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-8">
            {milestones.map((m, i) => {
              const c = colorMap[m.color];
              const Icon = m.icon;
              const isOpen = expanded === i;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 md:-translate-x-1/2 z-10">
                    <div className={`w-4 h-4 rounded-full ${c.dot} ring-4 ${c.ring}`} />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="w-full text-left glass-card p-5 group"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                            <Icon className={`w-4 h-4 ${c.text}`} strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className={`text-xs font-bold ${c.text} mb-0.5 mono`}>{m.year}</div>
                            <h3 className="text-white font-bold text-base leading-tight">{m.role}</h3>
                            <p className="text-slate-500 text-xs mt-0.5">{m.company}</p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-500 flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </div>
                      <p className="text-slate-400 text-sm mt-3 leading-relaxed">{m.summary}</p>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-white/5 mt-4 space-y-2">
                              {m.details.map((d, j) => (
                                <li key={j} className="flex items-start gap-2 text-slate-400 text-sm">
                                  <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0 mt-1.5`} />
                                  {d}
                                </li>
                              ))}
                            </div>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
