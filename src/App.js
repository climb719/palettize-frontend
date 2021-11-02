import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome'
import Home from './components/Home'

class App extends React.Component {

  render(){
  return (
 
    <Router>
    <div className="App">
      <Switch>
    
      <Route path="/" component={Welcome} />
      <Route path="/home" component={Home} />
      </Switch>
      </div>
    </Router>
    );
  }
}
export default App;
