import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Twitter, Mail, Download, ArrowRight,
  Calendar, MapPin, Code2, Cpu, Database, Globe, Layers, Zap
} from 'lucide-react';

const roles = [
  'Software Developer',
  'Technical Mentor',
  'AI Facilitator',
  'Tech Champion',
  'Learning Experience Professional',
  'Public Speaker',
  'Curriculum Designer',
  'Bootcamp Facilitator',
];

const floatingIcons = [
  { icon: Code2, top: '15%', left: '8%', delay: 0 },
  { icon: Cpu, top: '25%', right: '6%', delay: 0.5 },
  { icon: Database, bottom: '35%', left: '5%', delay: 1 },
  { icon: Globe, top: '60%', right: '8%', delay: 1.5 },
  { icon: Layers, bottom: '25%', right: '12%', delay: 2 },
  { icon: Zap, top: '45%', left: '10%', delay: 0.8 },
];

function ParticleField() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute w-1 h-1 rounded-full bg-cyan-400"
          style={{ left: p.left, bottom: 0, opacity: 0 }}
          animate={{
            y: [0, -window.innerHeight],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);
  const indexRef = useRef(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (indexRef.current < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, indexRef.current + 1));
          indexRef.current++;
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (indexRef.current > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, indexRef.current - 1));
          indexRef.current--;
        }, 30);
      } else {
        setRoleIndex(i => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [roleIndex, displayed, typing]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg grid-dot-bg"
    >
      {/* Radial glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/4 rounded-full blur-3xl" />

      <ParticleField />

      {/* Floating tech icons */}
      {floatingIcons.map(({ icon: Icon, delay, ...pos }, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center w-12 h-12 glass rounded-xl text-cyan-400"
          style={pos as React.CSSProperties}
          animate={{ y: [0, -12, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4 + i, delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-400/20 text-sm text-cyan-300 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <MapPin className="w-3.5 h-3.5" />
          Available for opportunities · South Africa
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 leading-none tracking-tight"
        >
          Omphile
          <br />
          <span className="shimmer-text">Rantswele</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 mb-6 h-10 flex items-center justify-center"
        >
          <span className="text-cyan-400">{displayed}</span>
          <span className="typewriter-cursor ml-0.5" />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Empowering the next generation of tech talent through world-class software development,
          AI facilitation, and transformative mentorship. 500+ learners mentored across South Africa.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <a
            href="/cv-omphile-rantswele.pdf"
            download
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
          <button
            onClick={() => scrollTo('projects')}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4" /> Contact Me
          </button>
          <a
            href="https://calendly.com/omphilerantswele"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <Calendar className="w-4 h-4" /> Book a Meeting
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { href: 'https://github.com/OmphileRantswele', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/omphile-rantswele', icon: Linkedin, label: 'LinkedIn' },
            { href: 'https://twitter.com/omphilerantswele', icon: Twitter, label: 'Twitter' },
            { href: 'mailto:omphile@example.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200 hover:scale-110"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-cyan-400/30 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-cyan-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
