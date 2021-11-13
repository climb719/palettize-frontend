import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { Home, Create, Dashboard, Signup, Login, Nav, PaletteContainer, PaletteShow, FilteredPalettes, AddPalette } from './components'
import { connect } from 'react-redux'



function App(props) {

  console.log(props)
  console.log(localStorage.token)
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/signup"  render={(routeProps) => <Signup {...routeProps} />}/> 
      <Route path="/login"  render={(routeProps) => <Login {...routeProps} />}/> 
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/palettes/:id'component={PaletteShow} />
      <Route path='/palettes'component={PaletteContainer} />
      <Route path='/filtered-palettes' component={FilteredPalettes} />
      <Route path='/create' component={Create} />
      <Route path='/add' component={AddPalette} />
      <Route path='/' component={Home} />
      </Switch>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)