import { useLoader } from "@react-three/fiber"
import { MeshPhysicalMaterial } from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { COLORS } from "../../constans/colors"
import { MODELS_URL } from "../../constans/enums"

const Object = () =>{
    const { DARK_VIOLET } = COLORS
    const { ALIEN_URL } = MODELS_URL
    const OBJ = useLoader(OBJLoader, ALIEN_URL)

    OBJ.children.map((mesh: any) =>{
        return mesh.material = new MeshPhysicalMaterial({
            color: DARK_VIOLET,
            roughness: 0.01,
            transmission: 0.2,
        })
    })

    return <primitive object={OBJ} position={[0, 0.75, -1.5]} />
}

export default Object