import { useState } from "react";
import Game from "./pages/game"
import HomePage from "./pages/home";


export default  function App() {
    const [started, Start] = useState(false)

    function handleClick(){
        console.log("fire")
        Start(!started)
    }

    return (
        <div>
            {started ? <Game restart={handleClick}/> : <HomePage onClick={handleClick}/>}
        </div>
    );
}
