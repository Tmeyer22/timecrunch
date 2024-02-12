import Card from './ListItem';
import { useState } from 'react';
import PropTypes from 'prop-types'

import './column.css'

const VerticleColumn = (props) => {
  const [dispData, setDispData] = useState([props.data[0], props.data[1]]);
  const [totalData, setTotalData] = useState(props.data);
  const [dragStartIndex, setDragStartIndex] = useState(null);
  // const [newCard, setNewCard] = useState('');

  const addCard = () => {
    const listIn = [...totalData];
    const listOut = [...dispData];
    const card = listIn.pop();
    listOut.push(card);
    console.log({listIn, listOut});
    setTotalData(listIn);
    setDispData(listOut);
  }

  const onDragStart = (index) => setDragStartIndex(index)

  const onDrop = (dropIndex) => {
    const dragItem = dispData[dragStartIndex]
    let list = [...dispData]
    list.splice(dragStartIndex, 1)
    if (dragStartIndex < dropIndex) {
      setDispData([
          ...list.slice(0, dropIndex - 1),
          dragItem,
          ...list.slice(dropIndex - 1, list.length)
      ])
  } else {
    setDispData([
          ...list.slice(0, dropIndex),
          dragItem,
          ...list.slice(dropIndex, list.length)
      ])
  }
  }

  return (
    <ul className='list'>
      {
        dispData.map((item, index) => (
          <Card
            key={index}
            index={index}
            onDragStart={(index) => onDragStart(index)}
            onDrop={(index) => onDrop(index)}
          >
            {
              props.renderItemContent(item)
            }
          </Card>
        ))
      }
      <Card
          key={dispData.length}
          index={dispData.length}
          draggale={false}
          onDrop={(index) => onDrop(index)}
      />
    <div className="add-card-form">
      <button onClick={addCard}>Next Card</button>
    </div>
          
    </ul>
  );
}

Card.propTypes = {
  data: PropTypes.array,
  renderItemContent: PropTypes.func
}

export default VerticleColumn;