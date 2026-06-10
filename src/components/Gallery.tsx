import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  {
    src: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'AI Workshop – Cape Town',
    category: 'Workshop',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Career Readiness Session',
    category: 'Event',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Bootcamp Delivery – Cohort 7',
    category: 'Bootcamp',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Digital Skills Summit – Keynote',
    category: 'Speaking',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Agile Workshop – Scrum Facilitation',
    category: 'Workshop',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Team Project Showcase',
    category: 'Bootcamp',
    span: 'md:col-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Prompt Engineering Masterclass',
    category: 'Workshop',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600',
    caption: 'Learner Project Demo Day',
    category: 'Event',
    span: '',
  },
];

const cats = ['All', 'Workshop', 'Bootcamp', 'Speaking', 'Event'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selected, setSelected] = useState<typeof photos[0] | null>(null);

  const filtered = activeFilter === 'All' ? photos : photos.filter(p => p.category === activeFilter);

  return (
    <section id="gallery" className="section-padding relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="tag tag-primary mb-4 mx-auto w-fit">Moments & Memories</p>
          <h2 className="section-title text-white mb-4">
            <span className="gradient-text">Gallery</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Snapshots from workshops, bootcamps, speaking engagements, and community events
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setActiveFilter(c)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeFilter === c ? 'bg-cyan-400 text-gray-950' : 'glass text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo, i) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl ${photo.span}`}
                style={{ height: '200px' }}
                onClick={() => setSelected(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="tag tag-primary text-xs">{photo.category}</span>
                  <p className="text-white text-xs font-medium mt-1 line-clamp-1">{photo.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/95 backdrop-blur-md"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute -top-4 -right-4 z-10 w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selected.src.replace('w=600', 'w=1200')}
                alt={selected.caption}
                className="w-full rounded-2xl"
              />
              <div className="mt-3 text-center">
                <span className="tag tag-primary text-xs mr-2">{selected.category}</span>
                <span className="text-slate-300 text-sm">{selected.caption}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
