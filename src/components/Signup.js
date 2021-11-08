import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { connect } from 'react-redux'

function Signup(props){
  const [user, setUser] = useState({username: "", password: "", passwordConfirmation: ""})
  
  const handleChange = (e) => setUser({...user, [e.target.name]: e.target.value})
    console.log(props)
    console.log(user)
  const handleSubmit = (e) => {
      e.preventDefault()
      console.log(user)
      
  }

  return (
    <div className="App-Main">
     
    <h2 className="signup-title">Palettize</h2>
    <p className="signup-text">Bring some color to your life</p>
    <div className="signup-form">
    <form  onSubmit={handleSubmit}>
    <p> <label>
      Username 
      </label>   
      <input type="text" name="username" value={user.username} onChange={handleChange} size="40"/> </p>
      <p> <label>
        Password<br/>
      </label>
      <input type="password" name="password" value={user.password} onChange={handleChange} size="40" /></p>
      <p> <label>
        Password Confirmation<br/>
      </label>
      <input type="password" name="passwordConfirmation" value={user.passwordConfirmation} onChange={handleChange} size="40"/></p>
      <p><input type="submit" value="Submit" /></p>
    </form>
    <br/>
    Already on Palettize?<NavLink to="/Login"> Login</NavLink>
    </div>
    </div>
  )

}

export default Signup