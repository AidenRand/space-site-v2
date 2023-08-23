import { useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Home from './home';

function App() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    const parallaxRef = useRef();
    let parallaxClassName = 'parallax false';

    return (
        <>
            <div
                className={`parallax ${active ? 'active' : 'false'}`}
                ref={parallaxRef}
            >
                <Navbar active={active} setActive={setActive} />

                <Home />
            </div>
        </>
    );
}

export default App;
