import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';

const HatsPage =() => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
    return (
        <Router>
            <Switch>
              <Route exact path='/' component={Home} />
            </Switch>
        </Router>
    );
}

export default App;