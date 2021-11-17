import { connect } from 'react-redux'
import { useLocation,  useHistory  } from 'react-router-dom'
import { filterPalettes } from '../redux/actionCreators'


function TagButtons ({tags, palettes, id, filterPalettes}) {

    const location = useLocation()
    const history = useHistory();
  
    const allTags = palettes.map(palette => palette.tags).flat()
    const uniqueTags = [...new Set(allTags)].sort()



    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        })
      }

    const handleClick= (e) => {
        console.log(e.target.innerText)
        const filteredPalettes = palettes.filter(palette => palette.tags.includes(e.target.innerText))
        filterPalettes(filteredPalettes)
        history.push('/filtered-palettes')
        console.log(filteredPalettes)
        scrollToTop()
    }

    return (
        <div>
        { (location.pathname === `/palettes/${id}`) ? 
        <div className="tags-container">
        {tags.map((tag) => <button onClick={handleClick} className="tag-buttons" key={tag}> {tag} </button>)}
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
      //  paletteTags: state.palettes.map(palette => palette.tags)  
    }
}


   
const mapDispatchToProps = (dispatch) => ({
    filterPalettes: filteredPalettes => dispatch(filterPalettes(filteredPalettes))
  })

export default connect(mapStateToProps, mapDispatchToProps)(TagButtons)