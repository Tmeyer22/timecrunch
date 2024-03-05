import Card from './components/Card';
import {Reorder} from 'framer-motion'
import { listData } from './assets/listData'
import { useState } from 'react';
import './App.css';

const totalList = listData.slice(2).sort(()=> Math.random() -0.5);

export default  function App() {
    const [items, setItems] = useState([listData[0], listData[1]])
    // const [items, setItems] = useState(listData)

    function checkPlace(){
        for(let i = 0; i < items.length; i++){
            console.log(items[i])
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
                />
            ))}
        </Reorder.Group>
    );
}
