
import { NavLink } from 'react-router-dom'

function Nav(){
  return <nav>
      <NavLink to="/palettes">Browse Palettes</NavLink>
      <NavLink to="/login">MyDashboard</NavLink>
      <NavLink to="/signin">Sign up</NavLink>
      <NavLink to="/create">Create</NavLink>
  </nav>
}

export default Nav