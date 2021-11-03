import React from 'react'
import { connect } from 'react-redux'

const PaletteContainer = props => {
        console.log(props)
        
        return (
            <div>In PaletteContainer</div>
        )
    
}

const mapStateToProps = (state) => {
    return {
        palettes: state.palettes
    }
}

export default connect(mapStateToProps)(PaletteContainer)