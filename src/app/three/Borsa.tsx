import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Maps } from 'app/lib/types'

type GLTFResult = GLTF & {
  nodes: {
    Tessuto: THREE.Mesh
    Metal: THREE.Mesh
    Impunture: THREE.Mesh
  }
  materials: {}
}

export function Borsa(props: JSX.IntrinsicElements['group'] & { coloreImpunture: string } & { maps: Maps}) {
  const textureLoader = new THREE.TextureLoader();

  const colorMap = textureLoader.load(props.maps.color);
  colorMap.flipY = false;
  colorMap.colorSpace = THREE.SRGBColorSpace;
  
  const normalMap = textureLoader.load(props.maps.normal);
  normalMap.flipY = false;
  
  const roughMap = textureLoader.load(props.maps.roughness);
  roughMap.colorSpace = THREE.LinearSRGBColorSpace;
  roughMap.flipY = false;

  const { nodes, materials } = useGLTF('/Borsa.gltf') as GLTFResult
  nodes.Metal.material = new THREE.MeshPhysicalMaterial({color:"#b7b3b3", roughness:0.3, metalness: 1, ior:1.5, reflectivity:1})
  nodes.Impunture.material = new THREE.MeshPhysicalMaterial({color: props.coloreImpunture, roughness:0.5, metalness: 0, ior:1.5, reflectivity:1})
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Tessuto.geometry} material={nodes.Tessuto.material}>
        <meshStandardMaterial map={colorMap} normalMap={normalMap} roughnessMap={roughMap} normalMapType={0} roughness={1} metalness={0}/>
      </mesh>
      <mesh geometry={nodes.Metal.geometry} material={nodes.Metal.material} />
      <mesh geometry={nodes.Impunture.geometry} material={nodes.Impunture.material} />
    </group>
  )
}

useGLTF.preload('/Borsa.gltf')
