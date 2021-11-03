
import { connect } from 'react-redux'
import { test } from '../redux/actionCreators'

const Home = props => {
  return (

      <div className="home">
        <h1>Let's Palettize</h1>
        <button onClick={ props.test}>Get Palttes</button>
      </div>
   
  )
}

export default connect(null, {test})(Home)