'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

export default function GiftChamber({ onNext }: { onNext: () => void }) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-royal-deep to-black px-4 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute top-0 left-1/2 w-64 h-full bg-gradient-to-b from-gold/5 to-transparent -translate-x-1/2 pointer-events-none" />
      <div className="z-10 text-center">
        <div className="w-48 h-64 mx-auto mb-8 bg-gray-900/60 border-2 border-gold rounded-2xl flex items-center justify-center shadow-2xl relative">
          <img
            src="/images/placeholder-perfume.png"
            alt="Sultan Attar"
            className="w-32 h-auto"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute bottom-4 text-4xl text-gold cursor-pointer">
            <motion.i
              className={`fas ${unlocked ? 'fa-unlock' : 'fa-lock'}`}
              onClick={() => {
                if (!unlocked) setUnlocked(true);
              }}
              whileHover={{ scale: 1.2 }}
            />
          </div>
        </div>
        <h3 className="font-royal text-2xl text-gold mb-2">
          Azmat Ka Keemti Tohfa
        </h3>
        <p className="text-silver">Amanat Mahfooz Hai.</p>
        {unlocked && (
          <motion.p
            className="max-w-md text-gold-light italic mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {CONFIG.giftUnlockMessage}
          </motion.p>
        )}
      </div>
      <button
        className="royal-btn mt-10"
        onClick={onNext}
        disabled={!unlocked}
      >
        {unlocked ? 'Proceed when ready' : '...'}
      </button>
    </motion.section>
  );
}