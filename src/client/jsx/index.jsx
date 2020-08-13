import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import App from './components/app.jsx';
import '@fortawesome/fontawesome-free/js/all.js';

render(
    <Router>
        <Suspense fallback={(<div>loading</div>)}>
            <App />
        </Suspense>
    </Router>
    , document.getElementById("app"));