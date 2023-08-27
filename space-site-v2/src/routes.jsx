import React, { Component } from 'react';
import Home from './home';
import Past from './past';

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
                    <Route exact path='/' element={Home}>
                        ljkh
                    </Route>
                    <Route path='/past' element={Past}></Route>
                    <Route path='/present'></Route>
                    <Route path='/Future'></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}
