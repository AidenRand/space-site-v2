import Icon from '../assets/photos/icon.png';
import Hamburg from '../assets/photos/hamburg.png';
import Close from '../assets/photos/close.png';
import '../styling/navbar.scss';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

function navbar({ setActive, active }) {
    const slideMenuOut = () => {
        setActive(true);
        document.body.style.overflow = 'hidden';
    };

    const slideMenuIn = () => {
        setActive(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div className='parallax-group'>
                {/* Navbar */}
                <div
                    id='navbar'
                    className='parallax-layer parallax_layer--base'
                >
                    <div id='title-div'>
                        <img src={Icon} id='title-icon' alt='title-icon' />
                        <h1 id='title'>SPACE HISTORY</h1>
                    </div>

                    <div id='links'>
                        <Link to='/past' className='link'>
                            PAST
                        </Link>
                        <Link to='/present' className='link'>
                            PRESENT
                        </Link>
                        <Link to='/future' className='link'>
                            FUTURE
                        </Link>
                    </div>

                    <img
                        src={Hamburg}
                        alt='Hamburger icon'
                        id='hamburg-icon'
                        onClick={slideMenuOut}
                    />
                </div>

                {/* Slide menu */}
                <div
                    id='slide-menu'
                    className={`parallax-layer parallax_layer--base ${
                        active && 'active'
                    }`}
                >
                    <button id='close-button'>
                        <img
                            src={Close}
                            alt='Close button'
                            onClick={slideMenuIn}
                        />
                    </button>
                    <div id='slide-menu-links'>
                        <Link to='/past'>PAST</Link>
                        <Link to='/present'>PRESENT</Link>
                        <Link to='/future'>FUTURE</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default navbar;
