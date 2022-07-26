import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { useFrame, useLoader } from "@react-three/fiber"
import { MODELS_URL } from "../../constans/enums"
import { MeshPhongMaterial } from "three"
import { COLORS } from "../../constans/colors"
import gsap from "gsap"

const Object = ({ pos } : { pos: number[] }) =>{
    const { QUEEN_URL } = MODELS_URL
    const { BLACK } = COLORS

    const OBJ = useLoader(OBJLoader, QUEEN_URL)

    OBJ.children.map((mesh: any)=>{
        return mesh.material = new MeshPhongMaterial({color: BLACK})
    })

    useFrame(() =>{
        gsap.to(OBJ.rotation, {
            x: (pos[1] - 600) / 1000,
            y: (pos[0] + 600) / 2000
        })
    })

    return (
        <primitive position={[-3, 0, 0]} scale={[2.75, 2.75, 2.75]} object={OBJ} />
    )
}

export default Object