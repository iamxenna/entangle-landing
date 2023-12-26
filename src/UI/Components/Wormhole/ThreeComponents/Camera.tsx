import React, { FC, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";

interface CameraProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export const Camera: FC<CameraProps> = ({ canvasRef }) => {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useThree(({ camera }) => {
    // camera.rotation.x = -5.6;
    // camera.position.y = -1;
    camera.position.z = 0.3;
  });

  useFrame(({ camera }) => {
    const scrollPercent = window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight);
    // if (scrollPercent > 0 && scrollPercent < 0.1) {
    //   console.log(-5.5 - scrollPercent * 10.5);
    //   camera.rotation.x = -5.5 - scrollPercent * 8.5;
    //   camera.position.y = -5 + scrollPercent * 50;
    //   camera.position.z = 5 - scrollPercent * 58;
    //   camera.rotation.z = 0;
    // }
    // if (scrollPercent > 0.1) {
    camera.position.z = scrollPercent * -9.8;
    camera.rotation.z = scrollPercent * -1.5;
    // }
  });

  return (
    <perspectiveCamera
      ref={cameraRef}
      position={new Vector3(0, 0, 0)}
      fov={75}
      aspect={canvasRef.current?.clientWidth / canvasRef.current?.clientHeight}
      near={0.1}
      far={1000}
    />
  );
};
