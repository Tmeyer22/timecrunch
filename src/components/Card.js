import { useState } from 'react';
import { Reorder } from 'framer-motion';
import PropTypes  from 'prop-types'

const Card = props => {
    const [placed, setPlaced] = useState(true)
    const [nlocked, setNlocked] = useState(true)
    const [correct, setCorrect] = useState(true)

    function doCheck(me) {
        let length = props.items.length
        let index = props.items.indexOf(me)
        let topCheck = true
        let botCheck = true
        if(index < (length-1)){
            let top = props.items[index+1]
            topCheck = (top.position > me.position)
        }
        if(index !== 0){
            let bottom = props.items[index-1]
            botCheck = (bottom.position < me.position) 
        }
        return (botCheck && topCheck)
    }

    function onClick(){
        setNlocked(false)
        setPlaced(false)
        if(doCheck(props.value)){
            setCorrect(true)
        } else{
            setCorrect(false)
            props.doMove(props.value)
        }
        props.passUpdate()
    }

    return(
        <Reorder.Item
        key={props.value.index}
        value={props.value}
        dragListener={nlocked}
        >
            <ul className='card'>
                <li> {props.value.year} </li>
                <li> {props.value.text} </li>
                {placed && <li><button onClick={onClick}>Tap to place</button></li>}
                {!placed && <li> {correct ? "Right" : "Wrong"} </li>}
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