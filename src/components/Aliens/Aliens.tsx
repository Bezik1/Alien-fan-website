import { Suspense } from "react"
import Egg from "../Egg/Egg"
import Queen from "../Queen/Queen"
import Text from '../Text/Text'

const Aliens = () =>{
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <Queen />
            <Text />
            <Egg />
        </Suspense>
    )
}

export default Aliens