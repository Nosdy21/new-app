import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Signin from './components/Signin';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact component={Signin} path="/" />
    </Switch> 
  </BrowserRouter>,
  document.getElementById('root')
);
