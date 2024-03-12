import GamePage from "../components/GamePage";
import { createList } from '../assets/createList';

//Created a page for the game, was planning to use router but wasn't useful. May remove/rework
export default function Game(props){
    //Generate the event list for the game
    let totalList = createList(props.range);
    let startList = [totalList[1], totalList[0]];
    totalList = totalList.slice(2)

    return(
        <div>
            <GamePage
              restart={props.restart}
              trackGame={props.setGames}
              playedGames={props.playedGames}
              totalList={totalList}
              startList={startList}
            />
        </div>
    )
}