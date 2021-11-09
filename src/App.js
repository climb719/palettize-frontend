import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Home, Create, Dashboard, Signup, Login, Nav } from './components'
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
      <Nav />
      <Switch>
      <Route path="/signup"  render={(routeProps) => <Signup {...routeProps} />}/> 
      <Route path="/login"  render={(routeProps) => <Login {...routeProps}/>}/> 
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/palettes'component={PaletteContainer} />
      <Route path='/create' component={Create} />
      <Route path='/' component={Home} />
      </Switch>
      </div>
   
    );
  }
}

// function setAppUser(state) {
//   const setAppUser = {setAppUser: state.user}
//   console.log(setAppUser)
//   }

  // function setAppUser(state) {
  //   return {
  //     setAppUser: state.user
  //   }
  // }
  

export default connect(null, {getPalettes})(App)