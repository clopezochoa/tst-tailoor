'use client'

import { Canvas } from '@react-three/fiber'
import React, { useContext } from 'react'
import { Environment, GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import { Borsa } from 'app/three/Borsa';
import { Context } from 'app/provider';
import SidePanel from 'app/ui/sidePanel/sidePanel';

const ThreeScene = ({
  children,
  product
}: {
  children: React.ReactNode,
  product: number
}) => {
  const context = useContext(Context);
  return <>
    <SidePanel page={product} />
    <Canvas style={{position:'fixed', zIndex:'0'}} shadows>
      <Environment files={context?.options.hdri}/>
      {children}
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport labelColor="white" axisHeadScale={1} />
      </GizmoHelper>
      <OrbitControls makeDefault />
    </Canvas>
  </>;
}

export default ThreeScene