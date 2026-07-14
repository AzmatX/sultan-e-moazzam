'use client';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 bg-royal-deep flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="text-6xl text-gold mb-8"
      >
        👑
      </motion.div>
      <h2 className="font-royal text-gold-light text-xl tracking-widest mb-4">
        Preparing The Royal Darbar...
      </h2>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-gold rounded-full"
            animate={{ scale: [0.6, 1.2, 0.6], opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2 }}
          />
        ))}
      </div>
    </motion.div>
  );
}