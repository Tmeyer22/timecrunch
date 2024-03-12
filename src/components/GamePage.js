import Card from './Card';
import {Reorder} from 'framer-motion'
import { useState } from 'react';
import Banner from './Banner';
import './game.css'

//The card list and game logic, kept here to use state
export default  function GamePage(props) {
    const [items, setItems] = useState(props.startList)                 //List of events from createList function through App
    const [count, setCount] = useState(0)                               //Track which event you're on
    const [rights] = useState(["active", "", "", "", "", "", "", ""])   //Track guess, uses string for css stuff in Banner
    const [finished, setFinished] = useState(false)                     //Track done

    //Update the guess array with each new guess, bumps "active" along to show where the player is with the blue highlighted circle
    function updateRights(bol){
        rights[count] = bol
        rights[count + 1] = "active"
        setCount(count+1)
    }

    //Check if the placed card is corrent and move it to the right place if it's not
    function checkMove(me){
        let length = items.length
        let index = items.indexOf(me)

        //Check if there is a card above it
        if(index < length-1){
            let top = items[index+1]
            //Check if the one above is newer/younger than current card
            if(top.position < me.position){
                while(top.position < me.position && index < length-1){
                    //Move up
                    let temp = items[index];
                    items[index] = items[index + 1];
                    items[index + 1] = temp;
                    index = index + 1;
                    if(index < length-1){
                        top = items[index+1]
                    }
                }
                //Update rights guesses array and card guess status
                updateRights("wrong")
                items[index].status = "wrong"
                return
            } else {
                //Update rights guesses array and card guess status
                updateRights("correct")
                items[index].status = "correct"
            }
        }
        //Check if there is a card below it
        if(index !== 0){
            let bottom = items[index-1]
            //Check if the one below is older than current card
            if(bottom.position > me.position){
                while(bottom.position > me.position && index > 0){
                    //Move down
                    let temp = items[index];
                    items[index] = items[index - 1];
                    items[index - 1] = temp;
                    index = index - 1;
                    if(index > 0){
                        bottom = items[index-1]
                    }
                }
                //Update rights guesses array and card guess status
                updateRights("wrong")
                items[index].status = "wrong"
                return
            } else {
                //Update rights guesses array and card guess status
                updateRights("correct")
                items[index].status = "correct"
            }
        }
        return //Just return if correct
    }

    //Add a card to the list
    function updateList(me){
        checkMove(me)                           //Check if the card is placed right
        if(props.totalList.length > 0){         //Then add the next card to items if one is avalible
            const card = props.totalList.pop(); //Otherwise end the game
            let listOut = [card, ...items]
            setItems(listOut)
        }else{
            setFinished(true)
        }
    }

    return (
        <div className='column'>
            <div className='header'>
                    {/*The header, switch between guess display and score box when the game ends*/}
                    {finished? 
                        <div className='finished-box'>
                            <p>Great! You got {rights.filter((x) => x === "correct").length} of 8 correct.</p>
                            <button className='back-button' onClick={props.restart}> Play Again? </button>
                        </div>
                        :
                        <Banner number={(count > 7) ? count : count + 1} guess={rights}/>
                    }
            </div>
            {/*List of all the cards, using framer-motions reorder for smooth moves*/}
            <Reorder.Group axis='y' values={items} onReorder={setItems}  className='list'>
                {items.map((item) => (
                    <Card
                    key={item.index}
                    value={item}
                    first={!item.isFirst}
                    passUpdate={updateList}
                    />
                    ))}
            </Reorder.Group>
        </div>
    );
}
