import { connect } from 'react-redux'
import { postSave } from '../redux/actionCreators'
function Save (props) {

  console.log(props)
  console.log(props.user)
  const handleSave = (e) => {
    console.log(e)
  }
 
    return <button onClick={handleSave} className="save-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user
      
    }
  }
  
  export default connect(mapStateToProps, {postSave})(Save)