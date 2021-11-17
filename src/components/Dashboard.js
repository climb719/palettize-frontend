import { connect } from 'react-redux'
import { PaletteCard, TagButtons } from '../components/index'
// import { useEffect } from "react"
// import { getUserFavorites } from '../redux/actionCreators'
import { NavLink } from 'react-router-dom'

const Dashboard = ({user}) => {


    // const id = user.id
    // console.log(id)
    console.log(user)
    const userPalettes = user.palettes
  // const userPalettes = userFavorites.array.map(palette => palette)
  // console.log(userPalettes)

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
        <div className="palette-container">
        {userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
        </div>
        </div>
        }
  
       

    </div>
  )

}

// const mapStateToProps = state => {
//   return {
//     userFavorites: state.userFavorites
    
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   getUserFavorites: id => dispatch(getUserFavorites(id))
// })


export default Dashboard
// {getUserPalettes}
// {userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}