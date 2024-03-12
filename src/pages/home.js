import React from "react";
import Slider from "../components/Slider";
import './home.css';

//Created home page, added for router. May remove/rework
export default function HomePage(props){
    return(
        <div>
            <div className="box">
                <h1>Welcome to Timecrunch!</h1>
                <button className="button" onClick={props.onClick}> Start Game</button>
                <Slider handleSlider={props.handleSlider} range={props.range}/>
                <small className="smaller"> v1.1.0. Note: There will be many typos!</small>
            </div>
        </div>
    )
}