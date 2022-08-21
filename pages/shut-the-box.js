import { useEffect, useState } from "react";
import Confetti from "../components/Confetti";
import Die from "../components/shut-the-box/Die";
import Flipper from "../components/shut-the-box/Flipper";

const ShutTheBox = () => {

    const [flippers, setFlippers] = useState([])
    const [dice, setDice] = useState([])
    const [lock, setLock] = useState(false)
    const [lost, setLost] = useState(false)
    const [won, setWon] = useState()

    useEffect( () => initFlippers, [])

    const initFlippers = () => {
        setWon(false)
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
        if(lost){
            rollDice()
            setLost(false)
        }
        if(won){
            rollDice()
            setWon(false)
            setLost(false)
        }
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
        console.log("from func " + dice)
        setDice(dice)
        setLock(false)
        checkForLoseCondition(dice)
    }

    const handleFlipperClick = (event) => {
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
            checkForWinCondition()
        }
        else if(lock){
            setFlippers(prevState => {
                return prevState.map(flipper => {
                    if(flipper.id == event.target.id && flipper.flipped && !flipper.locked){
                        setLock(false)
                        return {...flipper, flipped: false}
                    }
                    return flipper
                })
            })
        }
    }

    const checkForLoseCondition = (theDice) => {
        setLost(true)
        if(theDice.length == 0){return}
        flippers.forEach(flipper => {
            if(!flipper.flipped && (flipper.number === theDice[0] || flipper.number === theDice[1] || flipper.number === theDice[0] + theDice[1])){
                setLost(false)
            }
        })
    }

    const checkForWinCondition = () => {
        let counter = 0
        flippers.forEach(flipper => {
            if(flipper.flipped == true){
                counter += 1;
            }
        })
        if(counter === 8){
            setWon(true)
        }
    }

    const flipperList = flippers.map((flipper, index) => {
        return(
            <Flipper id={flipper.id} handleClick={handleFlipperClick} key={index} number={flipper.number} flipped={flipper.flipped}/>
        )
    })

    if(lost){
        return(
            <div className="shut-box">
                <div className="lose-container">
                    <h1>You lose!!</h1>
                    <h2>Press dice to play again</h2>
                </div>
                
                <div className="dice-container" onClick={initFlippers}>
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

    else if(won){
        return (
            <div className="shut-box">
                <Confetti />
                <h1>You won!</h1>
                <h2>Press dice to play again</h2>
                <div className="dice-container" onClick={initFlippers}>
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

    else if(flipperList.length === 0){
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