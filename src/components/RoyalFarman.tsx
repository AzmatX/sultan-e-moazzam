'use client';
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

export default function RoyalFarman({ onNext }: { onNext: () => void }) {
  const [displayText, setDisplayText] = useState('');
  const fullText = CONFIG.farmanText;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="farman-scroll">
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 bg-gold rounded-full flex items-center justify-center text-2xl text-royal-deep">
          ✒️
        </div>
        <h2 className="font-royal text-3xl text-center text-gold-dark mb-6">
          📜 Royal Farman
        </h2>
        <div className="text-left space-y-4">
          <p className="text-lg font-medium">
            Janaab-e-Aali{' '}
            <span className="font-royal text-gold-dark">
              {CONFIG.recipientName} Sahab
            </span>
            ,
          </p>
          <div className="min-h-[6rem] text-gray-700 leading-relaxed">
            {displayText}
            <span className="animate-pulse">|</span>
          </div>
          <p className="text-right text-gold-dark italic mt-6">
            Ba-Khuda,
            <br />
            <span className="font-royal not-italic">Aapka Apna</span>
          </p>
        </div>
      </div>
      <button className="royal-btn mt-10" onClick={onNext}>
        Next Hall →
      </button>
    </motion.section>
  );
}