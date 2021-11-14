
import { NavLink } from 'react-router-dom'


function Nav(props){

  console.log(props.user)

 

  const handleLogout = () => {
      
      props.logout()
      
   
  }

  return <nav>
      <div className="nav-bar">
      <NavLink  className="nav-link" to="/palettes">Browse Palettes</NavLink>&nbsp;
      {props.user && <NavLink className="nav-link" to="/add">Add A Palette</NavLink>}&nbsp;
      <NavLink className="nav-link" to="/create">Create From Image</NavLink>&nbsp;
      {props.user && <NavLink className="nav-link" to="/dashboard">My Dashboard</NavLink>}&nbsp;
      {!props.user && <NavLink className="nav-link" to="/login">Login</NavLink>}&nbsp;
      {!props.user && <NavLink className="nav-link" to="/signup">Sign up</NavLink>}&nbsp;
      {props.user && <NavLink onClick={handleLogout} className="nav-link" to="/logout">Logout</NavLink>}&nbsp;
      </div>
  </nav>
}

export default Nav