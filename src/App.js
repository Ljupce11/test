import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import CredentialDetails from './components/CredentialDetails/CredentialDetails';
import Logout from './components/Logout/Logout';

function App() {
  return (
    <BrowserRouter >
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="logout" component={Logout} />
      <Route path="/credential-details/:id" component={CredentialDetails} />
    </BrowserRouter>
  );
}

export default App;
