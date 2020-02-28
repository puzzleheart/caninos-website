import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const RoupasPage = () => (
  <div>
    <h1>ROUPAS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route exact path='/shop/roupas' component={RoupasPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
