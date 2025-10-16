"use client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {Points, PointMaterial, Preload} from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import * as THREE from "three";
import { JSX } from "react/jsx-dev-runtime";
import { inSphere } from "maath/random";
type StarsProps = JSX.IntrinsicElements["points"];
const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState<Float32Array>(() => {
  return random.inSphere(new Float32Array(5001), { radius: 1.2 }) as Float32Array;
});

  useFrame((state, delta) => {
    if(ref.current){
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
    
  });
  return (
    <group rotation={[0,0, Math.PI/4]}>
      <points ref={ref} frustumCulled {...props}>

      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[sphere,3]}
          count={sphere.length / 3}
          array={sphere}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </points>
    </group>
    
  );
};
const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
      >
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
