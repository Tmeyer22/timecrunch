import React from "react";
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import './Slider.css'

function valuetext(value) {
    return `${value}°C`;
}

export default function DateSlider(props){
    const [value, setValue] = React.useState([1600, 1900]);
    const minDistance = 25;
    const min = 1450;
    const max = 2024;

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

    const handleInputChange = (event, id) =>{
        let temp = value
        temp[id] = (event.target.value === '' ? (id ? max : min) : Number(event.target.value));
        setValue(temp)
    }

    const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > 100) {
          setValue(100);
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
                min={min}
                max={max}
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