import Banner from "./Banner"
import "./header.css"

export default function Header(props){
    let count = 0
    // console.log(props.playedGames)
    return(
    <div className='header'>
        {/*The header, switch between guess display and score box when the game ends*/}
        {props.finished? 
            <div className='finished-box'>
                <p>Great! You got {props.rights.filter((x) => x === "correct").length} of 8 correct.</p>
                <button className='back-button' onClick={props.restart}> Play Again? </button>
                <p>Your last 5 games</p>
                {
                    //If multiple games have been played display those results
                   (props.playedGames.length !== 0) ?
                    props.playedGames.map((item) => (
                        <Banner
                            key={count++}
                            number={item.rights}
                            guess={item.game}
                            range={item.dates}
                        />
                    ))
                    :
                    <></>
                }
            </div>
            :
            //Display current game guesses
            <Banner
                key={0}
                number={(props.count > 7) ? props.count : props.count + 1}
                guess={props.rights}
                range={props.range}
            />
        }
    </div>
    )
}