'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const NODE_COUNT = 90
const MAX_DIST = 2.8
const SPREAD_X = 22
const SPREAD_Y = 14
const SPREAD_Z = 8

type Vec3 = [number, number, number]

function generateField(): { nodes: Vec3[]; positions: Float32Array; linePositions: Float32Array } {
  const nodes: Vec3[] = []
  const positions = new Float32Array(NODE_COUNT * 3)

  for (let i = 0; i < NODE_COUNT; i++) {
    const x = (Math.random() - 0.5) * SPREAD_X
    const y = (Math.random() - 0.5) * SPREAD_Y
    const z = (Math.random() - 0.5) * SPREAD_Z
    nodes.push([x, y, z])
    positions[i * 3] = x
    positions[i * 3 + 1] = y
    positions[i * 3 + 2] = z
  }

  const lines: number[] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i][0] - nodes[j][0]
      const dy = nodes[i][1] - nodes[j][1]
      const dz = nodes[i][2] - nodes[j][2]
      if (Math.sqrt(dx * dx + dy * dy + dz * dz) < MAX_DIST) {
        lines.push(...nodes[i], ...nodes[j])
      }
    }
  }

  return { nodes, positions, linePositions: new Float32Array(lines) }
}

function Field() {
  const groupRef = useRef<THREE.Group>(null)
  const { positions, linePositions } = useMemo(() => generateField(), [])

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    const t = clock.getElapsedTime()
    groupRef.current.rotation.y = t * 0.018
    groupRef.current.rotation.x = Math.sin(t * 0.009) * 0.08
  })

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial color="#FAFAFA" size={0.09} transparent opacity={0.9} depthWrite={false} />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#FAFAFA" transparent opacity={0.35} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

export default function NeuralField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 58 }}
      gl={{ alpha: true, antialias: false }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Field />
    </Canvas>
  )
}
