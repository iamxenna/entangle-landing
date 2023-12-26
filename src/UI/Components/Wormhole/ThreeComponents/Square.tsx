import * as THREE from "three";
import { FC, useMemo } from "react";

interface SquareProps {
  idx: number;
}

export const Square: FC<SquareProps> = ({ idx }) => {
  const position = useMemo(() => {
    return idx / 10 + 2;
  }, [idx]);

  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(1, 1, 0),
    new THREE.Vector3(-1, 1, 0),
    new THREE.Vector3(-1, -1, 0),
    new THREE.Vector3(1, -1, 0),
    new THREE.Vector3(1, 1, 0),
  ]);

  const material = new THREE.LineBasicMaterial({
    color: 0x311c47,
    linewidth: 0.1,
    linecap: "round",
    linejoin: "round",
  });

  const mainMesh = new THREE.Line(geometry, material);

  return (
    <mesh rotation={new THREE.Euler(0, 0, -position)} position={new THREE.Vector3(0, 0, -position)}>
      <primitive object={mainMesh} />
    </mesh>
  );
};
