import { NavLink } from 'react-router-dom'

const Signup = props => {
    console.log(props)
  return (
    <div className="App-Main">
    <h2>Glad you want to Palettize, Sign Up here:</h2>
    <form >
      <label>
        Username:&nbsp;
        <input type="text" name="username"  />
      </label>
      <br/>
      <label>
        Password:&nbsp;
        <input type="password" name="password"  />
      </label>
      <br/>
      <label>
        Password Confirmation:&nbsp;
        <input type="password" />
      </label>
      <br/>
      <input type="submit" value="Submit" />
    </form>
    <br/>
    <NavLink to="/Login">Or Login</NavLink>
    </div>
  )

}

export default Signup