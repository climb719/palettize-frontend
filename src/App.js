import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Welcome, Home, Login, Signup } from './components'
import { connect } from 'react-redux'
import { getPalettes } from './redux/actionCreators'
import PaletteContainer from './containers/PalleteContainer'


class App extends React.Component {

  componentDidMount(){
    this.props.getPalettes()
  }


  render(){
  return (
    <div className="App">
  
      <Switch>
      <Route path='/signup'component={Login} />
      <Route path='/login' component={Signup} />
      <Route path='/palettes'component={PaletteContainer} />
      <Route path='/home' component={Home} />
      <Route path='/' component={Welcome} />
   
      </Switch>
  
      </div>
   
    );
  }
}

export default connect(null, {getPalettes})(App)