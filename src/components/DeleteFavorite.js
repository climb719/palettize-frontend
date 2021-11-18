import { connect } from 'react-redux'
import { deletePalette } from '../redux/actionCreators'

function DeleteFavorite ({user, id}) {

    const userFavorites = user.favorites
    const favs = userFavorites.map(f => ({id: f.id, palette: f.palette.id} ))
    const fav = favs.find( ({palette}) => palette === parseInt(id) )
    const favoriteId = fav.id
    const paletteId = parseInt(id)

    const handleDeleteClick = () => {
        console.log(paletteId)
        console.log(user)
        console.log(favoriteId)
        deletePalette(paletteId, favoriteId)
    }
 
    return <button onClick={handleDeleteClick}> Delete From My Favorites</button>
  }
  

//   const mapDispatchToProps = (dispatch, history) => ({
//     deletePalette: palette => dispatch(deletePalette(palette, history))
//   })

export default connect(null, {deletePalette})(DeleteFavorite)
  