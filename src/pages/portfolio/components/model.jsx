import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture, useAspect } from '@react-three/drei';
import * as THREE from 'three';

export default function Model() {
    const image = useRef();
    const texture = useTexture("/images/Portfolio.png");
    const { width, height } = texture.image;
    const { viewport } = useThree();
    const scale = useAspect(width, height, 0.5);

    const amplitude = 0.25;
    const waveLength = 5;

    const uniforms = useRef({
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uWaveLength: { value: waveLength },
        uTexture: { value: texture },
        vUvScale: { value: new THREE.Vector2(0, 0) },
    });

    useFrame(() => {
        const scaleX = scale[0];
        const scaleY = scale[1];
        image.current.scale.x = scaleX;
        image.current.scale.y = scaleY;

        const scaleRatio = scaleX / scaleY;
        const aspectRatio = width / height;

        image.current.material.uniforms.vUvScale.value.set(1, aspectRatio / scaleRatio);

        image.current.material.uniforms.uTime.value += 0.04;
        image.current.material.uniforms.uAmplitude.value = amplitude;
        image.current.material.uniforms.uWaveLength.value = waveLength;
    });

    return (
        <mesh ref={image} scale={scale}>
            <planeGeometry args={[1, 1, 15, 15]} />
            <shaderMaterial
                wireframe={false}
                fragmentShader={fragmentShader}
                vertexShader={vertexShader}
                uniforms={uniforms.current}
            />
        </mesh>
    );
}

const vertexShader = `
varying vec2 vUv;
uniform float uTime;
uniform float uAmplitude;
uniform float uWaveLength;
void main() {
    vUv = uv;
    vec3 newPosition = position;

    float wave = uAmplitude * sin(position.x * uWaveLength + uTime);
    newPosition.z = position.z + wave; 

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`

const fragmentShader = `
uniform sampler2D uTexture;
uniform vec2 vUvScale;
varying vec2 vUv;
void main() {
    vec2 uv = (vUv - 0.5) * vUvScale + 0.5;
    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;  
}
`
