'use client'

import { Context } from "app/provider";
import { Borsa } from "app/three/Borsa"
import ThreeScene from "app/three/Scene"
import { useContext } from "react";

export default function Product2() {
  const context = useContext(Context);

  return (
    <>
      <ThreeScene product={1}>
        <Borsa position={[0, 0, 0]} rotation={[0, 0, 0]} scale={4} coloreImpunture={context?.options.pickedColor ?? "#aabbcc"} maps={{color: "/Ripetute/COLOR.jpg", normal: "/Ripetute/NORMAL.jpg", roughness: "/Ripetute/ROUGHNESS.jpg"}}/>
      </ThreeScene>
    </>
  )
}
