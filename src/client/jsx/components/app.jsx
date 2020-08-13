import React from 'react';
import { Switch, Route } from "react-router-dom";
import Nav from './layout/navbar.jsx'
import Search from './pages/search.jsx'
import Detail from './pages/detail.jsx'
import api from './api/rest-manager'

let manager = new api();
window.manager = manager;
export default () => {
    return [
        //<Nav key="0" />,
        <Switch key="0">
            <Route path="/detail/:id" component={Detail} />
            <Route path="/" component={Search} />
        </Switch>
    ];
}