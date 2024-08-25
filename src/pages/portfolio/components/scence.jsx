import { Canvas } from '@react-three/fiber'
import React from 'react'
import Model from './model'

export default function Scene({scrollProgress}) {
    return (
        <Canvas>
            <Model scrollProgress={scrollProgress}/>
        </Canvas>
    )
}