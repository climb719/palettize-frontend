import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPalette } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import  { TagButtons, SaveButton } from './index'

function PaletteShow({getPalette, colors, id, length, tags }) {
   console.log(tags)
   const routeId = useParams().id 
    console.log(length)
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
            <p>All good things come to an end... <Link to={'/palettes'}>Back to All Palettes</Link></p> :
           <p> <Link to={`/palettes/${parseInt(routeId) + 1}`}>Go to Next Palette</Link> </p>
            }  
            <TagButtons />
           <p><SaveButton /></p>
        </div>
            )
}

const mapStateToProps = (state) => {
    return {...state.selectedPalette,
    length: state.palettes.length
    }
  }

export default connect(mapStateToProps, {getPalette})(PaletteShow)


