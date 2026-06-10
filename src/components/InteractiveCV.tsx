import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, Briefcase, GraduationCap, Award, Code2, MapPin, Mail,
  ChevronDown, Download, ExternalLink, Heart, Star, Printer
} from 'lucide-react';

const tabs = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'certs', label: 'Certifications', icon: Award },
];

const experienceData = [
  {
    role: 'Learning Experience Leader',
    company: 'CAPACITI Tech Accelerator',
    period: '2024 – Present',
    highlights: [
      'Leading end-to-end learning experience design for multiple cohorts',
      'Mentoring a team of junior facilitators and technical coaches',
      'Delivering keynote talks at industry events on AI in education',
      'Establishing partnerships with industry for learner placement',
    ],
  },
  {
    role: 'AI Facilitator & Tech Champion',
    company: 'CAPACITI Tech Accelerator',
    period: '2023 – 2024',
    highlights: [
      'Delivered 20+ AI and Prompt Engineering workshops',
      'Supported 5+ technology streams (Data Eng, Cloud, Cyber, SWE, UX)',
      'Reviewed 100+ learner projects with detailed feedback',
      'Created AI ethics frameworks for bootcamp programmes',
    ],
  },
  {
    role: 'Bootcamp Facilitator & Technical Mentor',
    company: 'CAPACITI Tech Accelerator',
    period: '2022 – 2023',
    highlights: [
      'Facilitated 10+ bootcamp cohorts in full-stack development',
      'Mentored 500+ learners through project-based learning',
      'Facilitated Agile Scrum ceremonies for learner teams',
      'Achieved 85%+ learner retention and completion rates',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Freelance & Contract',
    period: '2021 – 2022',
    highlights: [
      'Built and deployed 10+ web applications for clients',
      'Developed RESTful APIs with Node.js and MongoDB',
      'Mastered React ecosystem and modern JavaScript',
      'Contributed to open-source projects on GitHub',
    ],
  },
];

const educationData = [
  { degree: 'Advanced Software Development', institution: 'CAPACITI Tech Accelerator', year: '2022' },
  { degree: 'Professional Development Programmes', institution: 'Various (Google, AWS, IBM)', year: '2022–2024' },
  { degree: 'National Senior Certificate', institution: 'South Africa', year: '2018' },
];

const cvCerts = [
  'Google AI Essentials', 'AWS Cloud Practitioner', 'Microsoft Azure Fundamentals',
  'Meta Front-End Developer', 'IBM Data Science Professional', 'Google UX Design Certificate',
  'Professional Scrum Master I', 'GitHub Actions', 'Responsive Web Design (freeCodeCamp)',
  'JavaScript Algorithms & Data Structures', 'Cybersecurity Fundamentals (IBM)', 'Python for Everybody',
];

const cvSkills = {
  'Frontend': ['React', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Tailwind CSS', 'Responsive Design'],
  'Backend': ['Node.js', 'Python', 'Java', 'PHP', 'REST APIs', 'Express'],
  'Database': ['PostgreSQL', 'MongoDB', 'Firebase', 'Supabase', 'SQL'],
  'DevOps & Cloud': ['Git/GitHub', 'Docker', 'CI/CD', 'Linux', 'AWS', 'Azure'],
  'AI & Data': ['Prompt Engineering', 'Generative AI', 'ML Fundamentals', 'Data Analysis'],
  'Soft Skills': ['Agile/Scrum', 'Technical Mentorship', 'Curriculum Design', 'Public Speaking', 'Facilitation'],
};

export default function InteractiveCV() {
  const [activeTab, setActiveTab] = useState('profile');
  const [expandedExp, setExpandedExp] = useState<number | null>(0);

  return (
    <section id="cv" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Interactive Resume</p>
          <h2 className="section-title text-white mb-4">
            My <span className="gradient-text">CV</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Explore my professional background interactively — or download a PDF copy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/5 bg-gradient-to-r from-cyan-400/5 to-emerald-400/5">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/20 flex-shrink-0">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
                  alt="Omphile Rantswele"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-white text-xl font-bold mb-1">Omphile Rantswele</h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  Software Developer | Technical Mentor | AI Facilitator | Learning Experience Professional
                </p>
                <div className="flex flex-wrap gap-3 text-slate-500 text-xs">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Gauteng, South Africa</span>
                  <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> omphile@capaciti.org.za</span>
                  <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> Available for opportunities</span>
                </div>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <a href="/cv-omphile-rantswele.pdf" download className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5" /> PDF
                </a>
                <button onClick={() => window.print()} className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5">
                  <Printer className="w-3.5 h-3.5" /> Print
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex overflow-x-auto border-b border-white/5 px-4">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeTab === id
                    ? 'text-cyan-400 border-cyan-400'
                    : 'text-slate-500 border-transparent hover:text-white hover:border-slate-600'
                }`}
              >
                <Icon className="w-4 h-4" strokeWidth={1.5} />
                {label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === 'profile' && (
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Professional Summary</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      A results-driven Software Developer and Technical Mentor with 3+ years of experience in
                      full-stack development, AI facilitation, curriculum design, and immersive bootcamp delivery.
                      Proven track record of mentoring 500+ learners across multiple technology streams, delivering
                      20+ technical workshops, and achieving 85%+ completion rates. Passionate about bridging the
                      digital skills gap in South Africa through transformative education and hands-on mentorship.
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                      {[
                        { label: 'Learners Mentored', value: '500+' },
                        { label: 'Bootcamp Cohorts', value: '10+' },
                        { label: 'Projects Reviewed', value: '100+' },
                        { label: 'Workshops Delivered', value: '20+' },
                        { label: 'Tech Streams', value: '5+' },
                        { label: 'Years Experience', value: '3+' },
                      ].map(s => (
                        <div key={s.label} className="text-center p-3 rounded-xl bg-slate-900/50">
                          <div className="gradient-text text-lg font-black">{s.value}</div>
                          <div className="text-slate-500 text-xs">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'experience' && (
                  <div className="space-y-4">
                    {experienceData.map((exp, i) => (
                      <div key={i} className="border border-white/5 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                          className="w-full text-left p-4 flex items-center justify-between hover:bg-white/2 transition-colors"
                        >
                          <div>
                            <h4 className="text-white font-semibold text-sm">{exp.role}</h4>
                            <p className="text-cyan-400 text-xs">{exp.company} · {exp.period}</p>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${expandedExp === i ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {expandedExp === i && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="px-4 pb-4 space-y-2">
                                {exp.highlights.map((h, j) => (
                                  <li key={j} className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed">
                                    <Star className="w-3 h-3 text-cyan-400 flex-shrink-0 mt-0.5" />
                                    {h}
                                  </li>
                                ))}
                              </div>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4">
                    {educationData.map((edu, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/30">
                        <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-5 h-5 text-emerald-400" strokeWidth={1.5} />
                        </div>
                        <div>
                          <h4 className="text-white font-semibold text-sm">{edu.degree}</h4>
                          <p className="text-slate-400 text-xs">{edu.institution}</p>
                          <p className="text-slate-600 text-xs mono mt-1">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div className="space-y-5">
                    {Object.entries(cvSkills).map(([category, skills]) => (
                      <div key={category}>
                        <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">{category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {skills.map(s => (
                            <span key={s} className="tag tag-primary text-xs">{s}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'certs' && (
                  <div className="space-y-2">
                    {cvCerts.map((cert) => (
                      <div key={cert} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/30 hover:bg-slate-900/50 transition-colors">
                        <div className="w-8 h-8 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                          <Award className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
                        </div>
                        <span className="text-slate-300 text-sm flex-1">{cert}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-600 hover:text-cyan-400 cursor-pointer transition-colors" />
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
