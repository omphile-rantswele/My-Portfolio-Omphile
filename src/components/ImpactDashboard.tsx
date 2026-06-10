import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, FolderGit2, Mic2, Layers, Award } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Learners Mentored', icon: Users, color: 'from-cyan-400 to-blue-500' },
  { value: 10, suffix: '+', label: 'Bootcamp Cohorts', icon: BookOpen, color: 'from-emerald-400 to-cyan-500' },
  { value: 100, suffix: '+', label: 'Projects Reviewed', icon: FolderGit2, color: 'from-blue-400 to-cyan-400' },
  { value: 20, suffix: '+', label: 'Workshops Delivered', icon: Mic2, color: 'from-cyan-400 to-teal-500' },
  { value: 5, suffix: '+', label: 'Tech Streams', icon: Layers, color: 'from-teal-400 to-emerald-500' },
  { value: 3, suffix: '+', label: 'Years Experience', icon: Award, color: 'from-emerald-400 to-green-500' },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const step = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function ImpactDashboard() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-950 to-gray-950" />
      <div className="absolute inset-0 grid-dot-bg opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Impact Dashboard</p>
          <h2 className="section-title text-white mb-4">
            Measurable <span className="gradient-text">Impact</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real numbers that reflect the difference made in South Africa's tech ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map(({ value, suffix, label, icon: Icon, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 text-center group cursor-default"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <div className={`text-3xl font-black bg-gradient-to-br ${color} bg-clip-text text-transparent mb-1`}>
                <CountUp target={value} suffix={suffix} />
              </div>
              <p className="text-slate-400 text-xs font-medium leading-tight">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
