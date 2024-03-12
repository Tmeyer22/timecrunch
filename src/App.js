import { useState } from "react";
import Game from "./pages/game"
import HomePage from "./pages/home";

// let gamesPlayed = 0

export default  function App() {
    const [started, Start] = useState(false)
    const [yearRange, setRange] = useState([1600, 1900])
    const [games] = useState([])

    // console.log(yearRange)

    //Toggle between home and game page
    function handleClick(){
        Start(!started)
    }
    
    //Add the last game to the tracked array
    function setGames(lastGame, range){
        lastGame.pop()
        let holder = {
            game: lastGame,
            rights: lastGame.filter((x) => x === "correct").length,
            dates: range,
        };
        games.unshift(holder)
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
                range={yearRange}
                />
                }
        </div>
    );
}
