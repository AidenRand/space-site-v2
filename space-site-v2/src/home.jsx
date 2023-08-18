import React, { useRef } from 'react';
import './styling/home.scss'

function home() {
    return (
        <>
            <div className='parallax-group' id='home-container'>
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
                
                <div id='goddard-div'>
                <p>ROBERT GODDARD</p>
                <p>Dr. Robert H. Goddard was an American physicist, engineer, inventor,
            and professor. Robert was born October 5, 1882 in Worcester Massachusetts,
            and as a young boy he had severe stomach issues which resulted in him missing two
            years of school. When he matured he became a varacious reader and made regular
            trips to his local library. Goddard later attended Worcester Polytechnic Institue,
            Where he earned a B.S. degree in physics in 1908. His whole life he was fascinated
            with flight and space, and in 1915 Goddard performed his first launch of a gunpowder-fueled
            rocket. He noticed that gunpowder was extremely insufficient at converting energy into 
            thrust and motion. This later lead to Goddard creating the first ever liquid proppeled 
            rocket in 1926. This rocket was launched on March 16, 1926, the flight lasted 2.5 seconds
            and flew to a height of 41 feet at an everage speed of 60mph.</p>
            </div>
            </div>
        </>
    );
}

export default home;
