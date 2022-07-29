import { Suspense } from "react"

import Alien from "../Alien/Alien"
import Egg from "../Egg/Egg"
import Loading from "../Loading/Loading"
import Queen from "../Queen/Queen"
import Text from '../Text/Text'
import './Aliens.css'

const Aliens = () =>{
    return (
        <Suspense fallback={<Loading />}>
            <div className="aliens">
                <Queen />
                <Text />
                <Egg />
                <Alien />
            </div>
        </Suspense>
    )
}

export default Aliens