import { motion } from 'framer-motion';
import { Users, MessageSquare, ClipboardCheck, RefreshCw, BookOpen, Briefcase, FileText, Linkedin, Monitor } from 'lucide-react';

const services = [
  { icon: Users, title: 'Technical Mentorship', desc: 'One-on-one and group mentorship sessions covering software development fundamentals, career guidance, and project-based learning.', color: 'cyan' },
  { icon: MessageSquare, title: 'One-on-One Coaching', desc: 'Personalized coaching sessions tailored to each learner\'s unique challenges, goals, and learning pace.', color: 'emerald' },
  { icon: ClipboardCheck, title: 'Project Reviews', desc: 'Detailed code reviews with actionable feedback on architecture, code quality, best practices, and performance.', color: 'blue' },
  { icon: RefreshCw, title: 'Scrum Facilitation', desc: 'Expert facilitation of Agile Scrum ceremonies: standups, sprint planning, retrospectives, and sprint reviews.', color: 'teal' },
  { icon: BookOpen, title: 'Bootcamp Delivery', desc: 'End-to-end delivery of intensive coding bootcamps covering full-stack development, AI, and career readiness.', color: 'cyan' },
  { icon: Briefcase, title: 'Career Readiness', desc: 'Comprehensive career readiness training including job search strategies, salary negotiation, and workplace readiness.', color: 'emerald' },
  { icon: Monitor, title: 'Interview Preparation', desc: 'Mock technical interviews, whiteboard challenges, and behavioral interview coaching for tech roles.', color: 'blue' },
  { icon: FileText, title: 'CV Reviews', desc: 'Professional CV review and rewriting service tailored for South African and international tech roles.', color: 'teal' },
  { icon: Linkedin, title: 'LinkedIn Optimization', desc: 'Complete LinkedIn profile optimization to attract recruiters and build a strong professional tech brand.', color: 'cyan' },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  cyan:    { bg: 'bg-cyan-400/10',    text: 'text-cyan-400',    border: 'border-cyan-400/20' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  blue:    { bg: 'bg-blue-400/10',    text: 'text-blue-400',    border: 'border-blue-400/20' },
  teal:    { bg: 'bg-teal-400/10',    text: 'text-teal-400',    border: 'border-teal-400/20' },
};

export default function Mentorship() {
  return (
    <section id="mentorship" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-accent mb-4 mx-auto w-fit">Developing Talent Through Technology</p>
          <h2 className="section-title text-white mb-4">
            Mentorship &<br />
            <span className="gradient-text">Career Development</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Comprehensive support services to help tech learners land their first role and thrive in their careers
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, desc, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className={`glass-card p-6 border ${c.border} hover:border-opacity-50`}
              >
                <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${c.text}`} strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass-card p-8 text-center border border-cyan-400/15"
        >
          <h3 className="text-white text-xl font-bold mb-3">Ready to accelerate your tech career?</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
            Whether you're just starting out or looking to level up, I'm here to guide your journey into tech.
          </p>
          <a
            href="https://calendly.com/omphilerantswele"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Book a Free Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
