import { connect } from 'react-redux'
import { postSave } from '../redux/actionCreators'
function Save ({user, palette, postSave}) {

 
  console.log(user)
  console.log(palette)
  const handleSave = (palette) => {

    postSave(palette)
  }
 
    return <button onClick={handleSave} className="save-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user
      
    }
  }
  
  export default connect(mapStateToProps, {postSave})(Save)