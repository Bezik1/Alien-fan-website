import { useLoader } from "@react-three/fiber"
import gsap from "gsap"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { MODELS_URL } from "../../constans/enums"

const Scene = ({ pos } : { pos: number[]}) =>{
    const { ROOM_URL } = MODELS_URL
    const gltf = useLoader(GLTFLoader, ROOM_URL)

    gsap.to(gltf.scene.rotation, {
        x: (pos[1] - 250) / 1000,
        y: (pos[0] - 500) / 1000
    })

    return <primitive scale={[0.05, 0.05, 0.05]} position={[0, 0, -5]} object={gltf.scene} />
}

export default Scene