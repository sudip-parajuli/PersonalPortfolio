"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, PerspectiveCamera } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import MobiusRunner from "./MobiusRunner";

function ParticleField() {
  const { theme } = useTheme();
  const count = 2000;
  
  // Create positions for particles
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;     // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (pointsRef.current) {
        // Rotate the entire field slowly
        pointsRef.current.rotation.y += delta * 0.05;
        pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  const particleColor = theme === 'light' ? "#0f172a" : "#64ffda";

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={particleColor}
        transparent
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        
        {/* Environment / Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b967ff" />
        
        {/* Background Elements */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ParticleField />
        
        {/* The "Catch Me" Mobius Runner */}
        <MobiusRunner />

        {/* Floating background shapes for depth */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh position={[4, 2, -5]} scale={0.5}>
                <dodecahedronGeometry />
                <meshStandardMaterial color="#112240" wireframe />
            </mesh>
            <mesh position={[-4, -2, -3]} scale={0.3}>
                <icosahedronGeometry />
                <meshStandardMaterial color="#112240" wireframe />
            </mesh>
        </Float>
      </Canvas>
    </div>
  );
}
