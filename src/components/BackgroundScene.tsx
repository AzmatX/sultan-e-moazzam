'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.1} />
        <Stars radius={100} depth={50} count={300} factor={4} fade />
      </Canvas>
    </div>
  );
}