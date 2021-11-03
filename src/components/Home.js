import { connect } from 'react-redux'
import { test } from '../redux/actionCreators'
//import PaletteContainer from '../containers/PalleteContainer'
import { Link } from 'react-router-dom'

const Home = props => {
  return (

      <div className="App-Main">
        <h1>Let's Palettize</h1>
        <button onClick={ props.test}> <Link to="/palettes"><div>Show Me Palettes</div></Link></button>
       
      </div>
   
  )
}

export default connect(null, {test})(Home)