import { useState } from 'react'
import './banner.css'

const Circle = props =>{
    const [className] = useState("circle");
    

    return(
        <div className={className + ' ' + props.status}></div>
    )
}

export default Circle