import React from 'react';
import './css/app.css';
import { Switch, Route } from 'react-router-dom';
import { Home, SignIn, SignUp } from './views/views';


function App() {
  return (
    <Switch>
      <Route path="/sign-up">
        <SignUp />
      </Route>
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default App;