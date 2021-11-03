import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'

const PaletteContainer = ({palettes}) => {

        
        return (
            <div> 
                <h1>All The Pretty Palettes </h1>
                <div className="palette-container">
    
                {palettes.map(palette => <PaletteCard key={palette.id} colors={palette.colors} /> )}
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