'use client';
import { motion } from 'framer-motion';

export default function RoyalIntro({ onProceed }: { onProceed: () => void }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.p
        className="font-script text-2xl md:text-3xl text-gold-light mb-4"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Har daur mein taaj pehne hue Badshah paida hote hain...
      </motion.p>
      <motion.p
        className="font-script text-2xl md:text-3xl text-gold-light mb-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        Magar... kuch log bina taaj ke bhi dilon par hukumat karte hain.
      </motion.p>
      <motion.h1
        className="font-royal text-5xl md:text-7xl text-gold mb-8"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        Aaj ka Darbar
        <br />
        <span className="text-4xl md:text-6xl">Ek Aise Hi Sultan Ke Naam.</span>
      </motion.h1>
      <motion.button
        className="royal-btn mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        onClick={onProceed}
      >
        Proceed to the Palace
      </motion.button>
    </motion.section>
  );
}