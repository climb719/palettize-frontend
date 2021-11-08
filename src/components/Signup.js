import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { addUser } from '../redux/actionCreators'

class Signup extends Component {
  
  state = {
    username: "", 
    password: "", 
    passwordConfirmation: ""
  }
  
  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
    console.log(this.state)
}

   
  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
   this.props.addUser(this.state)
      
  }


  render() {
    return (
      <div className="App-Main">
     
      <h2 className="signup-title">Palettize</h2>
      <p className="signup-text">Bring some color to your life</p>
      <div className="signup-form">
      <form  onSubmit={this.handleSubmit}>
      <p> <label>
      Username 
      </label>   
      <input type="text" name="username" value={this.state.username} onChange={this.handleChange} size="40"/> </p>
      <p> <label>
        Password<br/>
      </label>
      <input type="password" name="password" value={this.state.password} onChange={this.handleChange} size="40" /></p>
      <p> <label>
        Password Confirmation<br/>
      </label>
      <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} size="40"/></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <br/>
    Already on Palettize?<NavLink to="/Login"> Login</NavLink>
    </div>
    </div>
  )
  }

}

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
})

export default connect(null, mapDispatchToProps)(Signup)