import { connect } from 'react-redux'
import { postSave } from '../redux/actionCreators'
function Save ({id, palette, user, postSave}) {

 
 // console.log(palette)
  const handleSave = (e) => {
    e.preventDefault()
    console.log(id)
    console.log(palette)
    postSave(palette, id)
  }
 
    return <button onClick={handleSave} className="save-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user
      
    }
  }
  
  export default connect(mapStateToProps, {postSave})(Save)