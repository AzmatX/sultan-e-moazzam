'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HallOfOath({ onNext }: { onNext: () => void }) {
  const [sealed, setSealed] = useState(false);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p
        className="text-3xl md:text-4xl font-script text-ivory leading-relaxed max-w-xl"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
      >
        Brotherhood isn't measured by years. <br />
        It is measured by who stayed when leaving was easier.
      </motion.p>
      <motion.div
        className="text-6xl my-10 cursor-pointer"
        whileHover={{ scale: 1.2 }}
        onClick={() => setSealed(true)}
      >
        🤝
      </motion.div>
      {sealed && (
        <motion.p
          className="text-2xl font-royal text-gold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Understood.
        </motion.p>
      )}
      <button className="royal-btn mt-10" onClick={onNext}>
        Final Farewell →
      </button>
    </motion.section>
  );
}