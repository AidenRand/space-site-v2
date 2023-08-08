import { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Home from './home';

function App() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <>
            <Navbar active={active} setActive={setActive} />

            <div className='parallax'>
                <Home active={active} />
            </div>
        </>
    );
}

export default App;
