
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';


export default (
    <Switch>
        
        <Route component={ Home } path='/' exact />
        <Route component={ About } path='/about' exact />
        <Route component={ Contact } path='/contact' exact />

    </Switch>
)
