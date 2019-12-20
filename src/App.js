import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Login from './components/Login/Login';

function App() {
  return (
    <HashRouter basename="/">
      <Route path="/" exact component={Auth} />
      <Route path="/login" component={Login} />
    </HashRouter>
  );
}

export default App;
