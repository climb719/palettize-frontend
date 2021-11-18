import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPalette } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import  { TagButtons, Favorite, DeleteFavorite } from './index'

function PaletteShow({user, getPalette, colors, length, palette }) {
   console.log(user)
   console.log(palette)
   console.log(colors)
   const routeId = useParams().id 
   const userFavorites = user.favorites
 
   const userPalettes = userFavorites.map((favorite => favorite.palette))
   console.log(userPalettes)
    const userPaletteIds = userPalettes.map(p => p.id)
  const favs = userFavorites.map(f => ({id: f.id, palette: f.palette.id} ))
    console.log(favs)
  let num = parseInt(routeId)
  console.log(userPaletteIds)
  let fav = favs.find( ({palette}) => palette === num )
 const favoriteId = fav.id
 console.log(favoriteId)
    console.log(routeId)

   useEffect(() => {
       console.log("getting your palette")
        getPalette(routeId)
    },  [getPalette, routeId] )  
 // debugger
    return (
        <div className="App-Main">
            <div className="show">
            {colors.map((color, id) => <span key={id} style={{backgroundColor: color} }>{color}</span>)}
            </div>
            { (parseInt(routeId)  === parseInt(length)) ?
            <p>All good things come to an end... <Link className="show-link" to={'/palettes'}>Back to All Palettes</Link></p> :
           <p> <Link className="show-link" to={`/palettes/${parseInt(routeId) + 1}`}>Go to Next Palette</Link> </p>
            }  
            <TagButtons id={routeId} />
           {!userPaletteIds.includes(parseInt(routeId)) && <p><Favorite id={routeId} palette={palette}/></p>}


           {userPaletteIds.includes(parseInt(routeId)) && <p> <DeleteFavorite id={routeId} favoriteId={favoriteId}/></p> }
           <Link className="show-link" to={'/palettes'}>Back to All Palettes</Link>&nbsp;
        </div>
            )
}

const mapStateToProps = (state) => {
    return {...state.selectedPalette,
        palette: state.selectedPalette, 
        length: state.palettes.length,
        user: state.user
    }
  }

export default connect(mapStateToProps, {getPalette})(PaletteShow)



