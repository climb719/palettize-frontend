import { connect } from 'react-redux'
import { postFavroite } from '../redux/actionCreators'
import { useHistory } from 'react-router-dom'

function Favroite ({id, palette, postFavroite}) {

  const history = useHistory()

  const handleFavroite = (e) => {
    e.preventDefault()
    postFavroite(palette, id, history)
  }
  return <button onClick={handleFavroite} className="favroite-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user 
    }
  }
  
export default connect(mapStateToProps, {postFavroite})(Favroite)