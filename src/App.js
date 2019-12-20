import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Auth} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  );
}

export default App;
