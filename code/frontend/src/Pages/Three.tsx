import * as THREE from 'three'

import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from '@react-three/drei';

function Model() {
  const result = useLoader(GLTFLoader, 'scene.gltf')
  // You don't need to check for the presence of the result
  // the result is guaranteed to be present since useLoader suspends the component
  return <primitive object={result.scene} />
}


export default function Three() {
  return (
    <Canvas camera={{position:[0,0,2]}} >
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Suspense fallback={null }>
      <Model  />
    </Suspense>
    
    <OrbitControls  />
    </Canvas>
  )
}
