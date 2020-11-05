import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Login from './pages/Login';
import MinhaConta from './pages/MinhaConta'
import Cadastro from './pages/Cadastro'
import HomePage from './pages/HomePage'

function routes() {
    return (
        <BrowserRouter>  
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={Login}/>
                <Route path="/cadastro" component={Cadastro}/>
                <Route path="/minha-conta" component={MinhaConta}/>
            </Switch>
        </BrowserRouter>
    );
}

export default routes;