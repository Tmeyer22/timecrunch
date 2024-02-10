import Draggable from 'react-draggable';

const Card = (props) => {
    return (
      <Draggable axis='y' bounds='parent'>
        <div className="card">
          <div className="header">{props.title}</div>
          <div className="content">Content</div>
        </div>
      </Draggable>
    )
  }
  
export default Card;