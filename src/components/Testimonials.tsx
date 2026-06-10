import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Thabo Mokoena',
    role: 'Junior Software Developer',
    org: 'TechStartup SA',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "Omphile's mentorship completely changed my trajectory. His code reviews were incredibly detailed and the way he explained concepts made complex topics feel approachable. I landed my first dev role 3 months after bootcamp.",
  },
  {
    name: 'Naledi Dlamini',
    role: 'Data Engineer',
    org: 'Financial Services',
    avatar: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "The AI facilitation sessions Omphile delivered were unlike anything I'd experienced. He made cutting-edge concepts accessible and immediately applicable. His passion for education is genuinely infectious.",
  },
  {
    name: 'Sipho Nkosi',
    role: 'Programme Manager',
    org: 'CAPACITI Tech Accelerator',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "Working with Omphile as a Tech Champion transformed our bootcamp quality. His curriculum contributions, learner support, and facilitation skills elevated our programme completion rates significantly.",
  },
  {
    name: 'Ayasha Pillay',
    role: 'Frontend Developer',
    org: 'Digital Agency',
    avatar: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "I came into the bootcamp with zero coding experience. Omphile's patient mentorship, encouragement, and practical projects gave me the confidence to believe I could build a career in tech. And I did!",
  },
  {
    name: 'Lethabo Sithole',
    role: 'Cloud Engineer',
    org: 'Telecoms Company',
    avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "Omphile's Prompt Engineering workshop was a game-changer for our team. He has a unique ability to break down AI concepts for both technical and non-technical audiences. Highly recommend!",
  },
  {
    name: 'Kefilwe Motsepe',
    role: 'UX Designer turned Developer',
    org: 'Fintech Startup',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    text: "The career readiness coaching I received from Omphile was invaluable. From CV writing to salary negotiation, he prepared me for every step of the job search. I accepted an offer above my target salary!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => { setDirection(1); setCurrent(i => (i + 1) % testimonials.length); };
  const prev = () => { setDirection(-1); setCurrent(i => (i - 1 + testimonials.length) % testimonials.length); };

  const visible = [
    testimonials[(current - 1 + testimonials.length) % testimonials.length],
    testimonials[current],
    testimonials[(current + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-emerald-500/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-accent mb-4 mx-auto w-fit">Social Proof</p>
          <h2 className="section-title text-white mb-4">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Stories from learners, colleagues, and partners across South Africa's tech ecosystem
          </p>
        </motion.div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: i === 1 ? 1 : 0.6, scale: i === 1 ? 1 : 0.97 }}
              className={`glass-card p-6 ${i === 1 ? 'border-cyan-400/25 glow-border' : ''}`}
            >
              <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/20" />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role} · {t.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden relative overflow-hidden mb-8">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6"
            >
              <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{testimonials[current].text}"</p>
              <div className="flex items-center gap-3">
                <img src={testimonials[current].avatar} alt={testimonials[current].name} className="w-10 h-10 rounded-full object-cover border-2 border-cyan-400/20" />
                <div>
                  <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
                  <p className="text-slate-500 text-xs">{testimonials[current].role} · {testimonials[current].org}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button onClick={prev} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all" aria-label="Previous">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? 'w-6 h-2 bg-cyan-400' : 'w-2 h-2 bg-slate-700 hover:bg-slate-600'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all" aria-label="Next">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
