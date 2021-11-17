import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPalette } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import  { TagButtons, Favorite } from './index'

function PaletteShow({user, getPalette, colors, length, tags, palette }) {
   console.log(user)
   const routeId = useParams().id 
    const userPaletteIds = user.palettes.map(p => p.id)
    //debugger
  console.log(userPaletteIds)
    console.log(routeId)
    // const inUser = inUser.filer(p => !p.user.palettes.includes(routeId)
   useEffect(() => {
       console.log("getting your palette")
        getPalette(routeId)
    },  [getPalette, routeId] )  
  //debugger
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


           {userPaletteIds.includes(parseInt(routeId)) && <p> <button>Delete From My Favorites</button></p> }
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


