import { connect } from 'react-redux'
import { deletePalette } from '../redux/actionCreators'
import {  useHistory } from 'react-router-dom'

function DeleteFavorite ({user, id, deletePalette}) {

    const history = useHistory()

    const userFavorites = user.favorites
    const favs = userFavorites.map(f => ({id: f.id, palette: f.palette.id} ))
    const fav = favs.find( ({palette}) => palette === parseInt(id) )
    const paletteId = parseInt(id)
    const favoriteId = fav.id

    const handleDeleteClick = () => {
        console.log(fav)
        console.log(paletteId, "palette id")
        console.log(favoriteId, "favorite id")
        deletePalette(paletteId, favoriteId, history)
    }
 
    return <button onClick={handleDeleteClick}> Delete From My Favorites</button>
  }
  

//   const mapDispatchToProps = (dispatch, favoriteId) => ({
//     deletePalette: paletteId => dispatch(deletePalette(paletteId, favoriteId))
//   })

export default connect(null, {deletePalette})(DeleteFavorite)
  