'use client'

import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'
import { Environment, GizmoHelper, GizmoViewport, OrbitControls, PivotControls, Plane } from '@react-three/drei'
import { Borsa } from 'app/three/Borsa';


const resizeCanvas = (element: HTMLCanvasElement) => {
  element.style.width = innerWidth.toString() + "px";
  element.style.height = innerHeight + "px";
};

const ThreeScene: React.FC = () => {
  const canvas = useRef(null!)

  addEventListener("resize", () => {
    resizeCanvas(canvas.current)
  });
  useEffect(() => {
    resizeCanvas(canvas.current)
  }, [])

  return <>
    <Canvas ref={canvas} shadows>
      <Environment files="/background.hdr"/>
      <PivotControls activeAxes={[true, true, true]} depthTest={false} anchor={[0, 0, 0]} scale={0.75}>
        <Borsa position={[0, 0, 0]} rotation={[0, 0, 0]} scale={4} />
      </PivotControls>
      <Plane scale={10} position={[0,0,0]} rotation={[-Math.PI/2, 0, 0]}/>
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
      <OrbitControls makeDefault />
    </Canvas>
  </>;
}

export default ThreeScene