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
            x: (pos[1] - 600) / 800,
            y: (pos[0] - 400) / 1000
        })
    })

    return (
        <primitive scale={[2, 2, 2]} object={OBJ} />
    )
}

export default Object