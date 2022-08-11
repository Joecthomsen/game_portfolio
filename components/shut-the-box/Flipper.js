const Flipper = (props) => {
    const styles = {
        backgroundColor: props.flipped ? "#57a8cc" : "",
        color: props.flipped ? "white" : "",
        border: props.flipped ? "white solid 2px" : ""
    }
    return (
        <div id={props.id} onClick={props.handleClick} className="flipper" style={styles}>
            <h1>
                {props.number}
            </h1>
        </div>
    );
}
 
export default Flipper;