import { useGLTF } from "@react-three/drei";
import type { ThreeElements } from "@react-three/fiber";
import type * as THREE from "three";
import type { GLTF } from "three-stdlib";

const MODEL_PATH = "/models/computer-optimized-transformed.glb";

type ComputerNodeName =
  | "Cube000_ComputerDesk_0001_1"
  | "Cube000_ComputerDesk_0001_2";

type ComputerGLTF = GLTF & {
  nodes: Record<ComputerNodeName, THREE.Mesh>;
  materials: {
    "ComputerDesk.001": THREE.MeshStandardMaterial;
    "FloppyDisk.001": THREE.MeshStandardMaterial;
  };
};

type ComputerProps = ThreeElements["group"];

export function Computer(props: ComputerProps) {
  const { nodes, materials } = useGLTF(MODEL_PATH) as unknown as ComputerGLTF;

  return (
    <group {...props} dispose={null}>
      <group position={[-4.005, 67.549, 58.539]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_1.geometry}
          material={materials["ComputerDesk.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube000_ComputerDesk_0001_2.geometry}
          material={materials["FloppyDisk.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload(MODEL_PATH);

export default Computer;
