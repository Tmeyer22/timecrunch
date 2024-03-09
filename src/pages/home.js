import React from "react";
import Slider from "../components/Slider";
import './home.css';

export default function HomePage(props){
    return(
        <div>
            <div className="box">
                <h1>Apush Timeline Game!</h1>
                <button className="button" onClick={props.onClick}> Start Game</button>
                <Slider handleSlider={props.handleSlider}/>
            </div>
        </div>
    )
}