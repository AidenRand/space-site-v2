import Icon from '../assets/photos/icon.png';
import Hamburg from '../assets/photos/hamburg.png';
import Close from '../assets/photos/close.png';
import '../styling/navbar.scss';
import React, { useRef } from 'react';

function navbar() {
    const slideMenuRef = useRef();

    const slideMenuOut = () => {
        slideMenuRef.current.classList.toggle('active');
        document.body.style.overflow = 'hidden';
    };

    const slideMenuIn = () => {
        slideMenuRef.current.classList.toggle('active');
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            <div id='navbar'>
                <div id='title-div'>
                    <img src={Icon} id='title-icon' alt='title-icon' />
                    <h1 id='title'>SPACE HISTORY</h1>
                </div>
                <div id='links'>
                    <a href='#' className='link'>
                        PAST
                    </a>
                    <a href='#' className='link'>
                        PRESENT
                    </a>
                    <a href='#' className='link'>
                        FUTURE
                    </a>
                </div>
                <img
                    src={Hamburg}
                    alt='Hamburger icon'
                    id='hamburg-icon'
                    onClick={slideMenuOut}
                />
            </div>

            <div id='slide-menu' ref={slideMenuRef}>
                <button id='close-button'>
                    <img src={Close} alt='Close button' onClick={slideMenuIn} />
                </button>
                <div id='slide-menu-links'>
                    <button className='slide-menu-link'>PAST</button>
                    <button className='slide-menu-link'>PRESENT</button>
                    <button className='slide-menu-link'>FUTURE</button>
                </div>
            </div>
        </>
    );
}
export default navbar;
