import { motion } from 'framer-motion';
import { Users, Calendar, MapPin, Mic2 } from 'lucide-react';

const workshops = [
  {
    title: 'Introduction to Generative AI',
    type: 'Workshop',
    audience: '80+',
    date: 'March 2024',
    location: 'Cape Town, SA',
    description: 'Hands-on workshop introducing professionals and students to Generative AI concepts, tools, and practical applications in the workplace.',
    outcomes: ['Participants built AI-powered tools', 'Mastered prompt engineering basics', '90%+ satisfaction rate'],
    tags: ['Generative AI', 'Prompt Engineering', 'ChatGPT'],
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Full-Stack Web Development Bootcamp',
    type: 'Bootcamp',
    audience: '50+',
    date: 'January 2024',
    location: 'Johannesburg, SA',
    description: '12-week intensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and deployment on cloud platforms.',
    outcomes: ['85% employment rate post-bootcamp', '100+ projects deployed', 'Partnership with 20+ employers'],
    tags: ['React', 'Node.js', 'Full Stack', 'Career Readiness'],
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'AI in Education: The Future of Learning',
    type: 'Speaking',
    audience: '200+',
    date: 'November 2023',
    location: 'Pretoria, SA',
    description: 'Keynote presentation at the Digital Skills Summit on leveraging AI tools to enhance educational outcomes and workforce readiness.',
    outcomes: ['Featured in industry publication', 'Panel discussion follow-up', '5 partnership inquiries'],
    tags: ['AI Education', 'EdTech', 'Digital Skills', 'Keynote'],
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Career Readiness for Tech Professionals',
    type: 'Workshop',
    audience: '120+',
    date: 'September 2023',
    location: 'Durban, SA',
    description: 'Interactive workshop covering CV writing, LinkedIn optimization, technical interview preparation, and salary negotiation for tech roles.',
    outcomes: ['40+ CVs reviewed live', '15+ mock interviews conducted', '70% found employment within 3 months'],
    tags: ['Career Readiness', 'Job Search', 'Interviews', 'LinkedIn'],
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Prompt Engineering Masterclass',
    type: 'Workshop',
    audience: '60+',
    date: 'July 2023',
    location: 'Online',
    description: 'Deep-dive masterclass on advanced prompt engineering techniques for developers, educators, and business professionals.',
    outcomes: ['Participants built 5+ AI tools', 'Prompt library created', 'Community of 300+ formed'],
    tags: ['Prompt Engineering', 'AI Tools', 'Productivity'],
    image: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Agile & Scrum for Software Teams',
    type: 'Workshop',
    audience: '40+',
    date: 'May 2023',
    location: 'Johannesburg, SA',
    description: 'Practical Agile and Scrum workshop for bootcamp learners and junior developers transitioning into professional tech teams.',
    outcomes: ['Teams improved sprint velocity by 60%', 'All teams completed final projects on time'],
    tags: ['Agile', 'Scrum', 'Project Management', 'Teams'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const typeColors: Record<string, string> = {
  Workshop: 'tag-primary',
  Bootcamp: 'tag-accent',
  Speaking: 'bg-orange-400/10 text-orange-300 border border-orange-400/20',
};

export default function Workshops() {
  return (
    <section id="workshops" className="section-padding relative overflow-hidden bg-gray-950/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Events & Talks</p>
          <h2 className="section-title text-white mb-4">
            Workshops & <span className="gradient-text">Speaking</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Sharing knowledge and inspiring the next generation of African tech professionals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={w.image}
                  alt={w.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
                <span className={`absolute top-3 left-3 tag text-xs ${typeColors[w.type]}`}>{w.type}</span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-sm mb-2 leading-tight group-hover:text-cyan-300 transition-colors">
                  {w.title}
                </h3>

                <div className="flex flex-wrap gap-3 mb-3">
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Calendar className="w-3 h-3" /> {w.date}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <MapPin className="w-3 h-3" /> {w.location}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-xs">
                    <Users className="w-3 h-3" /> {w.audience} attendees
                  </span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-3">{w.description}</p>

                <div className="space-y-1 mb-4">
                  {w.outcomes.slice(0, 2).map((o, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-slate-400">
                      <Mic2 className="w-3 h-3 text-cyan-400 flex-shrink-0" /> {o}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1">
                  {w.tags.map(t => (
                    <span key={t} className="tag tag-primary text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
