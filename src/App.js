import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

import Auth from './views/Auth';
import Home from './views/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Auth} />
        <PrivateRoute path="/home" component={Home} />
      </Switch>
    </>
  );
}

export default App;
