import { connect } from 'react-redux'

function TagButtons ({tags, palettes}) {
  console.log({tags})
    console.log({palettes})

 const handleClick= (e) => {
    console.log(e.target.innerText)
   const filteredPalettes = palettes.filter(palette => palette.tags.includes(e.target.innerText))
   console.log(filteredPalettes)
  }

    return (
        <div className="tags-container">
        {tags.map((tag, index) => <button onClick={handleClick} className="tag-buttons" key={index}> {tag} </button>)}
         </div>
    )
  }
  
  const mapStateToProps = (state) => {
    return {...state.selectedPalette,
       palettes: state.palettes
    }
  }

export default connect(mapStateToProps)(TagButtons)