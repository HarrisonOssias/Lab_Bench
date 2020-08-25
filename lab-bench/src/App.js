import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Classes from './pages/Classes'
import Course from './pages/Course'
import Calendar from './pages/Calendar'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/classes' component={Classes}/>
        <Route path='/course' component={Course}/>
        <Route path='/calendar' component={Calendar}/>
      </Switch>
    </Router>
  );
}

export default App;
