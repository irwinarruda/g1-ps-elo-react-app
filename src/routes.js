import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './pages/Login';
import MinhaConta from './pages/MinhaConta'

function routes() {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/"/>
            <Route path="/login" component={Login}/>
            <Route path="/criar"/>
            <Route path="/minha-conta" component={MinhaConta}/>
        </Switch>
        </BrowserRouter>
    );
}

export default routes;

//localhost:3000/
//localhost:3000/login
//localhost:3000/criar
//localhost:3000/minha-conta 


