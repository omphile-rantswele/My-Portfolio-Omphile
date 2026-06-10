import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, CheckCircle, Sparkles, BookOpen, Brain, Rocket } from 'lucide-react';

const benefits = [
  { icon: Brain, text: 'Weekly AI & Prompt Engineering tips' },
  { icon: BookOpen, text: 'Curated free learning resources' },
  { icon: Rocket, text: 'Career acceleration strategies' },
  { icon: Sparkles, text: 'Exclusive mentorship opportunities' },
];

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 sm:p-12 text-center relative overflow-hidden border border-cyan-400/15"
        >
          {/* Decorative dots */}
          <div className="absolute top-0 left-0 w-32 h-32 grid-dot-bg opacity-30" />
          <div className="absolute bottom-0 right-0 w-32 h-32 grid-dot-bg opacity-30" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-7 h-7 text-gray-900" />
            </div>

            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
              Level Up Your <span className="gradient-text">Tech Career</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8">
              Join 500+ subscribers getting weekly insights on software development, AI, career growth, and free learning resources.
            </p>

            {!submitted ? (
              <>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                  <div className="flex flex-col sm:flex-row gap-3 mb-3">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="flex-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-all"
                    />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50 transition-all"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3 text-base flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4" /> Subscribe — It's Free
                  </button>
                </form>

                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
                  {benefits.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2 text-left">
                      <Icon className="w-4 h-4 text-cyan-400 flex-shrink-0" strokeWidth={1.5} />
                      <span className="text-slate-500 text-xs">{text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-700 text-xs mt-4">No spam. Unsubscribe anytime.</p>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-4"
              >
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-white text-lg font-bold mb-2">You're in!</h3>
                <p className="text-slate-400 text-sm max-w-md mx-auto">
                  Welcome aboard, {name || 'friend'}! Check your inbox for a confirmation email with your first set of resources.
                </p>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
