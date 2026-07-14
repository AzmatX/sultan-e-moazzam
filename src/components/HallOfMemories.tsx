'use client';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

export default function HallOfMemories({ onNext }: { onNext: () => void }) {
  return (
    <motion.section
      className="min-h-screen py-20 px-4 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="font-royal text-4xl md:text-5xl text-gold mb-12">
        🖼️ The Royal Album
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {CONFIG.memories.map((mem, i) => (
          <motion.div
            key={i}
            className="bg-royal-card border border-gold-dark rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={mem.img}
              alt={mem.caption}
              className="w-full h-52 object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://via.placeholder.com/400x300/06152D/D4AF37?text=Memory';
              }}
            />
            <div className="p-4 text-gold-light font-script text-center">
              {mem.caption}
            </div>
          </motion.div>
        ))}
      </div>
      <button className="royal-btn mt-14" onClick={onNext}>
        Next Hall →
      </button>
    </motion.section>
  );
}