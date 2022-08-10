import { useEffect, useState } from "react";
import Flipper from "../components/shut-the-box/Flipper";

const ShutTheBox = () => {

    const [flippers, setFlippers] = useState([])
    const [dice, setDice] = useState([])

    const initFlippers = () => {
        const arr = []
        for(let i = 0 ; i < 9 ; i++){
            arr.push({
                number: i + 1,
                flipped: false
            })
        } 
        setFlippers(arr)
    }

    useEffect( () => initFlippers, [])
    
    const flipperList = flippers.map((flipper, index) => {
        return(
            <Flipper key={index} number={flipper.number} flipped={flipper.flipped}/>
        )
    })

    return (

        flipperList.length > 0 
        ?
            <div>
                <div className="flippers">
                    {flipperList}
                </div>
            </div>
        :
            <div>
                Loading...
            </div>
    );
}
 
export default ShutTheBox;