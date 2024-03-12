import React from "react";
import Slider from "../components/Slider";
import './home.css';

export default function HomePage(props){
    return(
        <div>
            <div className="box">
                <h1>Welcome to Timecrunch!</h1>
                <button className="button" onClick={props.onClick}> Start Game</button>
                <Slider handleSlider={props.handleSlider}/>
                <small className="smaller">Beta v0.9.4. Note: There will be many typos!</small>
            </div>
        </div>
    )
}