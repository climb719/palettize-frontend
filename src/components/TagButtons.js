import { connect } from 'react-redux'
function TagButtons ({tags}) {
  console.log({tags})
    return (
        <div className="tags-container">
        {tags.map((tag, index) => <button className="tag-buttons" key={index}> {tag} </button>)}
         </div>
    )
  }
  
  const mapStateToProps = (state) => {
    return {...state.selectedPalette,
    }
  }

export default connect(mapStateToProps)(TagButtons)