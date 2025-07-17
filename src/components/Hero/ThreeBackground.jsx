import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = () => {
  const ref = useRef();
  const count = 5000;

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 20;
    ref.current.rotation.y += delta / 25;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const ThreeBackground = () => {
  return (
    <div className="three-canvas">
        <Canvas camera={{ position: [0, 0, 1] }}>
            <Particles />
        </Canvas>
    </div>
  );
};

export default ThreeBackground;
