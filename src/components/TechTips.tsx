import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';

const tips = [
  {
    title: 'Use Optional Chaining',
    category: 'JavaScript',
    tip: 'Instead of checking each level with &&, use the ?. operator: user?.address?.city. It returns undefined instead of throwing an error if a link in the chain is nullish.',
    code: 'const city = user?.address?.city;\n// vs: user && user.address && user.address.city',
  },
  {
    title: 'React Key Prop Warning',
    category: 'React',
    tip: 'Never use array index as a key if items can be reordered, added, or removed. Use a unique ID instead. Index keys cause unnecessary re-renders and bugs with state preservation.',
    code: '{items.map(item => (\n  <Item key={item.id} {...item} />\n))}',
  },
  {
    title: 'The Zero-Shot → Few-Shot → Chain-of-Thought Ladder',
    category: 'AI / Prompting',
    tip: 'Start with a simple prompt (zero-shot). If the output isn\'t good enough, add 2-3 examples (few-shot). Still not right? Ask the AI to think step-by-step (chain-of-thought). This ladder dramatically improves results.',
    code: 'Zero-shot: "Explain closures"\nFew-shot: "Explain closures like these examples..."\nCoT: "Explain closures step by step"',
  },
  {
    title: 'Git Stash Your Changes',
    category: 'Git',
    tip: 'Need to switch branches but don\'t want to commit half-done work? Use git stash to temporarily save changes and git stash pop to restore them. Clean working tree, no messy commits.',
    code: 'git stash       # Save changes\ngit stash pop    # Restore changes',
  },
  {
    title: 'CSS Grid in One Line',
    category: 'CSS',
    tip: 'Create responsive grids without media queries using minmax: grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)). Columns auto-wrap when there\'s not enough space.',
    code: '.grid {\n  display: grid;\n  grid-template-columns: repeat(\n    auto-fit, minmax(280px, 1fr)\n  );\n}',
  },
  {
    title: 'Destructure with Defaults',
    category: 'JavaScript',
    tip: 'Set default values during destructuring to handle missing properties gracefully. No more "Cannot read property of undefined" errors.',
    code: 'const { name = "Anonymous", role = "user" } = data;',
  },
  {
    title: 'System Prompts are Everything',
    category: 'AI / Prompting',
    tip: 'When using AI APIs, a well-crafted system prompt is more impactful than a long user message. Define the AI\'s role, tone, format, and constraints in the system prompt for consistent, high-quality outputs.',
    code: 'system: "You are a senior code reviewer.\nOutput: numbered list of issues.\nTone: constructive, specific."',
  },
  {
    title: 'Use Array.at() for Negative Indexing',
    category: 'JavaScript',
    tip: 'Forget arr[arr.length - 1]. Use arr.at(-1) to access the last element, arr.at(-2) for second-to-last, etc. Works on any array or string.',
    code: 'const arr = [1, 2, 3, 4, 5];\narr.at(-1) // 5 (last)\narr.at(-2) // 4 (second last)',
  },
  {
    title: 'SQL EXISTS vs IN',
    category: 'Databases',
    tip: 'Use EXISTS for checking related records (faster for large subqueries). Use IN for small static lists. EXISTS stops scanning as soon as it finds a match; IN evaluates the entire subquery.',
    code: '-- Faster for large tables:\nSELECT * FROM orders o\nWHERE EXISTS (\n  SELECT 1 FROM returns r\n  WHERE r.order_id = o.id\n);',
  },
  {
    title: 'Docker Multi-Stage Builds',
    category: 'DevOps',
    tip: 'Use multi-stage builds to create tiny production images. Build in one stage with all dependencies, then copy only the built artifacts to a minimal runtime image. Reduces image size by 80%+.',
    code: 'FROM node:20 AS build\nWORKDIR /app\nCOPY . .\nRUN npm run build\n\nFROM node:20-alpine\nCOPY --from=build /app/dist ./dist\nCMD ["node", "dist/index.js"]',
  },
];

export default function TechTips() {
  const [current, setCurrent] = useState(0);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % tips.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const tip = tips[current];

  const copyCode = () => {
    navigator.clipboard.writeText(tip.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const catColors: Record<string, string> = {
    'JavaScript': 'tag-primary',
    'React': 'tag-accent',
    'AI / Prompting': 'bg-orange-400/10 text-orange-300 border border-orange-400/20',
    'Git': 'bg-red-400/10 text-red-300 border border-red-400/20',
    'CSS': 'bg-blue-400/10 text-blue-300 border border-blue-400/20',
    'Databases': 'bg-teal-400/10 text-teal-300 border border-teal-400/20',
    'DevOps': 'bg-emerald-400/10 text-emerald-300 border border-emerald-400/20',
  };

  return (
    <section id="tips" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Daily Knowledge</p>
          <h2 className="section-title text-white mb-4">
            Tech <span className="gradient-text">Tips</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Bite-sized tips I share with my mentees — practical, immediately applicable, and easy to remember
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`tag text-xs ${catColors[tip.category] || 'tag-primary'}`}>{tip.category}</span>
              <span className="text-slate-600 text-xs mono">Tip #{current + 1}/{tips.length}</span>
            </div>

            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
              <h3 className="text-white text-lg font-bold leading-tight">{tip.title}</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-5 ml-9">{tip.tip}</p>

            {/* Code block */}
            <div className="relative rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <button
                  onClick={copyCode}
                  className="flex items-center gap-1 text-slate-500 hover:text-white text-xs transition-colors"
                  aria-label="Copy code"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              <pre className="px-4 py-3 text-sm text-slate-300 overflow-x-auto mono leading-relaxed">
                <code>{tip.code}</code>
              </pre>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setCurrent(c => (c - 1 + tips.length) % tips.length)}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all"
            aria-label="Previous tip"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5">
            {tips.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all ${i === current ? 'w-5 h-1.5 bg-cyan-400' : 'w-1.5 h-1.5 bg-slate-700 hover:bg-slate-600'}`}
                aria-label={`Go to tip ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setCurrent(c => (c + 1) % tips.length)}
            className="w-10 h-10 rounded-xl glass flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/30 transition-all"
            aria-label="Next tip"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
