import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />\
          <PrivateRoute component={Home} path="/" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
