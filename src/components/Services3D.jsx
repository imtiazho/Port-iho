import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function VisorObject() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.4;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      meshRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
      <group ref={meshRef} scale={1.2}>
        {/* Main Visor / Helmet Geometry */}
        <mesh>
          <torusKnotGeometry args={[1, 0.35, 128, 32]} />
          <meshStandardMaterial
            color="#111111"
            roughness={0.2}
            metalness={0.95}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Accent Inner Ring */}
        <mesh scale={0.75}>
          <octahedronGeometry args={[1.1, 2]} />
          <meshStandardMaterial
            color="#FF5035"
            roughness={0.3}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Services3D() {
  return (
    <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color="#D6C8B0" />
        <pointLight position={[-5, -5, -2]} intensity={1} color="#FF5035" />
        <VisorObject />
      </Canvas>
    </div>
  );
}
