import { connect } from 'react-redux'
import { PaletteCard } from '../components/index'
import { useEffect } from "react"
import { getUserFavorites } from '../redux/actionCreators'
import { NavLink } from 'react-router-dom'

const Dashboard = ({user, getUserFavorites}) => {
    console.log(props)
    console.log(props.user.id)

    console.log(props.userFavorites)
  // const userPalettes = props.userFavorites.array.map(palette => palette)
  // console.log(userPalettes)

  useEffect(getUserPalettes(id), [getUserPalettes])

  return (
  
    <div className="App-Main">
  
      {(props.userFavorites.length === 0)? 
      <div className="no-palettes"><p>Looks Like you haven't saved any palettes yet, get started here: </p><NavLink to="/palettes"> Palette Library</NavLink> </div>:
      <div className="dashboard">
        <h2 className="my_palettes">My Palettes</h2>
        {/* {props.userFavorites.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )} */}
    
      
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
// {props.userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}