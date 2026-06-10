import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Eye, Code2, Activity } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  watchers_count: number;
  updated_at: string;
}

const langColors: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  PHP: '#4F5D95',
  default: '#8b949e',
};

export default function GitHubDashboard() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = 'OmphileRantswele';

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setRepos(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const stats = [
    { label: 'Public Repos', value: repos.length || '20+', icon: Code2 },
    { label: 'Total Stars', value: repos.reduce((a, r) => a + r.stargazers_count, 0) || '50+', icon: Star },
    { label: 'Total Forks', value: repos.reduce((a, r) => a + r.forks_count, 0) || '30+', icon: GitFork },
    { label: 'Active Projects', value: '6+', icon: Activity },
  ];

  return (
    <section id="github" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Open Source</p>
          <h2 className="section-title text-white mb-4">
            GitHub <span className="gradient-text">Dashboard</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Live repository statistics and contribution activity
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-5 text-center"
            >
              <Icon className="w-5 h-5 text-cyan-400 mx-auto mb-2" strokeWidth={1.5} />
              <div className="text-2xl font-black gradient-text mb-1">{value}</div>
              <div className="text-slate-500 text-xs">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution graph placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6 mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
            <h3 className="text-white font-semibold text-sm">Contribution Activity</h3>
          </div>
          <img
            src={`https://ghchart.rshah.org/00d4ff/${username}`}
            alt={`${username}'s GitHub contribution chart`}
            className="w-full rounded-lg"
            onError={e => {
              (e.target as HTMLImageElement).src = '';
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="mt-4 text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors flex items-center gap-2 justify-center"
            >
              <Github className="w-4 h-4" /> View full profile on GitHub
            </a>
          </div>
        </motion.div>

        {/* Repos */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="glass-card p-5 animate-pulse">
                <div className="h-4 bg-slate-800 rounded mb-2 w-3/4" />
                <div className="h-3 bg-slate-800 rounded mb-4 w-full" />
                <div className="h-3 bg-slate-800 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="glass-card p-5 block hover:border-cyan-400/30 group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors truncate mr-2">
                    {repo.name}
                  </h4>
                  <Github className="w-4 h-4 text-slate-600 group-hover:text-slate-400 flex-shrink-0 transition-colors" />
                </div>
                <p className="text-slate-500 text-xs mb-4 line-clamp-2 leading-relaxed">
                  {repo.description || 'No description provided.'}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-500">
                  {repo.language && (
                    <span className="flex items-center gap-1.5">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ background: langColors[repo.language] || langColors.default }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {repo.stargazers_count}</span>
                  <span className="flex items-center gap-1"><GitFork className="w-3 h-3" /> {repo.forks_count}</span>
                  <span className="flex items-center gap-1"><Eye className="w-3 h-3" /> {repo.watchers_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Github className="w-12 h-12 text-slate-700 mx-auto mb-4" />
            <p className="text-slate-500 text-sm mb-4">Repositories loading from GitHub...</p>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4" /> Visit GitHub Profile
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
