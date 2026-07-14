'use client';
import { motion } from 'framer-motion';

export default function RoyalFarewell() {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gradient-to-t from-black to-royal-deep"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-2xl md:text-3xl text-gold-light mb-4">
        Every Palace has a final door.
      </p>
      <p className="text-2xl md:text-3xl text-gold-light mb-10">
        But some friendships never end.
      </p>
      <p className="font-royal text-2xl text-gold mb-10">
        May Allah Protect Your Smile, Your Heart, Your Journey.
      </p>
      <div className="mt-12">
        <p className="text-silver">Made With Respect, With Time, With Loyalty</p>
        <p className="font-royal text-4xl text-gold mt-4">Azmat Siddique</p>
      </div>
      <p className="text-xs text-gray-600 mt-20">
        Version 1.0 — Royal Brotherhood Experience
      </p>
    </motion.section>
  );
}