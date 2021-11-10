import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'
import { getPalettes } from '../redux/actionCreators'
import { useEffect } from "react"

function PaletteContainer({getPalettes, palettes}) {
    //destructuring - instead of props and then using props.palettes 


//   componentDidMount(){
//     this.props.getPalettes()
//   }

    useEffect(() => getPalettes())

        
        return (
            <div className="App-Main"> 
                <h2 className="palettes"> Palette Library </h2>
                <div className="palette-container">
                {palettes.map(palette => <PaletteCard key={palette.id} id={palette.id}colors={palette.colors} /> )}
            </div>
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        palettes: state.palettes
    }
}

export default connect(mapStateToProps, {getPalettes})(PaletteContainer)