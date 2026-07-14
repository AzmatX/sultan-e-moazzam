'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function PalaceGate({ onEnter }: { onEnter: () => void }) {
  const gateLeftRef = useRef<HTMLDivElement>(null);
  const gateRightRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const [gateOpened, setGateOpened] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.to(gateLeftRef.current, {
      rotationY: -70,
      duration: 2,
      ease: 'power3.inOut',
    })
      .to(
        gateRightRef.current,
        { rotationY: 70, duration: 2, ease: 'power3.inOut' },
        '-=2'
      )
      .to(centerRef.current, { opacity: 1, duration: 1 })
      .then(() => setGateOpened(true));
  }, []);

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      exit={{ opacity: 0 }}
    >
      <div className="relative w-full max-w-4xl h-80 md:h-96">
        <div
          ref={gateLeftRef}
          className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#1e3a5f] to-[#0a1a2f] border-2 border-gold-dark origin-left"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <div
          ref={gateRightRef}
          className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#1e3a5f] to-[#0a1a2f] border-2 border-gold-dark origin-right"
          style={{ transformStyle: 'preserve-3d' }}
        />
        <div
          ref={centerRef}
          className="absolute inset-0 flex flex-col items-center justify-center opacity-0"
        >
          <h1 className="font-royal text-4xl md:text-6xl text-gold text-shadow-glow text-center">
            Sultan-e-Moazzam
          </h1>
          <p className="font-script text-2xl text-gold-light mt-4">
            Sahib-e-Kirdaar
          </p>
          <p className="text-xl text-silver mt-2">Rehan Nawaz</p>
        </div>
      </div>
      {gateOpened && (
        <motion.button
          className="royal-btn mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onEnter}
        >
          Enter The Royal Palace
        </motion.button>
      )}
    </motion.section>
  );
}