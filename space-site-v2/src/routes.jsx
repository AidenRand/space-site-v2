import React, { Component } from 'react';
import Home from './home';
import Past from './past';

import {
    Router,
    Routes,
    Route,
    BrowserRouter,
    HashRouter,
} from 'react-router-dom';

function PageRouters() {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/past' element={<Past />} />
            <Route path='/present' />
            <Route path='/Future' />
        </Routes>
    );
}
export default PageRouters;
