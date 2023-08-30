import { useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import * as Home from './home';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import PageRouters from './routes';

function App() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    const parallaxRef = useRef();
    let parallaxClassName = 'parallax false';

    return (
        <BrowserRouter>
            <>
                <div
                    className={`parallax ${active ? 'active' : 'false'}`}
                    ref={parallaxRef}
                >
                    <Navbar active={active} setActive={setActive} />
                    <PageRouters></PageRouters>
                </div>
            </>
        </BrowserRouter>
    );
}

export default App;
