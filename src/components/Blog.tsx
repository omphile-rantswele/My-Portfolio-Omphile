import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    title: 'How Generative AI is Transforming Software Development in 2024',
    category: 'Artificial Intelligence',
    date: 'May 2024',
    readTime: '8 min read',
    excerpt: 'From GitHub Copilot to ChatGPT-powered development workflows, explore how AI is redefining how we write, review, and deploy code — and what developers need to know.',
    image: 'https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
  },
  {
    title: 'The Mentorship Formula: How to Guide Junior Developers to Success',
    category: 'Mentorship',
    date: 'April 2024',
    readTime: '6 min read',
    excerpt: 'After mentoring 500+ learners, I\'ve distilled the principles that consistently produce confident, job-ready developers. Here\'s the framework that works.',
    image: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: true,
  },
  {
    title: 'Building Your First Full-Stack App: A Practical Guide',
    category: 'Software Development',
    date: 'March 2024',
    readTime: '12 min read',
    excerpt: 'A step-by-step guide to building and deploying a production-ready full-stack application using React, Node.js, and PostgreSQL.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    title: 'Prompt Engineering: The Skill Every Developer Needs in 2024',
    category: 'Artificial Intelligence',
    date: 'February 2024',
    readTime: '7 min read',
    excerpt: 'Prompt engineering is no longer optional for developers. Learn the advanced techniques that will make you 10x more productive with AI tools.',
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    title: 'Breaking Into Tech from South Africa: A Realistic Roadmap',
    category: 'Career Readiness',
    date: 'January 2024',
    readTime: '10 min read',
    excerpt: 'The honest, practical guide to building a tech career in South Africa — from choosing your first programming language to landing your first job offer.',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
  {
    title: 'Why Agile Scrum is More Than Just Stand-ups',
    category: 'Technology Education',
    date: 'December 2023',
    readTime: '5 min read',
    excerpt: 'Most teams do Agile wrong. Here\'s how real Scrum, when done properly, transforms team velocity, communication, and product quality.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    featured: false,
  },
];

const cats = ['All', 'Software Development', 'Artificial Intelligence', 'Career Readiness', 'Mentorship', 'Technology Education'];

const catColors: Record<string, string> = {
  'Artificial Intelligence': 'tag-primary',
  'Mentorship': 'tag-accent',
  'Software Development': 'bg-blue-400/10 text-blue-300 border border-blue-400/20',
  'Career Readiness': 'bg-orange-400/10 text-orange-300 border border-orange-400/20',
  'Technology Education': 'bg-teal-400/10 text-teal-300 border border-teal-400/20',
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = posts.filter(p => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.filter(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  return (
    <section id="blog" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Insights & Articles</p>
          <h2 className="section-title text-white mb-4">
            Latest <span className="gradient-text">Blog Posts</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Thoughts on tech, education, AI, and the future of work in Africa
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-400/50"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map(c => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === c ? 'bg-cyan-400 text-gray-950' : 'glass text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {featured.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent" />
                  <span className={`absolute top-3 left-3 tag text-xs ${catColors[p.category] || 'tag-primary'}`}>{p.category}</span>
                  <span className="absolute top-3 right-3 tag bg-cyan-400/90 text-gray-950 text-xs border-0">Featured</span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-base mb-2 group-hover:text-cyan-300 transition-colors leading-tight">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-slate-500 text-xs">
                      <span>{p.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {p.readTime}</span>
                    </div>
                    <span className="flex items-center gap-1 text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* Rest */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card p-5 cursor-pointer group"
            >
              <span className={`tag text-xs mb-3 inline-flex ${catColors[p.category] || 'tag-primary'}`}>{p.category}</span>
              <h3 className="text-white font-bold text-sm mb-2 group-hover:text-cyan-300 transition-colors leading-tight">{p.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">{p.excerpt}</p>
              <div className="flex items-center justify-between text-slate-500 text-xs">
                <span>{p.date} · {p.readTime}</span>
                <ArrowRight className="w-4 h-4 group-hover:text-cyan-400 transition-colors" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
