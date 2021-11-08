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
    <h2>Glad you want to Palettize, Sign Up here:</h2>
    <form className="signup-form" onSubmit={handleSubmit}>
      Username: <input type="text" name="username" value={user.username} onChange={handleChange}/> <br/>
      Password: <input type="password" name="password" value={user.password} onChange={handleChange}/> <br/>
      Password Confirmation: <input type="password" name="passwordConfirmation" value={user.passwordConfirmation} onChange={handleChange}/>
      <br/>
      <input type="submit" value="Submit" />
    </form>
    <br/>
    <NavLink to="/Login">Or Login</NavLink>
    </div>
  )

}

export default Signup