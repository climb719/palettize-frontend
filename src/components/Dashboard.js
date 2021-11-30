import { PaletteCard, TagButtons } from '../components/index'
import { NavLink } from 'react-router-dom'

const Dashboard = ({user}) => {

  const userFavorites = user.favorites
  const userPalettes = userFavorites.map(favorite => favorite.palette)

  return (
    <div className="App-Main">
       {(userPalettes.length === 0)? 
      <div className="no-palettes"><p>Looks Like you haven't saved any palettes yet, get started here: </p><NavLink to="/palettes"> Palette Library</NavLink> </div>:
        <div>
          <TagButtons />
        <h2 className="my-palettes"> {user.username}'s Palettes</h2>
        <div className="user-container">
        {userPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
        </div>
        </div>
        }
    </div>
  )
}

export default Dashboard
