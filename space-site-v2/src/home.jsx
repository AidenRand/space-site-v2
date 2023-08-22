import React, { useRef } from 'react';
import './styling/home.scss';

function home({ setActive, active }) {
    if (active) {
        homeRef.current.style.overflow = 'hidden';
    }

    if (!active) {
        homeRef.current.style.overflow = 'auto';
    }

    const homeRef = useRef();

    return (
        <>
            <div className='parallax-group' id='home-container' ref={homeRef}>
                <div id='home-intro-container' className='parallax_layer--base'>
                    <h1>THE HISTORY OF SPACE TRAVEL</h1>
                    <h2>THE STORY BEGINS NOW</h2>
                </div>
            </div>
            <div id='home-sections' className='parallax_group'>
                <div
                    id='home-past'
                    className='parallax__layer parallax__layer--back home-section'
                >
                    <h2>PAST</h2>
                    <p>The foundations of our journey</p>
                </div>

                <div
                    id='home-present'
                    className='parallax__layer parallax__layer--back home-section'
                >
                    <h2>PRESENT</h2>
                    <p>Where we are now</p>
                </div>

                <div
                    id='home-future'
                    className='parallax__layer parallax__layer--back home-section'
                >
                    <h2>FUTURE</h2>
                    <p>Our future adventures</p>
                </div>
            </div>
        </>
    );
}

export default home;
