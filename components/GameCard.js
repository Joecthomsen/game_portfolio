import Image from "next/image";

const GameCard = (props) => {
    return (
        <div className="game-card">
            <Image src={props.image} width={80} height={60}/>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
      );
}
 
export default GameCard;