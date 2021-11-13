import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPalette } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import  { TagButtons, Save } from './index'

function PaletteShow({getPalette, colors, length, tags, palette }) {
   console.log(tags)
   const routeId = useParams().id 
    console.log(palette)
    console.log(routeId)
   useEffect(() => {
       console.log("getting your palette")
        getPalette(routeId)
    },  [getPalette, routeId] )  
   //grab id from route id
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
           <p><Save id={routeId} palette={palette}/></p>
        </div>
            )
}

const mapStateToProps = (state) => {
    return {...state.selectedPalette,
        palette: state.selectedPalette, 
    length: state.palettes.length
    }
  }

export default connect(mapStateToProps, {getPalette})(PaletteShow)


