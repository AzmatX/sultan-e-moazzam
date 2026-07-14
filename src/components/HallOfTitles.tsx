'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HallOfTitles({ onNext }: { onNext: () => void }) {
  const [clicks, setClicks] = useState(0);
  const fullTitleRevealed = clicks >= 5;

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1
        className="font-royal text-5xl md:text-7xl text-gold cursor-pointer hover:text-gold-light transition-colors mb-6"
        onClick={() => setClicks((c) => c + 1)}
      >
        Sultan-e-Moazzam
      </h1>
      <p className="text-2xl text-silver">Sahib-e-Kirdaar</p>
      <p className="text-xl text-silver mt-2">The Keeper Of Brotherhood</p>
      <p className="text-sm text-gray-400 mt-6">
        (Tap the main title 5 times for the full royal address)
      </p>

      {fullTitleRevealed && (
        <motion.div
          className="mt-8 space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-2xl text-gold-light">Hukm Farma-e-Waqt</p>
          <p className="text-2xl text-gold-light">Janaab-e-Mohtaram</p>
          <p className="text-2xl text-gold-light">Hazrat</p>
          <p className="text-3xl font-royal text-gold">Rehan Nawaz Sahab</p>
        </motion.div>
      )}

      <button className="royal-btn mt-12" onClick={onNext}>
        Next Hall →
      </button>
    </motion.section>
  );
}