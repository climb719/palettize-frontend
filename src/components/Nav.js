import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { clearUser } from '../redux/actionCreators'

function Nav(props){

  console.log(props.user)

 

  const handleLogout = () => {
      props.clearUser()
      props.logout()
   
  }

  return <nav>
      <div className="nav-bar">
      <NavLink  className="nav-link" to="/palettes">Browse Palettes</NavLink>&nbsp;
      <NavLink className="nav-link" to="/dashboard">My Dashboard</NavLink>&nbsp;
      <NavLink className="nav-link" to="/login">Login</NavLink>&nbsp;
      <NavLink className="nav-link" to="/signup">Sign up</NavLink>&nbsp;
      <NavLink className="nav-link" to="/create">Create</NavLink>&nbsp;
      <NavLink className="nav-link" to="/add">Add A Palette</NavLink>&nbsp;
      <NavLink onClick={handleLogout} className="nav-link" to="/logout">Logout</NavLink>&nbsp;
      </div>
  </nav>
}

export default connect(null, {clearUser})(Nav)