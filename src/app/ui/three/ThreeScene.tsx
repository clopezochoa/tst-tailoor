'use client'

import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Environment, GizmoHelper, GizmoViewport, OrbitControls, PivotControls, Plane } from '@react-three/drei'
import { Borsa } from 'app/three/Borsa';
import { HexColorPicker } from 'react-colorful';

const resizeCanvas = (element: HTMLCanvasElement) => {
  element.style.width = innerWidth.toString() + "px";
  element.style.height = innerHeight + "px";
};

const ThreeScene: React.FC = () => {
  const [color, setColor] = useState("#aabbcc");

  const canvas = useRef(null!)

  addEventListener("resize", () => {
    resizeCanvas(canvas.current)
  });
  useEffect(() => {
    resizeCanvas(canvas.current)
  }, [])


  return <>
    <div style={{height:"48px", padding:'1.25rem', position:'fixed', zIndex:'1'}}>
      <h1 style={{marginBottom:"1rem", fontFamily:'sans-serif', fontSize:'12pt'}}>Seleziona il colore delle impunture</h1>
      <HexColorPicker color={color} onChange={setColor}/>
    </div>

    <Canvas style={{position:'fixed', zIndex:'0'}} ref={canvas} shadows>
      <Environment files="/background.hdr"/>
      <PivotControls activeAxes={[true, true, true]} depthTest={false} anchor={[0, 0, 0]} scale={0.75}>
      </PivotControls>
        <Borsa position={[0, 0, 0]} rotation={[0, 0, 0]} scale={4} coloreImpunture={color}/>
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
      <OrbitControls makeDefault />
    </Canvas>
  </>;
}

export default ThreeScene