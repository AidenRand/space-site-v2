import React, { useRef } from 'react';

function home() {
    return (
        <>
            <div className='parallax-group'>
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
                </div>

                <div
                    id='home-present'
                    className='parallax__layer parallax__layer--back'
                >
                    <h2>PRESENT</h2>
                </div>
            </div>
        </>
    );
}

export default home;
