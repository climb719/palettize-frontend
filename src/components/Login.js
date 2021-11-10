import { connect } from 'react-redux'
import { findUser } from '../redux/actionCreators'
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Login (props) {
  console.log(props)
  const [user, setUser] = useState({username: "", password: ""})
  const history = useHistory()
  
  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value}, console.log(user))
  //need to keep all key/value pairs and then update whatever key we are pasing in with this value - if using an object
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    props.findUser(user, history)
  }
  
  return (
    <div className="App-Main">
      <h2 className="login-title">Palettize</h2>
        <p className="login-text">Welcome Back!</p>
          <div className="login-form">
          <form  onSubmit={handleSubmit}>
            <p><label>
            Username 
            </label>   
            <input type="text" name="username" value={user.username} onChange={handleChange} size="40"/></p>
            <p> <label>
            Password<br/>
            </label>
            <input type="password" name="password" value={user.password} onChange={handleChange} size="40"/></p>
        
            <p><input type="submit" value="Submit" /></p>
          </form><br/>
          New to Palettize? <NavLink to="/signup"> Signup</NavLink>
        </div>
    </div>
  
    )
}


const mapDispatchToProps = (dispatch, history) => ({
  findUser: user => dispatch(findUser(user, history))
})

export default connect(null, mapDispatchToProps)(Login)