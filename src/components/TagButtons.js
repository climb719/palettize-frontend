import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'

function TagButtons ({tags, palettes, id, paletteTags}) {

    const location = useLocation()
    console.log(location.pathname)
    console.log(id)

    const allTags = paletteTags.flat()
    const uniqueTags = [...new Set(allTags)].sort()
    console.log(uniqueTags)




 const handleClick= (e) => {
    console.log(e.target.innerText)
   const filteredPalettes = palettes.filter(palette => palette.tags.includes(e.target.innerText))
   console.log(filteredPalettes)
  }

    return (
        <div>
        { (location.pathname === `/palettes/${id}`) ? 
        <div className="tags-container">
        {tags.map((tag, index) => <button onClick={handleClick} className="tag-buttons" key={index}> {tag} </button>)}
        </div> :
        <div className="lib-dashboard">
        {uniqueTags.map((tag) => <ul> <button onClick={handleClick} className="lib-buttons" key={tag}> {tag} </button> </ul>)} 
        </div>
        }
        </div>
    )
  }
  
  const mapStateToProps = (state) => {
    return {...state.selectedPalette,
       palettes: state.palettes,
       paletteTags: state.palettes.map(palette => palette.tags)  
    }
  }

export default connect(mapStateToProps)(TagButtons)