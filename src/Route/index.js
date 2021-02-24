import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import App from '../App';
import live from '../pages/live';
import comment from '../pages/comment';


function Routes(props) {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/live" component={live} />
            <Route path="/comment" component={comment} />
        </Switch>
    </Router>
    );
}

export default Routes;