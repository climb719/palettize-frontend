import { Link } from 'react-router-dom'

function DetailsButton (props) {
 
    return <Link to={`/palettes/${props.id}`}><button> More Details </button></Link>
  }
  
  export default DetailsButton;