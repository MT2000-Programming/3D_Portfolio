"use client";
import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, Preload, useGLTF} from "@react-three/drei";
import CanvasLoader from "../Loader";
interface ComputersProps {
  isMobile: boolean;
}
const Computers = ({ isMobile }: ComputersProps) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1}/>
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={1024}/>
      <primitive object={computer.scene}
        scale={isMobile? 0.5: 0.75}
        position={isMobile? [0,-1.5,-1.5]: [0, -4, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        />
    </mesh>
    
      
  );
};

const ComputerCanvas = ()=>{
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };}, []);
  return(
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
    >
      <ambientLight intensity={1} />
      <directionalLight color="white" position={[0, 5, 0]} />
      <Suspense fallback={<CanvasLoader/>}> 
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={Math.PI/2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}
export default ComputerCanvas;

