import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { useFrame, useLoader } from "@react-three/fiber"
import { MODELS_URL } from "../../constans/enums"
import { MeshPhongMaterial } from "three"
import { COLORS } from "../../constans/colors"
import gsap from "gsap"

const Object = ({ pos } : { pos: number[] }) =>{
    const { QUEEN_URL } = MODELS_URL
    const { DARK_VIOLET } = COLORS

    const OBJ = useLoader(OBJLoader, QUEEN_URL)

    OBJ.children.map((mesh: any)=>{
        return mesh.material = new MeshPhongMaterial({color: DARK_VIOLET})
    })

    useFrame(() =>{
        gsap.to(OBJ.rotation, {
            x: (pos[1] - 900) / 1000,
            y: (pos[0] + 600) / 2000,
            z: 0.15
        })
    })

    return (
        <primitive position={[-3, 0.25, 0]} scale={[2.75, 2.75, 2.75]} object={OBJ} />
    )
}

export default Object