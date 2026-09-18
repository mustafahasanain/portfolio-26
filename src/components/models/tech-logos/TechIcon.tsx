"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls, useGLTF } from "@react-three/drei";

interface TechIconModel {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}

interface TechIconProps {
  model: TechIconModel;
}

const TechIconModel = ({ model }: { model: TechIconModel }) => {
  const { scene } = useGLTF(model.modelPath);

  return (
    <Center>
      <primitive
        object={scene}
        scale={model.scale}
        rotation={model.rotation}
      />
    </Center>
  );
};

const TechIcon = ({ model }: TechIconProps) => {
  return (
    <Canvas className="tech-icon-canvas">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <TechIconModel model={model} />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={3}
      />
    </Canvas>
  );
};

export default TechIcon;
