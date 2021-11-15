import { connect } from 'react-redux'
import { postFavroite } from '../redux/actionCreators'
import { useHistory } from 'react-router-dom'


function Favroite ({id, palette, user, postFavroite}) {

 
  const history = useHistory()
 // console.log(palette)
  const handleFavroite = (e) => {
    e.preventDefault()
    console.log(id)
    console.log(palette)
    postFavroite(palette, id)
    history.push('/dashboard')  
  }
 
    return <button onClick={handleFavroite} className="favroite-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user
      
    }
  }
  
  export default connect(mapStateToProps, {postFavroite})(Favroite)