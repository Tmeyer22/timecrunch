import Circle from "./Circle";
import './banner.css';

//Score banner at the top of the page
const Banner = props => {
    return(
        <div className='banner'>
            <div>{props.number} of 8</div>          {/*Position text display*/}
            <div className="circle-contanier">      {/*Row of colored circles showing right or wrong guesses*/}
                <Circle status={props.guess[0]}/>   {/*Guess display circle, color based on css class from string array*/}
                <Circle status={props.guess[1]}/>
                <Circle status={props.guess[2]}/>
                <Circle status={props.guess[3]}/>
                <Circle status={props.guess[4]}/>
                <Circle status={props.guess[5]}/>
                <Circle status={props.guess[6]}/>
                <Circle status={props.guess[7]}/>
            </div>
            <div>{props.range[0]} - {props.range[1]}</div>
        </div>
    )
}

export default Banner