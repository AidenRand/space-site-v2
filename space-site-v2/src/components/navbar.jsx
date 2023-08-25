import Icon from '../assets/photos/icon.png';
import Hamburg from '../assets/photos/hamburg.png';
import Close from '../assets/photos/close.png';
import '../styling/navbar.scss';
import React, { useRef } from 'react';

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
                <div
                    id='navbar'
                    className='parallax-layer parallax_layer--base'
                >
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
                        <button className='slide-menu-link'>PAST</button>
                        <button className='slide-menu-link'>PRESENT</button>
                        <button className='slide-menu-link'>FUTURE</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default navbar;
