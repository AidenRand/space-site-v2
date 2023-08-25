import React, { Component } from 'react';
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
            <HashRouter>
                <Switch>
                    <Route path='/' exact Component={home} />
                </Switch>
            </HashRouter>
        );
    }
}
