import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, BookOpen, Video, GraduationCap, Code2, Brain, Rocket, Users, Shield, Cloud, Database, Wrench } from 'lucide-react';

const categories = [
  {
    id: 'webdev',
    label: 'Web Development',
    icon: Code2,
    color: 'cyan',
    resources: [
      { title: 'freeCodeCamp', desc: 'Free full-stack curriculum with certifications', url: 'https://www.freecodecamp.org/', type: 'Course', free: true },
      { title: 'The Odin Project', desc: 'Open-source full-stack curriculum with project-based learning', url: 'https://www.theodinproject.com/', type: 'Course', free: true },
      { title: 'JavaScript.info', desc: 'Modern JavaScript tutorial from basics to advanced topics', url: 'https://javascript.info/', type: 'Docs', free: true },
      { title: 'React Official Tutorial', desc: 'Learn React step-by-step with interactive examples', url: 'https://react.dev/learn', type: 'Tutorial', free: true },
      { title: 'Tailwind CSS Docs', desc: 'Utility-first CSS framework documentation and playground', url: 'https://tailwindcss.com/docs', type: 'Docs', free: true },
      { title: 'Full Stack Open', desc: 'University of Helsinki deep dive into modern web development', url: 'https://fullstackopen.com/en/', type: 'Course', free: true },
    ],
  },
  {
    id: 'ai',
    label: 'AI & Machine Learning',
    icon: Brain,
    color: 'emerald',
    resources: [
      { title: 'Google AI Essentials', desc: 'Google\'s free course on AI fundamentals for everyone', url: 'https://grow.google/ai/', type: 'Course', free: true },
      { title: 'DeepLearning.AI', desc: 'Andrew Ng\'s short courses on AI, ML, and deep learning', url: 'https://www.deeplearning.ai/short-courses/', type: 'Course', free: true },
      { title: 'Prompt Engineering Guide', desc: 'Comprehensive guide to prompt engineering techniques', url: 'https://www.promptingguide.ai/', type: 'Guide', free: true },
      { title: 'Hugging Face Course', desc: 'Free NLP and transformers course with hands-on notebooks', url: 'https://huggingface.co/learn/nlp-course', type: 'Course', free: true },
      { title: 'Google Machine Learning Crash Course', desc: 'Fast-paced intro to ML with TensorFlow', url: 'https://developers.google.com/machine-learning/crash-course', type: 'Course', free: true },
      { title: 'ChatGPT Prompt Engineering for Developers', desc: 'OpenAI x DeepLearning.AI course on API usage', url: 'https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/', type: 'Course', free: true },
    ],
  },
  {
    id: 'career',
    label: 'Career Readiness',
    icon: Rocket,
    color: 'blue',
    resources: [
      { title: 'OfferZen Profile Guide', desc: 'South Africa\'s developer job platform with salary data', url: 'https://www.offerzen.com/', type: 'Platform', free: true },
      { title: 'LinkedIn Learning', desc: 'Professional development courses and certifications', url: 'https://www.linkedin.com/learning/', type: 'Course', free: false },
      { title: 'Pramp', desc: 'Free peer-to-peer mock technical interviews', url: 'https://www.pramp.com/', type: 'Tool', free: true },
      { title: 'Tech Interview Handbook', desc: 'Comprehensive guide to software engineering interviews', url: 'https://www.techinterviewhandbook.org/', type: 'Guide', free: true },
      { title: 'Resume.io', desc: 'Professional CV builder with tech-optimized templates', url: 'https://resume.io/', type: 'Tool', free: false },
      { title: 'Glassdoor SA', desc: 'South African tech salary data and company reviews', url: 'https://www.glassdoor.co.za/', type: 'Platform', free: true },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: Cloud,
    color: 'teal',
    resources: [
      { title: 'AWS Free Tier', desc: '12-month free tier for hands-on AWS cloud practice', url: 'https://aws.amazon.com/free/', type: 'Platform', free: true },
      { title: 'Google Cloud Skills Boost', desc: 'Free hands-on labs and quest-based learning paths', url: 'https://www.cloudskillsboost.google/', type: 'Course', free: true },
      { title: 'Docker Getting Started', desc: 'Official interactive tutorial for containerization', url: 'https://docs.docker.com/get-started/', type: 'Tutorial', free: true },
      { title: 'Kubernetes Basics', desc: 'Interactive tutorials to learn K8s fundamentals', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', type: 'Tutorial', free: true },
      { title: 'GitHub Actions Docs', desc: 'CI/CD automation directly from your repositories', url: 'https://docs.github.com/en/actions', type: 'Docs', free: true },
      { title: 'Microsoft Learn Azure', desc: 'Free sandbox Azure learning paths with certifications', url: 'https://learn.microsoft.com/en-us/azure/', type: 'Course', free: true },
    ],
  },
  {
    id: 'data',
    label: 'Data & Databases',
    icon: Database,
    color: 'cyan',
    resources: [
      { title: 'SQLBolt', desc: 'Interactive SQL lessons you can run in your browser', url: 'https://sqlbolt.com/', type: 'Tutorial', free: true },
      { title: 'MongoDB University', desc: 'Free MongoDB courses with certifications', url: 'https://university.mongodb.com/', type: 'Course', free: true },
      { title: 'Kaggle Learn', desc: 'Free micro-courses on data science and ML', url: 'https://www.kaggle.com/learn', type: 'Course', free: true },
      { title: 'Supabase Docs', desc: 'Open-source Firebase alternative with PostgreSQL', url: 'https://supabase.com/docs', type: 'Docs', free: true },
      { title: 'SQLZoo', desc: 'Interactive SQL tutorials with exercises', url: 'https://sqlzoo.net/', type: 'Tutorial', free: true },
      { title: 'DataCamp Free Courses', desc: 'Introductory data science and analytics courses', url: 'https://www.datacamp.com/free-courses', type: 'Course', free: true },
    ],
  },
  {
    id: 'cyber',
    label: 'Cybersecurity',
    icon: Shield,
    color: 'emerald',
    resources: [
      { title: 'TryHackMe', desc: 'Gamified cybersecurity training with virtual labs', url: 'https://tryhackme.com/', type: 'Platform', free: true },
      { title: 'OWASP Top 10', desc: 'Essential web application security risks guide', url: 'https://owasp.org/www-project-top-ten/', type: 'Guide', free: true },
      { title: 'CyberAces', desc: 'Free cybersecurity tutorials and challenges', url: 'https://www.cyberaces.org/', type: 'Course', free: true },
      { title: 'OverTheWire', desc: 'Wargames to learn and practice security concepts', url: 'https://overthewire.org/wargames/', type: 'Tutorial', free: true },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  cyan:    { bg: 'bg-cyan-400/10', text: 'text-cyan-400', border: 'border-cyan-400/20' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400', border: 'border-emerald-400/20' },
  blue:    { bg: 'bg-blue-400/10', text: 'text-blue-400', border: 'border-blue-400/20' },
  teal:    { bg: 'bg-teal-400/10', text: 'text-teal-400', border: 'border-teal-400/20' },
};

const typeIcons: Record<string, typeof BookOpen> = {
  Course: GraduationCap,
  Tutorial: Video,
  Docs: BookOpen,
  Guide: BookOpen,
  Platform: Users,
  Tool: Wrench,
};

export default function LearningHub() {
  const [active, setActive] = useState('webdev');
  const current = categories.find(c => c.id === active)!;
  const c = colorMap[current.color];

  return (
    <section id="resources" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-accent mb-4 mx-auto w-fit">Upskill Yourself</p>
          <h2 className="section-title text-white mb-4">
            Learning <span className="gradient-text">Resources</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Curated free resources I recommend to every aspiring developer, AI practitioner, and tech professional in Africa
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(cat => {
            const catColor = colorMap[cat.color];
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  active === cat.id
                    ? `${catColor.bg} ${catColor.text} border ${catColor.border}`
                    : 'glass text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                <cat.icon className="w-4 h-4" strokeWidth={1.5} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Resource cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {current.resources.map((res, i) => {
            const TypeIcon = typeIcons[res.type] || BookOpen;
            return (
              <motion.a
                key={res.title}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className={`glass-card p-5 group hover:border-${current.color}-400/30 block`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <TypeIcon className={`w-4 h-4 ${c.text}`} strokeWidth={1.5} />
                  </div>
                  <div className="flex items-center gap-2">
                    {res.free && (
                      <span className="tag tag-accent text-xs">Free</span>
                    )}
                    <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-cyan-300 transition-colors">{res.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{res.desc}</p>

                <div className="flex items-center gap-2">
                  <span className={`tag text-xs ${c.bg} ${c.text} border ${c.border}`}>{res.type}</span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-6 text-center border border-emerald-400/15"
        >
          <GraduationCap className="w-8 h-8 text-emerald-400 mx-auto mb-3" strokeWidth={1.5} />
          <h3 className="text-white font-bold text-lg mb-2">Want personalized learning recommendations?</h3>
          <p className="text-slate-400 text-sm mb-5 max-w-lg mx-auto">
            Book a free mentorship session and I'll create a custom learning roadmap based on your goals, experience level, and timeline.
          </p>
          <a
            href="https://calendly.com/omphilerantswele"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Your Learning Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
