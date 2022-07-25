import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import InitialPage from './Pages/InitialPage';
import LessonsLearned from './Pages/LessonsLearned'

function App() {
  return (
    <div className="App-root">
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route path="/lessons-learned" component={ LessonsLearned } />
      </Switch>
    </div>
  );
}

export default App;