import { useRef, useState } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Home from './home';
import { Link } from 'react-router-dom';
import Routes from './routes';

function App() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    const parallaxRef = useRef();
    let parallaxClassName = 'parallax false';

    return (
        <HashBrowser>
            <>
                <div
                    className={`parallax ${active ? 'active' : 'false'}`}
                    ref={parallaxRef}
                >
                    <Navbar active={active} setActive={setActive} />
                    <Home />
                    <Link to='/Home'>
                        <button>click me</button>
                    </Link>
                </div>
            </>
        </HashBrowser>
    );
}

export default App;
