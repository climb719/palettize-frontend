import { connect } from 'react-redux'
import { addUser } from '../redux/actionCreators'
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'

function Signup (props) {
  const [user, setUser] = useState({username: "", password: "", passwordConfirmation: ""})
  const history = useHistory()
  
  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value})
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(user)
    props.addUser(user, history)
  }
  
  return (
    <div className="App-Main">
      <h2 className="signup-title">Palettize</h2>
        <p className="signup-text">Bring some color to your life</p>
          <div className="signup-form">
          <form  onSubmit={handleSubmit}>
            <p><label>
            Username 
            </label>   
            <input type="text" name="username" value={user.username} onChange={handleChange} size="40"/></p>
            <p> <label>
            Password<br/>
            </label>
            <input type="password" name="password" value={user.password} onChange={handleChange} size="40"/></p>
            <p> <label>
            Password Confirmation<br/>
            </label>
            <input type="password" name="passwordConfirmation" value={user.passwordConfirmation} onChange={handleChange} size="40"/></p>
            <p><input type="submit" value="Submit" /></p>
          </form><br/>
          Already on Palettize?<NavLink to="/Login"> Login</NavLink>
        </div>
    </div>
  
    )
}


const mapDispatchToProps = (dispatch, history) => ({
  addUser: user => dispatch(addUser(user, history))
})

export default connect(null, mapDispatchToProps)(Signup)