import Card from './components/Card';
import {Reorder} from 'framer-motion'
import { useState } from 'react';
import { createList } from './assets/createList';
import './App.css';
import Banner from './components/Banner';

let totalList = createList();
let startList = [totalList[0], totalList[1]];
totalList = totalList.slice(2)

export default  function App() {
    const [items, setItems] = useState(startList)
    const [rights] = useState(["active", "", "", "", "", "", "", ""])

    console.log("items", items, "totallist", totalList)

    function updateRights(bol){
        rights.unshift(bol)
    }

    function moveWrong(o){
        let index = items.indexOf(o)
        //Move up
        if(index < o.position){
            while(index < o.position && index < items.length-1){
                let temp = items[index];
                items[index] = items[index + 1];
                items[index + 1] = temp;
                index = index + 1;
            }
            return
        }
        //Move Down
        if(index > o.position){
            while(index > o.position && index > 0){
                let temp = items[index];
                items[index] = items[index - 1];
                items[index - 1] = temp;
                index = index - 1;
            }
            return
        }
    }
    //Add a card to the list
    function updateList(bol){
        if(totalList.length > 0){
            const card = totalList.pop();
            let listOut = [card, ...items]
            setItems(listOut)
        }
    }

    return (
        <div className='column'>
            <div className='header'>
                <Banner number={rights.length-7} guess={rights}/>
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
                        passCorrect={updateRights}
                        doMove={moveWrong}
                        />
                        ))}
                </Reorder.Group>
            </div>
        </div>
    );
}
