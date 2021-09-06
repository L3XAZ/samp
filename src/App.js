import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import StartPlayingPage from './pages/StartPlayingPage/StartPlayingPage';
import DonatePage from './pages/DonatePage/DonatePage';
import AccountPage from './pages/AccountPage/AccountPage';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/start-playing" exact>
          <StartPlayingPage />
        </Route>
        <Route path="/donate" exact>
          <DonatePage />
        </Route>
        <Route path="/account" exact>
          <AccountPage />
        </Route>

        <Redirect to="/main" />
      </Switch>
    </Router>
  );
}