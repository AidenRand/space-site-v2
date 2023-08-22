import { useState } from 'react';
import './App.scss';
import Navbar from './components/navbar';
import Home from './home';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1e1e1e',
        },
    },
});

function App() {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className='parallax'>
                    <Navbar active={active} setActive={setActive} />

                    <Home active={active} setActive={setActive} />
                </div>
            </ThemeProvider>
        </>
    );
}

export default App;
