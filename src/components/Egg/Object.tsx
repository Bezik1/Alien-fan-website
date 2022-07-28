import { useLoader, useThree } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { COLORS } from "../../constans/colors"
import { MODELS_URL } from "../../constans/enums"
import { MeshPhysicalMaterial, Vector3 } from "three"

const Object = () =>{
    const { DARK_VIOLET } = COLORS
    const { EGG_URL } = MODELS_URL
    const OBJ = useLoader(OBJLoader, EGG_URL)

    OBJ.children.map((mesh: any)=>{
        return mesh.material = new MeshPhysicalMaterial({
            color: DARK_VIOLET,
            roughness: 0.01,
            transmission: 0.2,
        })
    })

    const { camera } = useThree()
    
    camera.lookAt(new Vector3(0, -30, -10))

    return (
        <primitive scale={[0.05, 0.05, 0.05]} position={[25, -30, -15]} object={OBJ} />
    )
}

export default Object