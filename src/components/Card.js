import { useState } from 'react';
import { Reorder } from 'framer-motion';
import PropTypes  from 'prop-types'

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
        >
            <ul className='card'>
                {!placed && <li> {props.value.year} </li>}
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