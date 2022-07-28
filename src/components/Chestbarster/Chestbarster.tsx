import { Canvas } from '@react-three/fiber'
import Object from './Object'
import './Chestbarster.css'

const Chestbarster = () =>{
    return (
        <div className="chestbarster">
            <div className='chestbarster-text'>
                Chestbarster
            </div>
            <div className='chestbarster-canvas'>
                <Canvas>
                    <ambientLight />
                    <Object />
                </Canvas>
            </div>
        </div>
    )
}

export default Chestbarster