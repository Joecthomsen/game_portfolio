import Image from "next/image";
import styles from '../styles/Home.module.css'
import Router from "next/router";

const GameCard = (props) => {

    //console.log(props)

    const handleClick = () => {
        Router.push(props.link)
    }

    return (
        <div onClick={handleClick} className="game-card">
            <Image src={props.image} width={80} height={60}/>
            <div className={styles.container}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
      );
}
 
export default GameCard;