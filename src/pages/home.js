import React from "react";
import './home.css'

export default function HomePage(props){
    return(
        <div>
            <div className="box">
                <h1>Apush Timeline Game!</h1>
                <p>Select date range.(Coming soon)</p>
                <button onClick={props.onClick}> Start Game</button>
            </div>
        </div>
    )
}