import React, { Component } from 'react';
import Home from './';
import {
    Router,
    Switch,
    Route,
    BrowserRouter,
    HashRouter,
} from 'react-router-dom';

import home from './home';

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />}></Route>
                    <Route path='/past'></Route>
                    <Route path='/present'></Route>
                    <Route path='/Future'></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
