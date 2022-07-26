import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { useState, useEffect } from "react"
import { COLORS } from "../../constans/colors"
import Object from "./Object"
import './Queen.css'

const Queen = () =>{
    const [pos, setPos] = useState<[number, number]>([0, 0])
    const { DARK_BLUE } = COLORS

    const [scroll, setScroll] = useState(true)

    useEffect(() => {
        const onScroll = () => {
          const scrollCheck = window.scrollY < 1300
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        }
      
      // setting the event handler from web API
      document.addEventListener("scroll", onScroll)
      
      // cleaning up from the web API
       return () => {
         document.removeEventListener("scroll", onScroll)
        }
      }, [scroll, setScroll])

    return (
        <div className="queen" onMouseMove={e => setPos([e.clientX, e.clientY])}>
            <div className={scroll ?  "queen-canvas" : "queen-canvas-static"}>
                <Canvas>
                    <pointLight position={[2, 2, 2]} intensity={100} color={DARK_BLUE} />
                    <pointLight position={[-2, -2, -2]} intensity={100} color={DARK_BLUE} />
                    <pointLight position={[0, 2, -1]} intensity={100} color={DARK_BLUE} />
                    <pointLight position={[0, 0, 2]} intensity={100} color={DARK_BLUE} />
                    <ambientLight intensity={100} color={DARK_BLUE} />
                    <Object pos={pos[0] !== 0 && pos[1] !== 0 ? pos : [0, 0]} />
                    <OrbitControls />
                </Canvas>
            </div>
            <div className="queen-text">
                <h1 className="queen-header"> Alien Queen </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
        </div>
    )
}

export default Queen