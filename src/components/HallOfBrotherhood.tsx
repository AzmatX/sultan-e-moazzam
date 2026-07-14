'use client';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

export default function HallOfBrotherhood({ onNext }: { onNext: () => void }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="font-royal text-4xl md:text-5xl text-gold mb-12">
        ⚔️ Hall of Brotherhood
      </h2>
      <div className="max-w-2xl w-full space-y-8">
        {CONFIG.chapters.map((chap, i) => (
          <motion.div
            key={i}
            className="pl-6 border-l-4 border-gold"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.3 }}
          >
            <h3 className="font-royal text-2xl text-gold-light mb-2">
              {chap.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{chap.desc}</p>
          </motion.div>
        ))}
      </div>
      <button className="royal-btn mt-14" onClick={onNext}>
        Next Hall →
      </button>
    </motion.section>
  );
}