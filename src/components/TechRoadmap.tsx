import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, Circle, Clock, Code2, Brain, Database, Cloud, Rocket } from 'lucide-react';

const roadmaps = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    icon: Code2,
    color: 'cyan',
    duration: '6–9 months',
    steps: [
      { phase: 'Foundation', duration: '2 months', skills: ['HTML5 semantics', 'CSS3 Flexbox & Grid', 'JavaScript ES6+', 'Git & GitHub'], resources: ['freeCodeCamp Responsive Web Design', 'JavaScript.info', 'The Odin Project Foundations'] },
      { phase: 'Framework', duration: '2 months', skills: ['React fundamentals', 'Hooks & State management', 'Component architecture', 'React Router'], resources: ['React.dev official tutorial', 'Full Stack Open (Helsinki)', 'Scrimba React course'] },
      { phase: 'Styling & Tooling', duration: '1 month', skills: ['Tailwind CSS', 'TypeScript basics', 'VS Code setup', 'ESLint & Prettier'], resources: ['Tailwind CSS docs', 'TypeScript Handbook', 'VS Code Can Do That'] },
      { phase: 'Advanced', duration: '2 months', skills: ['Next.js basics', 'API integration', 'Testing (Jest/RTL)', 'Performance optimization'], resources: ['Next.js docs', 'Testing Library docs', 'Web.dev Performance'] },
      { phase: 'Portfolio & Career', duration: '2 months', skills: ['3+ portfolio projects', 'CV & LinkedIn', 'Interview prep', 'Open source contributions'], resources: ['Tech Interview Handbook', 'Pramp mock interviews', 'First Contributions'] },
    ],
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    icon: Database,
    color: 'emerald',
    duration: '9–12 months',
    steps: [
      { phase: 'Frontend Core', duration: '3 months', skills: ['HTML/CSS/JS', 'React', 'Tailwind CSS', 'Responsive design'], resources: ['freeCodeCamp', 'React.dev', 'The Odin Project'] },
      { phase: 'Backend Fundamentals', duration: '3 months', skills: ['Node.js & Express', 'REST API design', 'Authentication (JWT)', 'Python basics'], resources: ['Full Stack Open', 'Node.js docs', 'FastAPI tutorial'] },
      { phase: 'Databases', duration: '2 months', skills: ['PostgreSQL', 'MongoDB', 'SQL queries & joins', 'ORM (Prisma/Sequelize)'], resources: ['SQLBolt', 'MongoDB University', 'Supabase docs'] },
      { phase: 'DevOps & Deploy', duration: '2 months', skills: ['Docker basics', 'CI/CD with GitHub Actions', 'Cloud deployment', 'Environment management'], resources: ['Docker getting started', 'GitHub Actions docs', 'Vercel/Netlify'] },
      { phase: 'Capstone & Career', duration: '2 months', skills: ['Full-stack capstone project', 'System design basics', 'Interview prep', 'Portfolio polish'], resources: ['Tech Interview Handbook', 'System Design Primer', 'Pramp'] },
    ],
  },
  {
    id: 'ai',
    title: 'AI Practitioner',
    icon: Brain,
    color: 'blue',
    duration: '4–6 months',
    steps: [
      { phase: 'AI Literacy', duration: '1 month', skills: ['What is AI/ML', 'Types of AI', 'Responsible AI', 'AI tools landscape'], resources: ['Google AI Essentials', 'Elements of AI', 'AI for Everyone (Coursera)'] },
      { phase: 'Prompt Engineering', duration: '1 month', skills: ['Zero/few-shot prompting', 'Chain-of-thought', 'System prompts', 'Prompt testing'], resources: ['Prompt Engineering Guide', 'DeepLearning.AI prompt course', 'OpenAI cookbook'] },
      { phase: 'Applied AI', duration: '2 months', skills: ['OpenAI/Gemini APIs', 'Building AI apps', 'RAG fundamentals', 'AI-assisted development'], resources: ['OpenAI API docs', 'LangChain docs', 'Hugging Face course'] },
      { phase: 'ML Foundations', duration: '1 month', skills: ['Supervised learning basics', 'Data preprocessing', 'Model evaluation', 'Python for ML'], resources: ['Google ML Crash Course', 'Kaggle Learn', 'Fast.ai'] },
      { phase: 'Portfolio', duration: '1 month', skills: ['3 AI-powered projects', 'AI ethics case study', 'Technical writing', 'Community contributions'], resources: ['Build in public', 'AI ethics guidelines', 'Write for dev.to'] },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud Engineer',
    icon: Cloud,
    color: 'teal',
    duration: '6–8 months',
    steps: [
      { phase: 'Cloud Basics', duration: '2 months', skills: ['Cloud concepts', 'AWS/Azure fundamentals', 'Linux CLI', 'Networking basics'], resources: ['AWS Cloud Practitioner', 'Microsoft Learn Azure', 'Linux Journey'] },
      { phase: 'Containers & IaC', duration: '2 months', skills: ['Docker', 'Kubernetes basics', 'Terraform intro', 'Container orchestration'], resources: ['Docker docs', 'K8s basics tutorial', 'Terraform getting started'] },
      { phase: 'CI/CD & Monitoring', duration: '2 months', skills: ['GitHub Actions', 'Cloud deployments', 'Monitoring & logging', 'Security basics'], resources: ['GitHub Actions docs', 'Cloud Skills Boost', 'OWASP Top 10'] },
      { phase: 'Certification', duration: '2 months', skills: ['AWS Solutions Architect prep', 'Hands-on labs', 'Practice exams', 'Study groups'], resources: ['A Cloud Guru', 'AWS Free Tier labs', 'Stephane Maarek Udemy'] },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  cyan:    { bg: 'bg-cyan-400/10', text: 'text-cyan-400', border: 'border-cyan-400/20', gradient: 'from-cyan-400 to-blue-500' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20', gradient: 'from-emerald-400 to-cyan-500' },
  blue:    { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20', gradient: 'from-blue-400 to-cyan-400' },
  teal:    { bg: 'bg-teal-400/10', text: 'text-teal-400', border: 'border-teal-400/20', gradient: 'from-teal-400 to-emerald-500' },
};

export default function TechRoadmap() {
  const [active, setActive] = useState('frontend');
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  const current = roadmaps.find(r => r.id === active)!;
  const c = colorMap[current.color];

  return (
    <section id="roadmap" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-accent mb-4 mx-auto w-fit">Plan Your Journey</p>
          <h2 className="section-title text-white mb-4">
            Tech <span className="gradient-text">Roadmaps</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Step-by-step learning paths I've designed based on mentoring 500+ developers — pick your track and start today
          </p>
        </motion.div>

        {/* Roadmap selector */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {roadmaps.map(r => {
            const rc = colorMap[r.color];
            return (
              <button
                key={r.id}
                onClick={() => { setActive(r.id); setExpandedStep(0); }}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === r.id
                    ? `${rc.bg} ${rc.text} border ${rc.border}`
                    : 'glass text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                <r.icon className="w-4 h-4" strokeWidth={1.5} />
                {r.title}
                <span className="text-xs opacity-60 ml-1">{r.duration}</span>
              </button>
            );
          })}
        </div>

        {/* Timeline */}
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          {/* Line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-emerald-500/20 to-transparent" />

          <div className="space-y-4">
            {current.steps.map((step, i) => {
              const isOpen = expandedStep === i;
              return (
                <motion.div
                  key={step.phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="relative ml-16"
                >
                  {/* Dot */}
                  <div className="absolute -left-16 top-4 w-4 h-4 rounded-full bg-gradient-to-br border-2 border-gray-950" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                    <div className={`w-full h-full rounded-full ${i < (expandedStep ?? 0) + 1 ? c.bg : 'bg-slate-800'} flex items-center justify-center`}>
                      {i < (expandedStep ?? 0) ? (
                        <CheckCircle className={`w-4 h-4 ${c.text}`} />
                      ) : (
                        <Circle className="w-2 h-2 text-slate-600" />
                      )}
                    </div>
                  </div>

                  <button
                    onClick={() => setExpandedStep(isOpen ? null : i)}
                    className="w-full text-left"
                  >
                    <div className={`glass-card p-5 ${isOpen ? `border ${c.border}` : ''}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className={`mono text-xs font-bold ${c.text}`}>Phase {i + 1}</span>
                          <h4 className="text-white font-semibold text-sm">{step.phase}</h4>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-xs">
                          <Clock className="w-3 h-3" /> {step.duration}
                        </div>
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-2 glass-card p-5 space-y-4">
                          <div>
                            <h5 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Skills to Learn</h5>
                            <div className="flex flex-wrap gap-2">
                              {step.skills.map(s => (
                                <span key={s} className={`tag text-xs ${c.bg} ${c.text} border ${c.border}`}>{s}</span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="text-slate-400 text-xs uppercase tracking-wider font-semibold mb-2">Recommended Resources</h5>
                            <div className="space-y-1.5">
                              {step.resources.map(r => (
                                <div key={r} className="flex items-center gap-2 text-sm text-slate-400">
                                  <ChevronRight className={`w-3 h-3 ${c.text} flex-shrink-0`} />
                                  {r}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6 text-center border border-cyan-400/15"
        >
          <Rocket className="w-8 h-8 text-cyan-400 mx-auto mb-3" strokeWidth={1.5} />
          <h3 className="text-white font-bold text-lg mb-2">Need a personalized roadmap?</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-md mx-auto">
            These roadmaps are general guides. Book a free session and I'll create a custom plan based on your background, timeline, and goals.
          </p>
          <a
            href="https://calendly.com/omphilerantswele"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Your Custom Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
