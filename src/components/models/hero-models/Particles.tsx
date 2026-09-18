"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

type ParticlesProps = {
  count?: number;
};

type Particle = {
  position: [number, number, number];
  speed: number;
};

function pseudoRandom(index: number, salt: number) {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;
  return value - Math.floor(value);
}

const Particles = ({ count = 200 }: ParticlesProps) => {
  const particleCount = Math.max(0, Math.floor(count));
  const mesh = useRef<THREE.Points<THREE.BufferGeometry>>(null);

  const particles = useMemo(() => {
    const temp: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: [
          (pseudoRandom(i, 1) - 0.5) * 10,
          pseudoRandom(i, 2) * 10 + 5,
          (pseudoRandom(i, 3) - 0.5) * 10,
        ],
        speed: 0.005 + pseudoRandom(i, 4) * 0.001,
      });
    }
    return temp;
  }, [particleCount]);

  useFrame(() => {
    if (!mesh.current) return;

    const positionAttribute = mesh.current.geometry.getAttribute("position");
    const positionArray = positionAttribute.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      let y = positionArray[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -2) y = Math.random() * 10 + 5;
      positionArray[i * 3 + 1] = y;
    }

    positionAttribute.needsUpdate = true;
  });

  const positions = useMemo(() => {
    const values = new Float32Array(particleCount * 3);

    particles.forEach((particle, index) => {
      values[index * 3] = particle.position[0];
      values[index * 3 + 1] = particle.position[1];
      values[index * 3 + 2] = particle.position[2];
    });

    return values;
  }, [particleCount, particles]);

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.05}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
