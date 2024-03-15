import { useState } from 'react';
import { Reorder } from 'framer-motion';
import './card.css';

//Card Component, displays a single event and can be moved
const Card = props => {
    //Create states for buttons and placed
    const [placed, setPlaced] = useState(props.first) //inverted because of dragListener

    //On click for place button, lock card and fire check function
    function onClick(){
        setPlaced(false)
        props.passUpdate(props.value)
    }
    
    return(
        //Reorder from framer-motion for smooth moves
        <Reorder.Item
        key={props.value.index}
        value={props.value}
        dragListener={placed}
        className='card'
        >
            <div className='item'>
                {!placed && <div className={"year " + props.value.status}> {props.value.date} </div>}   {/*Year display, colored based on guess. Appears once the card is place*/}
                <div> {props.value.text} </div>
                {placed && <button className='button-card' onClick={onClick}>Tap to place</button>}     {/*Button to place the card. Disappears once the card is place*/}
            </div>
        </Reorder.Item>
    )
}

export default Card