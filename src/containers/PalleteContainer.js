import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'

const PaletteContainer = ({palettes}) => {
    //destructuring - instead of props and then using props.palettes 
console.log(palettes)
        
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

export default connect(mapStateToProps)(PaletteContainer)