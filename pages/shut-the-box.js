import { useEffect, useState } from "react";
import Die from "../components/shut-the-box/Die";
import Flipper from "../components/shut-the-box/Flipper";

const ShutTheBox = () => {

    const [flippers, setFlippers] = useState([])
    const [dice, setDice] = useState([])

    useEffect( () => initFlippers, [])

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

    const rollDice = () => {
        let dieOne = Math.floor(Math.random() * 6) + 1
        let dieTwo = Math.floor(Math.random() * 6) + 1
        let dice = [dieOne, dieTwo]
        setDice(dice)
        console.log(dice)
    }

    const flipperList = flippers.map((flipper, index) => {
        return(
            <Flipper key={index} number={flipper.number} flipped={flipper.flipped}/>
        )
    })

    if(flipperList.length === 0){
        return(
            <div>
                Loading...
            </div>
        )
    }
    else if(flipperList.length > 0 && dice.length === 0){
        return (
            <div className="shut-box">
                <button onClick={rollDice} className="starte-game-button">Start new game</button>
                <div className="flippers-container">
                    <div className="flippers">
                        {flipperList}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="shut-box">
                <div className="dice-container">
                    <Die number={1} />
                    <Die number={2} />
                </div>
                <div className="flippers-container">
                    <div className="flippers">
                        {flipperList}
                    </div>
                </div>
            </div>
        )
    }
    
}
 
export default ShutTheBox;