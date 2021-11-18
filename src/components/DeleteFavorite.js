function DeleteFavorite (props) {


    console.log(props)

    const handleDeleteClick = () => {
        console.log(props.id)
    }
 
    return <button onClick={handleDeleteClick}> Delete From My Favorites</button>
  }
  
  export default DeleteFavorite