import { useEffect, useState } from "react";
import Die from "../components/shut-the-box/Die";
import Flipper from "../components/shut-the-box/Flipper";

const ShutTheBox = () => {

    const [flippers, setFlippers] = useState([])
    const [dice, setDice] = useState([])
    const [lock, setLock] = useState(false)

    useEffect( () => initFlippers, [])

    const initFlippers = () => {
        const arr = []
        for(let i = 0 ; i < 9 ; i++){
            arr.push({
                id: i,
                number: i + 1,
                flipped: false,
                locked: false
            })
        } 
        setFlippers(arr)
    }

    const rollDice = () => {
        let dieOne = Math.floor(Math.random() * 6) + 1
        let dieTwo = Math.floor(Math.random() * 6) + 1
        let dice = [dieOne, dieTwo]
        setFlippers(prevState => {
            return prevState.map(flipper => {
                return flipper.flipped ? {...flipper, locked: true} : flipper
            })
        })
        setDice(dice)
    }

    const handleFlipperClick = (event) => {
        console.log("meh")

        if((event.target.innerText == dice[0] ||
           event.target.innerText == dice[1] ||
           event.target.innerText == dice[0] + dice[1]) &&
           !lock)
        {
            setLock(true)
            setFlippers(prevState => {
                return prevState.map(flipper => {
                    return flipper.id == event.target.id && !flipper.locked ? {...flipper, flipped: !flipper.flipped} : flipper
                })
            })
        }
        else if(lock){
            setFlippers(prevState => {
                return prevState.map(flipper => {
                    if(flipper.id == event.target.id && flipper.flipped && !flipper.locked){
                        setLock(false)
                        return {...flipper, flipped: false}
                    }
                    return flipper
                    //return flipper.id == event.target.id && flipper.flipped && !flipper.locked  ? {...flipper, flipped: false} : flipper
                })
            })
            
        }
    }

    //console.log(flippers)

    const flipperList = flippers.map((flipper, index) => {
        return(
            <Flipper id={flipper.id} handleClick={handleFlipperClick} key={index} number={flipper.number} flipped={flipper.flipped}/>
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
                <div className="dice-container" onClick={rollDice}>
                    <Die number={dice[0]} />
                    <Die number={dice[1]} />
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