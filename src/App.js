import { useState } from "react";
import Game from "./pages/game"
import HomePage from "./pages/home";


export default  function App() {
    const [started, Start] = useState(false)
    const [yearRange, setRange] = useState([1776, 1945])

    function handleClick(){
        Start(!started)
    }

    function passSlider(value){
        setRange(value)
    }

    return (
        <div>
            { started ?
                <Game
                restart={handleClick}
                range={yearRange}
                /> 
            : 
                <HomePage
                onClick={handleClick}
                handleSlider={passSlider}
                />
                }
        </div>
    );
}
