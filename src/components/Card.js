import { useState } from 'react';
import { Reorder } from 'framer-motion';
import PropTypes  from 'prop-types'
import './card.css'

const Card = props => {
    //Create states for buttons and placed
    const [placed, setPlaced] = useState(props.first)
    const [nlocked, setNlocked] = useState(props.first)
    //On click for place button.
    function onClick(){
        setNlocked(false)
        setPlaced(false)
        props.passUpdate(props.value)
    }

    return(
        <Reorder.Item
        key={props.value.index}
        value={props.value}
        dragListener={nlocked}
        className='card'
        >
            {!placed && <div className='year'> {props.value.year} </div>}
            <ul className='item'>
                <li> {props.value.text} </li>
                {placed && <li><button onClick={onClick}>Tap to place</button></li>}
            </ul>
        </Reorder.Item>
    )
}

Card.propTypes = {
    value: PropTypes.object,
    passUpdate: PropTypes.func,
    doMove: PropTypes.func
}

export default Card