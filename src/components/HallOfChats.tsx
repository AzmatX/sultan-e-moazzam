'use client';
import { motion } from 'framer-motion';
import { CONFIG } from '@/data/config';

export default function HallOfChats({ onNext }: { onNext: () => void }) {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="font-royal text-4xl text-gold mb-10">
        💬 Royal Conversations
      </h2>
      <div className="max-w-md w-full bg-gray-900/50 backdrop-blur rounded-2xl border border-gold-dark p-6 space-y-4">
        {CONFIG.chats.map((chat, i) => (
          <motion.div
            key={i}
            className={`max-w-[80%] px-5 py-3 rounded-2xl text-sm ${
              chat.sender === 'me'
                ? 'ml-auto bg-emerald-900/80 text-white'
                : 'mr-auto bg-gray-800 text-gray-200'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.5 }}
          >
            {chat.text}
            <div className="text-xs opacity-60 mt-1">
              {new Date().toLocaleTimeString()}
            </div>
          </motion.div>
        ))}
        <div className="text-center text-gold border border-dashed border-gold rounded-full py-2">
          ✨ Royal Archive ✨
        </div>
      </div>
      <button className="royal-btn mt-10" onClick={onNext}>
        Next Hall →
      </button>
    </motion.section>
  );
}