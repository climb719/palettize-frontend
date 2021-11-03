import { connect } from 'react-redux'
import { test } from '../redux/actionCreators'
import PaletteContainer from '../containers/PalleteContainer'

const Home = props => {
  return (

      <div className="home">
        <h1>Let's Palettize</h1>
        <button onClick={ props.test}>Test Me</button>
        <PaletteContainer />
      </div>
   
  )
}

export default connect(null, {test})(Home)