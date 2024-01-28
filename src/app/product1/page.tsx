'use client'

import { Context } from "app/provider";
import { Borsa } from "app/three/Borsa"
import ThreeScene from "app/three/Scene"
import { useContext } from "react";

export default function Product1() {
  const context = useContext(Context);

  return (
    <>
      <ThreeScene product={0}>
        <Borsa position={[0, 0, 0]} rotation={[0, 0, 0]} scale={4} coloreImpunture={context?.options.pickedColor ?? "#aabbcc"} maps={{color: "/Piazzate/COLOR.png", normal: "/Piazzate/NORMAL.png", roughness: "/Piazzate/ROUGHNESS.png"}}/>
      </ThreeScene>
    </>
  )
}
