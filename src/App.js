import { useState } from "react";
import Game from "./pages/game"
import HomePage from "./pages/home";

// let gamesPlayed = 0

export default  function App() {
    const [started, Start] = useState(false)
    const [yearRange, setRange] = useState([1776, 1945])
    const [games] = useState([])

    //console.log(gamesPlayed)
    //Toggle between home and game page

    function handleClick(){
        Start(!started)
    }
   
    console.log(games)
    
    function setGames(lastGame){
        lastGame.pop()
        games.unshift(lastGame)
        if (games.length > 5){
            games.pop()
        }
    }
    //Pass year range to game page
    function passSlider(value){
        setRange(value)
    }
    return (
        <div>
            { started ?
                <Game
                restart={handleClick}
                range={yearRange}
                setGames={setGames}
                playedGames={games}
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
