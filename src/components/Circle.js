import { useState } from 'react'
import './banner.css'

//The guess circle, built as a seperate component to make color easier but may be redundant and reworked
const Circle = props =>{
    const [className] = useState("circle");
    return(
        <div className={className + ' ' + props.status}></div>
    )
}

export default Circle