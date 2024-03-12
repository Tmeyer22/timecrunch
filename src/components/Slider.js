import React from "react";
import Slider from '@mui/material/Slider';
import './Slider.css'

//Year range slider to set game events list
export default function DateSlider(props){
    const [value, setValue] = React.useState(props.range);
    const minDistance = 25;
    const min = 1450;
    const max = 2024;

    //Update the slider values, clamped at least 25 between ends and prevents flipping, rom material-ui.
    const handleChange = (event, newValue, activeThumb) => {
        props.handleSlider([newValue[0], newValue[1]])
        if (!Array.isArray(newValue)) {
            return;
          }
        if (newValue[1] - newValue[0] < minDistance) {
        if (activeThumb === 0) {
            const clamped = Math.min(newValue[0], max - minDistance);
            setValue([clamped, clamped + minDistance]);
        } else {
            const clamped = Math.max(newValue[1], minDistance);
            setValue([clamped - minDistance, clamped]);
        }
        } else {
        setValue(newValue);
        }
    };

    //Value displays moved off of thumbs for readability
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