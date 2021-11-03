import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'

const PaletteContainer = ({palettes}) => {

        
        return (
            <div>
                In PaletteContainer
                {palettes.map(palette => <PaletteCard key={palette.id} colors={palette.colors} /> )}
            </div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        palettes: state.palettes
    }
}

export default connect(mapStateToProps)(PaletteContainer)