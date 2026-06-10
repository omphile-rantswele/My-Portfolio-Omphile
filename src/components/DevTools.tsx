import { motion } from 'framer-motion';
import { ExternalLink, Code2, Palette, GitBranch, Terminal, Bug, Zap } from 'lucide-react';

const tools = [
  {
    category: 'Code Editors & IDEs',
    icon: Code2,
    color: 'cyan',
    items: [
      { name: 'VS Code', desc: 'Lightweight, extensible editor with massive ecosystem', url: 'https://code.visualstudio.com/', free: true },
      { name: 'CodeSandbox', desc: 'Online IDE for rapid prototyping and sharing', url: 'https://codesandbox.io/', free: true },
      { name: 'Replit', desc: 'Browser-based IDE with AI assistance', url: 'https://replit.com/', free: true },
      { name: 'StackBlitz', desc: 'Instant full-stack environments in your browser', url: 'https://stackblitz.com/', free: true },
    ],
  },
  {
    category: 'Design & Prototyping',
    icon: Palette,
    color: 'emerald',
    items: [
      { name: 'Figma', desc: 'Collaborative UI design tool (free for individuals)', url: 'https://www.figma.com/', free: true },
      { name: 'Excalidraw', desc: 'Virtual whiteboard for sketching diagrams', url: 'https://excalidraw.com/', free: true },
      { name: 'Realtime Colors', desc: 'Test color palettes on real website layouts', url: 'https://www.realtimecolors.com/', free: true },
      { name: 'Coolors', desc: 'Super fast color palette generator', url: 'https://coolors.co/', free: true },
    ],
  },
  {
    category: 'Version Control & Collaboration',
    icon: GitBranch,
    color: 'blue',
    items: [
      { name: 'GitHub', desc: 'World\'s largest code hosting and collaboration platform', url: 'https://github.com/', free: true },
      { name: 'GitKraken', desc: 'Visual Git client for easier branch management', url: 'https://www.gitkraken.com/', free: false },
      { name: 'Conventional Commits', desc: 'Standardized commit message format for clarity', url: 'https://www.conventionalcommits.org/', free: true },
    ],
  },
  {
    category: 'API & Testing',
    icon: Terminal,
    color: 'teal',
    items: [
      { name: 'Postman', desc: 'API development and testing platform', url: 'https://www.postman.com/', free: true },
      { name: 'Thunder Client', desc: 'Lightweight REST API client inside VS Code', url: 'https://www.thunderclient.com/', free: true },
      { name: 'JSONPlaceholder', desc: 'Free fake API for testing and prototyping', url: 'https://jsonplaceholder.typicode.com/', free: true },
    ],
  },
  {
    category: 'Debugging & Performance',
    icon: Bug,
    color: 'cyan',
    items: [
      { name: 'Chrome DevTools', desc: 'Built-in browser tools for debugging and profiling', url: 'https://developer.chrome.com/docs/devtools/', free: true },
      { name: 'React DevTools', desc: 'Inspect React component hierarchies in real-time', url: 'https://react.dev/learn/react-developer-tools', free: true },
      { name: 'Lighthouse', desc: 'Automated performance, accessibility, and SEO auditing', url: 'https://developer.chrome.com/docs/lighthouse/', free: true },
      { name: 'Bundlephobia', desc: 'Check the cost of adding npm packages to your bundle', url: 'https://bundlephobia.com/', free: true },
    ],
  },
  {
    category: 'Deployment & Hosting',
    icon: Zap,
    color: 'emerald',
    items: [
      { name: 'Vercel', desc: 'Zero-config deployments for frontend frameworks', url: 'https://vercel.com/', free: true },
      { name: 'Netlify', desc: 'Deploy modern web projects with CI/CD built-in', url: 'https://www.netlify.com/', free: true },
      { name: 'Railway', desc: 'Deploy anything with one click — backend, DBs, cron', url: 'https://railway.app/', free: true },
      { name: 'Supabase', desc: 'Open-source backend-as-a-service with PostgreSQL', url: 'https://supabase.com/', free: true },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  cyan:    { bg: 'bg-cyan-400/10', text: 'text-cyan-400' },
  emerald: { bg: 'bg-emerald-400/10', text: 'text-emerald-400' },
  blue:    { bg: 'bg-blue-400/10', text: 'text-blue-400' },
  teal:    { bg: 'bg-teal-400/10', text: 'text-teal-400' },
};

export default function DevTools() {
  return (
    <section id="tools" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Developer Toolkit</p>
          <h2 className="section-title text-white mb-4">
            Free <span className="gradient-text">Dev Tools</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            The exact tools I use and recommend — all free or with generous free tiers
          </p>
        </motion.div>

        <div className="space-y-12">
          {tools.map(({ category, icon: Icon, color, items }, ci) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.05 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-8 h-8 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 ${c.text}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-white font-bold text-base">{category}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/15 to-transparent" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {items.map((tool, i) => (
                    <motion.a
                      key={tool.name}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="glass-card p-4 group flex items-start gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors truncate">{tool.name}</h4>
                          {tool.free && <span className="tag tag-accent text-xs flex-shrink-0">Free</span>}
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed">{tool.desc}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-700 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-0.5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
