import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome'
import Home from './components/Home'
import { connect } from 'react-redux'
import { getPalettes } from './redux/actionCreators'
import PaletteContainer from './containers/PalleteContainer'


class App extends Component {

  componentDidMount(){
    this.props.getPalettes()
  }


  render(){
  return (
 
    <Router>
    <div className="App">
      <Switch>
      <Route path='/palettes'component={PaletteContainer} />
      <Route path='/home' component={Home} />
      <Route path='/' component={Welcome} />
      </Switch>
      </div>
    </Router>
    );
  }
}

export default connect(null, {getPalettes})(App)