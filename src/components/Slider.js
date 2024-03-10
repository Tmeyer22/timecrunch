import React from "react";
import Slider from '@mui/material/Slider';
import './Slider.css'

function valuetext(value) {
    return `${value}°C`;
}

export default function DateSlider(props){
    const [value, setValue] = React.useState([1776, 1952]);
    const minDistance = 25

    const handleChange = (event, newValue, activeThumb) => {
        props.handleSlider([newValue[0], newValue[1]])
        if (!Array.isArray(newValue)) {
            return;
          }
        if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], 2024 - minDistance);
            setValue([clamped, clamped + minDistance]);
        } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue([clamped - minDistance, clamped]);
        }
        } else {
        setValue(newValue);
        }
    };

    return(
        <div className="slider-box">
            <div className="labels">
                From: {value[0]}
            </div>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="off"
                getAriaValueText={valuetext}
                min={1450}
                max={2024}
                disableSwap
                sx={{
                    width:300,
                }}
            />
            <div className="labels">
                To: {value[1]}
            </div>
        </div>
    )
}