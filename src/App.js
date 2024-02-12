import './App.css';

import { listData } from './assets/listData'
import VerticleColumn from './components/Column';
import Card from './components/Card';

function App() {
    return (
        <>
            <h1 className="header">
                Drag and drop list
            </h1>
            <VerticleColumn
                data={listData}
                renderItemContent={(item) => LessonCard(item)}
            />
        </>
    );
}

const LessonCard = item => <Card item={item}/>

export default App;