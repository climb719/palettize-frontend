import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { getPalette } from '../redux/actionCreators'
import { useEffect } from "react"
import { Link } from 'react-router-dom'

function PaletteShow({getPalette, colors, id }) {
   
   const routeId = useParams().id 


   useEffect(() => {
       console.log("getting your palette")
        getPalette(routeId)
    },  [getPalette, routeId] )  
   //grab id from route id
    return (
        <div className="App-Main">
            <h1>Palette show!</h1>
            <Link to={`/palettes/${parseInt(routeId) + 1}`}>Go to Next Palette</Link>
            </div>
        )
}

const mapStateToProps = (state) => {
    return {...state.selectedPalette}
  }

export default connect(mapStateToProps, {getPalette})(PaletteShow)