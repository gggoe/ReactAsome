import React from 'react';
import ReactDOM from 'react-dom';
import Index from "./containers/index";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Reg from "./containers/Reg/Reg";
import Login from "./containers/Login/Login";



import './common/index.css'

ReactDOM.render((
    <Router>
        <div>
            <Route exact path="/" component={Index}/>
            <Route exact path="/reg" component={Reg}/>
            <Route exact path="/Login" component={Login}/>
        </div>
    </Router>
    ),document.getElementById('root')
);