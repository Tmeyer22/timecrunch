import Card from './Card';
import { useState } from 'react';

const VerticleColumn = () => {
  const [cards, setCards] = useState([{title: "Card 1", id: 0}, {title: "Card 2", id: 1}, {title: "Card 3", id: 3}]);
  return (
    <div>
      <div class="column">
          <div class="text">BEFORE</div>
          {cards.map((card) => <Card title={card.title} key={card.id} />)}
          <div class="text">AFTER</div>  
      </div>
    </div>
  );
}

export default VerticleColumn;