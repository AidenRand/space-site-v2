import React, { useRef } from 'react';
import './styling/home.scss'
import earthImage from './assets/photos/earth.png'
import moonImage from './assets/photos/moon.png'
import marsImage from './assets/photos/mars.png'

function home() {
    return (
        <>
            <div className='parallax-group' id='home-container'>
                <div id='home-intro-container' className='parallax_layer--base'>
                    <h1>THE HISTORY OF SPACE TRAVEL</h1>
                    <p>THE STORY BEGINS NOW</p>
                </div>
            </div>      

            <div id='home-sections' className='parallax_group'>
                <div
                    id='home-past'
                    className='parallax__layer parallax__layer--back'
                >
                    <h2>PAST</h2>
                    <img src={earthImage} alt='Earth' className='home-image' />
                </div>

                <div
                    id='home-present'
                    className='parallax__layer parallax__layer--back'
                >
                    <h2>PRESENT</h2>
                    <img src={moonImage} alt="Moon" className='home-image' />
                </div>

                <div
                    id='home-future'
                    className='parallax__layer parallax__layer--back'
                >
                    <h2>FUTURE</h2>
                    <img src={marsImage} alt="Mars" className='home-image' />
                </div>
            </div>
        </>
    );
}

export default home;
