import { Canvas } from "@react-three/fiber"
import Object from "./Object"
import { useState, useEffect } from "react"

import './Egg.css'
import { COLORS } from "../../constans/colors"

const Egg = () =>{
    const { DARK_BLUE } = COLORS
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const onScroll = () => {
          const scrollCheck = window.scrollY > 4000 
          const scrollCheck2 = window.scrollY > 3400 && window.scrollY < 4000
          if (scrollCheck2 !== scroll) {
            setScroll(scrollCheck2)
          } else if(scrollCheck) {
            setScroll(!scrollCheck)
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
        <div className="egg">
            <div className={scroll ? "egg-canvas" : "egg-canvas-static"}>
                <Canvas>
                    <ambientLight />
                    <pointLight position={[-1, 2, 2]} intensity={10} color={DARK_BLUE} />
                    <pointLight position={[-5, -2, -2]} intensity={10} color={DARK_BLUE} />
                    <pointLight position={[-3, 1, 3]} intensity={10} color={DARK_BLUE} />
                    <pointLight position={[-3, 0, 2]} intensity={10} color={DARK_BLUE} />
                    <Object />
                </Canvas>
            </div>
            <div className="egg-text">
                <h1 className="egg-header">  Xenomorph Egg </h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
        </div>
    )
}

export default Egg