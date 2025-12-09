"use client";

import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line, Trail, Float } from "@react-three/drei";
import * as THREE from "three";

export default function MobiusRunner() {
  const runnerRef = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();

  // Mobius Strip Parameters
  // t covers 0 to 4PI for the full edge loop
  const POINTS = 200;
  const RADIUS = 2.5; // Size of the loop
  const STRIP_WIDTH = 0.8;

  // Generate the path points for the visual track
  const pathPoints = useMemo(() => {
    const points = [];
    for (let i = 0; i <= POINTS; i++) {
      const t = (i / POINTS) * Math.PI * 4;
      const x = (RADIUS + STRIP_WIDTH * Math.cos(t / 2)) * Math.cos(t);
      const y = (RADIUS + STRIP_WIDTH * Math.cos(t / 2)) * Math.sin(t);
      const z = STRIP_WIDTH * Math.sin(t / 2);
      points.push(new THREE.Vector3(x, y, z));
    }
    return points;
  }, []);

  // Animation state
  const progress = useRef(0); // Current position along curve (0 to 4PI)
  const speed = useRef(0.5); // Base speed
  const targetSpeed = useRef(0.5);

  useFrame((state, delta) => {
    if (!runnerRef.current) return;

    // 1. Calculate current 3D position of the runner
    const t = progress.current;
    
    // Parametric equation for Mobius edge
    const r = RADIUS + STRIP_WIDTH * Math.cos(t / 2);
    const x = r * Math.cos(t);
    const y = r * Math.sin(t);
    const z = STRIP_WIDTH * Math.sin(t / 2);
    
    // Update runner position
    runnerRef.current.position.set(x, y, z);
    
    // Calculate tangent for rotation (look ahead)
    const tNext = t + 0.1;
    const rNext = RADIUS + STRIP_WIDTH * Math.cos(tNext / 2);
    const nextX = rNext * Math.cos(tNext);
    const nextY = rNext * Math.sin(tNext);
    const nextZ = STRIP_WIDTH * Math.sin(tNext / 2);
    runnerRef.current.lookAt(nextX, nextY, nextZ);

    // 2. Mouse Interaction: "Catch me if you can" (Run away logic)
    // Convert 3D position to screen space to check distance with mouse
    const vector = new THREE.Vector3(x, y, z);
    vector.project(state.camera); // Now inNDC (-1 to +1)

    // Mouse distance check (mouse x/y are also -1 to 1)
    const dx = mouse.x - vector.x;
    const dy = mouse.y - vector.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    // If mouse is close (e.g., within 0.3 NDC units), accelerate!
    if (dist < 0.4) {
      targetSpeed.current = 5.0; // RUN AWAY!
    } else {
      targetSpeed.current = 0.5; // Return to cruise speed
    }

    // Smooth speed transition
    speed.current = THREE.MathUtils.lerp(speed.current, targetSpeed.current, 0.1);

    // Advance progress
    progress.current += speed.current * delta;
    if (progress.current > Math.PI * 4) {
      progress.current -= Math.PI * 4; // Loop
    }
  });

  return (
    <group>
      {/* The Visual Track */}
      <Line
        points={pathPoints}
        color="#ffffff"
        opacity={0.1}
        transparent
        lineWidth={1}
      />

      {/* The Runner */}
      <group ref={runnerRef}>
        <Float speed={10} rotationIntensity={2} floatIntensity={0}>
            <Trail
                width={1.5}
                length={6}
                color={new THREE.Color("#64ffda")}
                attenuation={(t) => t * t}
            >
                <mesh>
                    <octahedronGeometry args={[0.2, 0]} />
                    <meshStandardMaterial 
                        color="#64ffda" 
                        emissive="#64ffda"
                        emissiveIntensity={2}
                        toneMapped={false}
                    />
                </mesh>
            </Trail>
            
            {/* Outer glow ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                 <torusGeometry args={[0.4, 0.02, 16, 32]} />
                 <meshBasicMaterial color="#b967ff" transparent opacity={0.5} />
            </mesh>
        </Float>
      </group>
    </group>
  );
}
