import { connect } from 'react-redux'
import { useLocation,  useHistory  } from 'react-router-dom'
import { filterPalettes, setTags } from '../redux/actionCreators'


function TagButtons ({tags, palettes, id, paletteTags, filterPalettes, setTags}) {

    const location = useLocation()
    const history = useHistory();
    console.log(location)
    console.log(id)

    const allTags = paletteTags.flat()
    const uniqueTags = [...new Set(allTags)].sort()
    console.log(uniqueTags)
    setTags(uniqueTags)

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


   
const mapDispatchToProps = (dispatch) => ({
    filterPalettes: filteredPalettes => dispatch(filterPalettes(filteredPalettes)),
    setTags: uniqueTags => dispatch(setTags(uniqueTags))
  })

export default connect(mapStateToProps, mapDispatchToProps)(TagButtons)