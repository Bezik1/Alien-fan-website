import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading'
import './Home.css'
import Scene from './Scene'

const Home = () =>{
    const [pos, setPos] = useState<number[]>([0, 0])

    return (
        <Suspense fallback={<Loading />}>
            <div className="home" onPointerMove={e => setPos([e.clientX, e.clientY])}>
                <Canvas>
                    <ambientLight />
                    <Scene pos={pos ? pos : [0, 0]} />
                </Canvas>
                <Link to='/' className='alien-link'> Aliens </Link>
                <Link to='/info' className='info-link'> Info </Link>
            </div>
        </Suspense>
    )
}

export default Home