import { useLoader, useFrame } from "@react-three/fiber"
import { TextureLoader, DoubleSide } from "three"
import { TEXTURES } from "../../constans/textures"
import { useRef } from "react"

import vert from "./shaders/vert"
import frag from "./shaders/frag"
import { Uniform } from "../../interfaces/interfaces"

const Object = () =>{
    const meshRef = useRef<Uniform>(null!)

    const { CHESTBARSTER_URL } = TEXTURES
    const CHESTBARSTER_TEXTURE = useLoader(TextureLoader, CHESTBARSTER_URL)

    const uniforms = {
        u_time: { type: 'f', value: 1.0 },
        texture1: { type: "sampler2D", value: CHESTBARSTER_TEXTURE },  
        u_active: { value: false }
    }

    useFrame(({ clock }) => meshRef.current.material.uniforms.u_time.value = clock.getElapsedTime() / 2)
    
    return (
        <mesh
            position={[0, 0.5, 0]}
            ref={meshRef}
        >
            <planeGeometry args={[12, 8, 24, 6]} />
            <shaderMaterial 
              side={DoubleSide}
              uniforms={uniforms}
              vertexShader={vert}
              fragmentShader={frag}
              //wireframe={true}
            />
    </mesh>
    )
}

export default Object