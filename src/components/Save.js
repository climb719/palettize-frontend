import { connect } from 'react-redux'
import { postSave } from '../redux/actionCreators'
import { useHistory } from 'react-router-dom'


function Save ({id, palette, user, postSave}) {

 
  const history = useHistory()
 // console.log(palette)
  const handleSave = (e) => {
    e.preventDefault()
    console.log(id)
    console.log(palette)
    postSave(palette, id)
    history.push('/dashboard')  
  }
 
    return <button onClick={handleSave} className="save-button">Save this Palette </button>
  }
  
  const mapStateToProps = state => {
    return {
      user: state.user
      
    }
  }
  
  export default connect(mapStateToProps, {postSave})(Save)