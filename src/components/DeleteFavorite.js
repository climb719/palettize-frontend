function DeleteFavorite ({user, id}) {

    const userFavorites = user.favorites
    const favs = userFavorites.map(f => ({id: f.id, palette: f.palette.id} ))
    const fav = favs.find( ({palette}) => palette === parseInt(id) )
    const favoriteId = fav.id

    const handleDeleteClick = () => {
        console.log(id)
        console.log(user)
        console.log(favoriteId)
    }
 
    return <button onClick={handleDeleteClick}> Delete From My Favorites</button>
  }
  
  export default DeleteFavorite
  