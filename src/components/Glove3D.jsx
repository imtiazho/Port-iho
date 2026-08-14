import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function GloveMesh() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Continuous 360° rotation (approx 10-12s per revolution)
      groupRef.current.rotation.y += delta * 0.5;

      // Mouse influence
      const mouseX = state.pointer.x * 0.3;
      const mouseY = state.pointer.y * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1 + mouseY * 0.2;
      groupRef.current.rotation.z = mouseX * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} scale={1.8}>
        {/* Dark Metallic Textured Sphere / Globe Glove */}
        <mesh>
          <sphereGeometry args={[1.2, 64, 64]} />
          <meshStandardMaterial
            color="#0b0b0b"
            roughness={0.35}
            metalness={0.85}
            wireframe={false}
          />
        </mesh>

        {/* Orbiting Tech Ring Grid representing global design system */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#FF5035"
            emissive="#FF5035"
            emissiveIntensity={0.3}
            roughness={0.1}
          />
        </mesh>

        {/* Outer Tech Latitude Mesh */}
        <mesh>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshStandardMaterial
            color="#D6C8B0"
            wireframe={true}
            opacity={0.12}
            transparent={true}
          />
        </mesh>
      </group>
    </Float>
  );
}

export default function Glove3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60 flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#D6C8B0" />
        <directionalLight position={[-10, -5, -5]} intensity={0.6} color="#FF5035" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#ffffff" />
        <GloveMesh />
      </Canvas>
    </div>
  );
}
