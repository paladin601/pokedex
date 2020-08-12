import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import Nav from './layout/navbar.jsx'
import Main from './page/main.jsx'

export default()=> {
        return (
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Main} />
                </Switch>
            </div>
        );
}