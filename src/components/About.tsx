import { motion } from 'framer-motion';
import { Heart, Target, Lightbulb, Users } from 'lucide-react';

const highlights = [
  { icon: Target, title: 'Mission-Driven', desc: 'Committed to bridging the digital skills gap across Africa through quality education and mentorship.' },
  { icon: Lightbulb, title: 'Innovation-First', desc: 'Integrating cutting-edge AI tools and modern pedagogies into every learning experience I design.' },
  { icon: Users, title: 'People-Centered', desc: 'Every curriculum, workshop, and mentorship session is built around the human behind the screen.' },
  { icon: Heart, title: 'Passionate Educator', desc: "There's no greater reward than watching a learner land their first tech role after your mentorship." },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-emerald-400/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

              {/* Profile image placeholder */}
              <div className="absolute inset-8 rounded-full overflow-hidden glass border-2 border-cyan-400/30">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Omphile Rantswele - Software Developer & Technical Mentor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl border border-cyan-400/20 text-xs font-semibold text-cyan-300"
              >
                500+ Learners
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl border border-emerald-400/20 text-xs font-semibold text-emerald-300"
              >
                AI Facilitator
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="tag tag-primary mb-4">About Me</p>
            <h2 className="section-title text-white mb-6">
              Bridging <span className="gradient-text">Technology</span>
              <br />& Human Potential
            </h2>

            <div className="space-y-4 text-slate-400 leading-relaxed mb-8">
              <p>
                I'm a passionate Software Developer and Technical Mentor based in South Africa, dedicated to
                transforming how technology is taught, learned, and applied. My journey spans frontend and
                backend development, AI facilitation, curriculum design, and immersive bootcamp delivery.
              </p>
              <p>
                At the intersection of software engineering and education, I design learning experiences that
                are not just informative — they're transformative. I've guided 500+ learners through complex
                technical concepts, facilitated 10+ bootcamp cohorts, and reviewed over 100 real-world projects
                across multiple technology streams.
              </p>
              <p>
                As an AI Facilitator and Tech Champion, I stay at the cutting edge of Generative AI, Prompt
                Engineering, and Machine Learning — bringing these tools into the classroom to prepare learners
                for tomorrow's workforce.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {['React', 'Node.js', 'Python', 'AI/ML', 'Curriculum Design', 'Agile/Scrum', 'Public Speaking'].map(t => (
                <span key={t} className="tag tag-primary">{t}</span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card p-4">
                  <Icon className="w-5 h-5 text-cyan-400 mb-2" strokeWidth={1.5} />
                  <h4 className="text-white font-semibold text-sm mb-1">{title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
