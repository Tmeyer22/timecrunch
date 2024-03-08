import React from "react";

export default function HomePage(props){
    return(
        <div>
            <h1>Welcome home!</h1>
            <button onClick={props.onClick}> Start Game</button>
        </div>
    )
}