import { useState } from 'react';
import { Reorder } from 'framer-motion';
import PropTypes  from 'prop-types'

const Card = props => {
    //Create states for buttons and placed
    const [placed, setPlaced] = useState(props.first)
    const [nlocked, setNlocked] = useState(props.first)
    const [correct, setCorrect] = useState(true)
    //Check if placed correctly
    function doCheck(me) {
        //Create checks and markers
        let length = props.items.length
        let index = props.items.indexOf(me)
        let topCheck = true
        let botCheck = true
        //Check if one above is correct
        if(index < (length-1)){
            let top = props.items[index+1]
            topCheck = (top.position > me.position)
        }
        //Check if one below is correct
        if(index !== 0){
            let bottom = props.items[index-1]
            botCheck = (bottom.position < me.position) 
        }
        //Return checks
        return (botCheck && topCheck)
    }
    //On click for place button.
    function onClick(){
        setNlocked(false)
        setPlaced(false)
        if(doCheck(props.value)){
            setCorrect(true)
            props.passCorrect("correct")
        } else{
            setCorrect(false)
            props.passCorrect("wrong")
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
                {!placed && <li> {props.value.year} </li>}
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