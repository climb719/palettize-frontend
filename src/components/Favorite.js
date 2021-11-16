import { connect } from 'react-redux'
import { postFavroite } from '../redux/actionCreators'
import { useHistory } from 'react-router-dom'


function Favroite ({id, palette, user, postFavroite}) {

 
  const history = useHistory()
 // console.log(palette)
  const handleFavroite = (e) => {
    e.preventDefault()
    console.log(id)
    postFavroite(palette, id, history)
    console.log(palette)
  }
 
    return <button onClick={handleFavroite} className="favroite-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user
      
    }
  }
  
  export default connect(mapStateToProps, {postFavroite})(Favroite)