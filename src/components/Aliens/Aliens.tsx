import { Suspense } from "react"
import Alien from "../Alien/Alien"
import Chestbarster from "../Chestbarster/Chestbarster"
import Egg from "../Egg/Egg"
import Loading from "../Loading/Loading"
import Queen from "../Queen/Queen"
import Text from '../Text/Text'

const Aliens = () =>{
    return (
        <Suspense fallback={<Loading />}>
            <Queen />
            <Text />
            <Egg />
            <Chestbarster />
            <Alien />
        </Suspense>
    )
}

export default Aliens