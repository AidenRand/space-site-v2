import { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <Navbar />
            </div>
        </>
    );
}

export default App;
