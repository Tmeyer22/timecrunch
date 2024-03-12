import { listData } from "./listData"
//Seperate suffle function just because
function shuffle(array){
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * ( i +1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}
//Sort function for finding chronological order
function compareIndex(a,b){
    return a.index - b.index;
}
//Seperate function to generate a random list of 8 events
export function createList(range) {
    let listCut = listData.filter((me) => (me.year > range[0] && me.year < range[1]))   //Trim based on range from menu
    let listRandom = shuffle(listCut);                                                  //Randomize trimmed list
    let listShort = listRandom.splice(0,9)                                              //Cut randomized list to 9 events
    let listShortSort = listShort.sort(compareIndex);                                   //Sort list based on index to get chronolgical order
    let count = 0
    let listShortOrder = []
    listShortSort.forEach((o) => {                                                      //Add list position to events list, used for movement later
        let newO = { ...o, position: count }
        count = count + 1
        listShortOrder.push(newO)
    })
    let listShortRandom = listShortOrder.sort(() => Math.random() - 0.5)                //Rerandomize list, a different randomize because I was having a moment
    listShortRandom[0] = {...listShortRandom[0], isFirst: true}                         //Note which event is first for placement
    return(listShortRandom)
}