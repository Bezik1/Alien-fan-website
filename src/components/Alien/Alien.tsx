import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { COLORS } from '../../constans/colors'
import './Alien.css'
import Object from './Object'

const Alien = () =>{
    const { DARK_VIOLET } = COLORS

    return (
        <div className='alien'>
            <div className='alien-canvas'>
                <Canvas>
                    <pointLight position={[3, 2, 2]} intensity={100} color={DARK_VIOLET} />
                    <pointLight position={[-5, -2, -2]} intensity={100} color={DARK_VIOLET} />
                    <pointLight position={[-3, 5, 3]} intensity={100} color={DARK_VIOLET} />
                    <pointLight position={[-3, 0, -2]} intensity={100} color={DARK_VIOLET} />
                    <ambientLight />
                    <Object />
                    <OrbitControls target={[0, 0.75, -1.5]} />
                </Canvas>
            </div>
            <div className='alien-text'>
                <h1 className='alien-header'> Xenomorph </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                od tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
        </div>
    )
}

export default  Alien