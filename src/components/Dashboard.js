import { connect } from 'react-redux'
import { PaletteCard } from '../components/index'
import { useEffect } from "react"
import { getUserFavorites } from '../redux/actionCreators'
import { NavLink } from 'react-router-dom'

const Dashboard = ({user, getUserFavorites, userFavorites}) => {


    const id = user.id
    console.log(id)
    console.log(userFavorites)
  // const userPalettes = userFavorites.array.map(palette => palette)
  // console.log(userPalettes)

  useEffect((id) => {
  // debugger
    getUserFavorites(id) 
  }, [getUserFavorites])

  return (
  
    <div className="App-Main">
  
      {(userFavorites.length === 0)? 
      <div className="no-palettes"><p>Looks Like you haven't saved any palettes yet, get started here: </p><NavLink to="/palettes"> Palette Library</NavLink> </div>:
      <div className="dashboard">
        <h2 className="my_palettes">My Palettes</h2>
        {/* {userFavorites.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )} */}
    
      
        <div className="filtered-container">     
        </div>
  
        <p className="my_info"> View My Profile </p>
        </div>
    }
    </div>
  )

}

const mapStateToProps = state => {
  return {
    userFavorites: state.userFavorites
    
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserFavorites: id => dispatch(getUserFavorites(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
// {getUserPalettes}
// {userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}