import './App.css';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/login'
import Menu from './pages/Menu/menu'
import Bebidas from './pages/Bebidas/bebidas'
import NotFound from './pages/NotFound/notfound'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/> 
        <Route exact path="/menu" component={Menu}/>
        <Route exact path="/404" component={NotFound}/> 
        <Route exact path="/bebidas" component={Bebidas}/> 
        <Redirect to="/404" component={NotFound}/>               
      </Switch>  
    </Router>
  );
}

export default Routes;
