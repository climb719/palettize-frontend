import { connect } from 'react-redux'
import { test } from '../redux/actionCreators'
//import PaletteContainer from '../containers/PalleteContainer'
import { Link } from 'react-router-dom'


const Home = props => {
  return (

      <div className="App-Main">
        
        <h1>Let's Palettize</h1>
        <p>Welcome Back, please  <Link to='/login'>Login</Link> </p>
       
        <div> New here?  <Link to='/signup'>Sign Up</Link></div>

       
      </div>
   
  )
}

export default connect(null, {test})(Home)