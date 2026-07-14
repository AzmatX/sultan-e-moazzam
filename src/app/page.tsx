'use client';
import { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import RoyalIntro from '@/components/RoyalIntro';
import PalaceGate from '@/components/PalaceGate';
import RoyalFarman from '@/components/RoyalFarman';
import HallOfTitles from '@/components/HallOfTitles';
import HallOfBrotherhood from '@/components/HallOfBrotherhood';
import HallOfMemories from '@/components/HallOfMemories';
import HallOfChats from '@/components/HallOfChats';
import GiftChamber from '@/components/GiftChamber';
import HallOfOath from '@/components/HallOfOath';
import RoyalFarewell from '@/components/RoyalFarewell';


type Stage =
  | 'loading'
  | 'intro'
  | 'gate'
  | 'farman'
  | 'titles'
  | 'brotherhood'
  | 'memories'
  | 'chats'
  | 'gift'
  | 'oath'
  | 'farewell';

export default function Home() {
  const [stage, setStage] = useState<Stage>('loading');
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stage === 'loading') {
      const timer = setTimeout(() => setStage('intro'), 4000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  const handleProceed = (next: Stage) => {
    setStage(next);
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen" ref={mainRef}>
      <BackgroundScene />
      <AnimatePresence mode="wait">
        {stage === 'loading' && <LoadingScreen key="loading" />}
        {stage === 'intro' && <RoyalIntro key="intro" onProceed={() => handleProceed('gate')} />}
        {stage === 'gate' && <PalaceGate key="gate" onEnter={() => handleProceed('farman')} />}
        {stage === 'farman' && <RoyalFarman key="farman" onNext={() => handleProceed('titles')} />}
        {stage === 'titles' && <HallOfTitles key="titles" onNext={() => handleProceed('brotherhood')} />}
        {stage === 'brotherhood' && <HallOfBrotherhood key="brotherhood" onNext={() => handleProceed('memories')} />}
        {stage === 'memories' && <HallOfMemories key="memories" onNext={() => handleProceed('chats')} />}
        {stage === 'chats' && <HallOfChats key="chats" onNext={() => handleProceed('gift')} />}
        {stage === 'gift' && <GiftChamber key="gift" onNext={() => handleProceed('oath')} />}
        {stage === 'oath' && <HallOfOath key="oath" onNext={() => handleProceed('farewell')} />}
        {stage === 'farewell' && <RoyalFarewell key="farewell" />}
      </AnimatePresence>
    </main>
  );
}