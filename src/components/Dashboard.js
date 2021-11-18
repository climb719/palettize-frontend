//import { connect } from 'react-redux'
import { PaletteCard, TagButtons } from '../components/index'
//import { useEffect } from "react"
//import { getUser } from '../redux/actionCreators'
import { NavLink } from 'react-router-dom'

const Dashboard = ({user}) => {


    // const id = user.id
    // console.log(id)
    //console.log(user.favorites)
    // console.log(userFavorites)
    const userFavorites = user.favorites
 
    const userPalettes = userFavorites.map(favorite => favorite.palette)
    console.log(userPalettes)

  //useEffect(() => getUser(), [getUser])
  // useEffect((id) => {
  // // debugger
  //   getUserFavorites(id) 
  // }, [getUserFavorites])

  return (
  
    <div className="App-Main">
  
       {(userPalettes.length === 0)? 
      <div className="no-palettes"><p>Looks Like you haven't saved any palettes yet, get started here: </p><NavLink to="/palettes"> Palette Library</NavLink> </div>:
        <div>
          <TagButtons />
        <h2 className="palettes">My Palettes</h2>
        <div className="user-container">
        {userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
        </div>
        </div>
        }
  
       

    </div>
  )

}

// const mapStateToProps = state => {
//   return {
//     // userFavorites: state.userFavorites,
//     user: state.user
    
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   getUserFavorites: id => dispatch(getUserFavorites(id))
// })
export default Dashboard

// export default connect(mapStateToProps)(Dashboard)
// {getUserPalettes}
// {userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}