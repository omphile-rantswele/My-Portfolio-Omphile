import { motion } from 'framer-motion';
import { Code2, Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Interactive CV', href: '#cv' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Mentorship', href: '#mentorship' },
  { label: 'Roadmaps', href: '#roadmap' },
  { label: 'Resources', href: '#resources' },
  { label: 'Dev Tools', href: '#tools' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Tech Tips', href: '#tips' },
  { label: 'Blog', href: '#blog' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative bg-gray-950 border-t border-cyan-500/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-gray-900" />
              </div>
              <span className="font-bold text-white text-lg font-space">
                Omphile<span className="gradient-text">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Software Developer · Technical Mentor · AI Facilitator · Learning Experience Professional.
              Building the future of tech education in South Africa.
            </p>
            <div className="flex items-center gap-3">
              {[
                { href: 'https://github.com/OmphileRantswele', icon: Github, label: 'GitHub' },
                { href: 'https://linkedin.com/in/omphile-rantswele', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://twitter.com/omphilerantswele', icon: Twitter, label: 'Twitter' },
                { href: 'mailto:omphile@capaciti.org.za', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-slate-500 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Work With Me</h4>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Available for freelance projects, speaking engagements, mentorship partnerships, and full-time opportunities.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Get In Touch
            </button>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-400 fill-current" /> by Omphile Rantswele · {new Date().getFullYear()}
          </p>
          <p className="text-slate-700 text-xs">
            Gauteng, South Africa 🇿🇦
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollTop}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
