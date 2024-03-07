import { listData } from "./listData"

function shuffle(array){
    for(let i = array.length-1; i > 0; i--){
        const j = Math.floor(Math.random() * ( i +1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
    return array;
}

function compareIndex(a,b){
    return a.index - b.index;
}

export function createList() {
    let listRandom = shuffle(listData);
    let listShort = listRandom.splice(0,9)
    let listShortSort = listShort.sort(compareIndex);
    let count = 0
    let listShortOrder = []
    listShortSort.forEach((o) => {
        let newO = { ...o, position: count }
        count = count + 1
        listShortOrder.push(newO)
    }
    )
    let listShortRandom = listShortOrder.sort(() => Math.random() - 0.5)
    listShortRandom[0] = {...listShortRandom[0], isFirst: true}
    return(listShortRandom)
}