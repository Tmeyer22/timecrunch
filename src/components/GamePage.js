import Card from './Card';
import {Reorder} from 'framer-motion'
import { useState } from 'react';
import '../App.css';
import Banner from './Banner';

export default  function GamePage(props) {
    const [items, setItems] = useState(props.startList)
    const [count, setCount] = useState(0)
    const [rights, setRights] = useState(["active", "", "", "", "", "", "", ""])
    const [finished, setFinished] = useState(false)

    console.log("items", items, "totallist", props.totalList)
    function restart(){
        setItems(props.startList)
        setCount(0)
        setRights(["active", "", "", "", "", "", "", ""])
    }

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
                // console.log(items)
                return
            } else {
                updateRights("correct")
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
                // console.log(items)
                return
            } else {
                updateRights("correct")
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
                <Banner number={(count > 7) ? count : count + 1} guess={rights}/>
            </div>
            <div className='list'>
                <Reorder.Group axis='y' values={items} onReorder={setItems}>
                    {items.map((item) => (
                        <Card
                        key={item.index}
                        value={item}
                        first={!item.isFirst}
                        items={items}
                        passUpdate={updateList}
                        />
                        ))}
                </Reorder.Group>
            </div>
            {finished? 
                <div>
                    <button onClick={props.restart}> Back to Menu </button>
                    {/* <button onClick={restart}> Try Again? </button> */}
                </div>
                :
                <></>
            }
        </div>
    );
}
