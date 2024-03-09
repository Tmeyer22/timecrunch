import GamePage from "../components/GamePage";
import { createList } from '../assets/createList';

export default function Game(props){
    let totalList = createList();
    let startList = [totalList[1], totalList[0]];
    totalList = totalList.slice(2)
    console.log(props.range)
    return(
        <div>
            <GamePage
              restart={props.restart}
              totalList={totalList}
              startList={startList}
            />
        </div>
    )
}