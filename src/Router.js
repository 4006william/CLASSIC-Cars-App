
import React from 'react'
import Home from './components/Home'
import About from './components/About'
import Car from './components/Car'
import { Switch, Route } from 'react-router'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
        </Switch>
    );
};
export default Router

