import Card from './components/Card';
import {Reorder} from 'framer-motion'
import { useState } from 'react';
import { createList } from './assets/createList';
import './App.css';

const totalList = createList();
const startList = [totalList[0], totalList[1]];
totalList.pop()
totalList.pop()

export default  function App() {
    const [items, setItems] = useState(startList)

    console.log(totalList)

    function moveWrong(o){
        let index = items.indexOf(o)
        //Move up
        if(index < o.position){
            while(index < o.position || index === items.length){
                let temp = items[index];
                items[index] = items[index + 1];
                items[index + 1] = temp;
                index = index + 1;
            }
        }
        //Move Down
        if(index > o.position){
            while(index > o.position || index === 0){
                let temp = items[index];
                items[index] = items[index - 1];
                items[index - 1] = temp;
                index = index - 1;
            }
        }
    }

    function updateList(){
        const card = totalList.pop();
        let listOut = [card, ...items]
        setItems(listOut)
    }

    return (
        <Reorder.Group axis='y' values={items} onReorder={setItems}>
            {items.map((item) => (
                <Card
                    key={item.index}
                    value={item}
                    place={false}
                    items={items}
                    passUpdate={updateList}
                    doMove={moveWrong}
                />
            ))}
        </Reorder.Group>
    );
}
