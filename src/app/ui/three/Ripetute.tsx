'use client'

import { Canvas } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Environment, GizmoHelper, GizmoViewport, OrbitControls, PivotControls } from '@react-three/drei'
import { Borsa } from 'app/three/Borsa';
import { HexColorPicker } from 'react-colorful';
import Link from 'next/link';

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
      <div style={{marginTop:"1rem", fontFamily:'sans-serif', fontSize:'12pt', display:'grid', width:'77%'}}>
        <input
          style={{marginBottom:'0.5rem'}}
          type="text"
          name="colorHex"
          id="colorHex-input"
          placeholder="#aabbcc"
          aria-describedby="helpId"
          onChange={(e) => {
            setColor(e.target.value)
          }}
        />
        <select
          id="presetColor-input"
          defaultValue={""}
          onChange={(e) => {setColor(e.target.value)}}
          aria-label="Default select example"
          >
          <option value="#aabbcc">Colore 0</option>
          <option value="#970c08">Colore 1</option>
          <option value="#d4ab16">Colore 2</option>
          <option value="#000000">Colore 3</option>
          <option value="#cccccc">Colore 4</option>
        </select>
      </div>
      <div style={{marginTop:"1rem", fontFamily:'sans-serif', fontSize:'12pt', display:'grid', width:'77%'}}>
        <Link style={{marginTop:"0.5rem", textDecoration:'none'}} href='/'>Indietro</Link>
        <Link style={{marginTop:"0.5rem", textDecoration:'none'}} href='/product1'>Cambia prodotto</Link>
      </div>
    </div>

    <Canvas style={{position:'fixed', zIndex:'0'}} ref={canvas} shadows>
      <Environment files="/background.hdr"/>
      <PivotControls activeAxes={[true, true, true]} depthTest={false} anchor={[0, 0, 0]} scale={0.75}>
      </PivotControls>
      <Borsa position={[0, 0, 0]} rotation={[0, 0, 0]} scale={4} coloreImpunture={color} maps={{color: "/Ripetute/COLOR.jpg", normal: "/Ripetute/NORMAL.jpg", roughness: "/Ripetute/ROUGHNESS.jpg"}}/>
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
      <OrbitControls makeDefault />
    </Canvas>
  </>;
}

export default ThreeScene