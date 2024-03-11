import Card from './Card';
import {Reorder} from 'framer-motion'
import { useState } from 'react';
import Banner from './Banner';
import './game.css'

export default  function GamePage(props) {
    const [items, setItems] = useState(props.startList)
    const [count, setCount] = useState(0)
    const [rights] = useState(["active", "", "", "", "", "", "", ""])
    const [finished, setFinished] = useState(false)

    // console.log("items", items, "totallist", props.totalList)

    function updateRights(bol){
        rights[count] = bol
        rights[count + 1] = "active"
        setCount(count+1)
    }

    function newMove(me){
        let length = items.length
        let index = items.indexOf(me)

        //Check above and move
        if(index < length-1){
            // console.log("Check above")
            let top = items[index+1]
            if(top.position < me.position){
                while(top.position < me.position && index < length-1){
                    // console.log("Move up", items, "top", top, "me", me)
                    //Move up
                    let temp = items[index];
                    items[index] = items[index + 1];
                    items[index + 1] = temp;
                    index = index + 1;
                    if(index < length-1){
                        top = items[index+1]
                    }
                }
                updateRights("wrong")
                items[index].status = "wrong"
                return
            } else {
                updateRights("correct")
                items[index].status = "correct"
            }
        }
        //Check below and move
        if(index !== 0){
            // console.log("Check below")
            let bottom = items[index-1]
            if(bottom.position > me.position){
                while(bottom.position > me.position && index > 0){
                    // console.log("Move down", items, "bottom", bottom, "me", me)
                    //Move down
                    let temp = items[index];
                    items[index] = items[index - 1];
                    items[index - 1] = temp;
                    index = index - 1;
                    if(index > 0){
                        bottom = items[index-1]
                    }
                }
                updateRights("wrong")
                items[index].status = "wrong"
                return
            } else {
                updateRights("correct")
                items[index].status = "correct"
            }
        }
        // console.log(items)
        return
    }
    //Add a card to the list
    function updateList(me){
        newMove(me)
        if(props.totalList.length > 0){
            const card = props.totalList.pop();
            let listOut = [card, ...items]
            setItems(listOut)
        }else{
            setFinished(true)
        }
    }

    return (
        <div className='column'>
            <div className='header'>
                    {finished? 
                        <div className='finished-box'>
                            <p>Great! You got {rights.filter((x) => x === "correct").length} of 8 correct.</p>
                            <button className='back-button' onClick={props.restart}> Play Again? </button>
                        </div>
                        :
                        <Banner number={(count > 7) ? count : count + 1} guess={rights}/>
                    }
            </div>
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
