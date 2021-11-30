import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'
import { getPalettes } from '../redux/actionCreators'
import { useEffect } from "react"
import  { TagButtons } from '../components'

function PaletteContainer({getPalettes, palettes}) {

    useEffect(getPalettes, [getPalettes], console.log("A"))

    console.log("B")  

    return (
        <div className="App-Main">
        <TagButtons />
        <h2 className="palettes"> Palette Library </h2>
        <div className="palette-container">
            {palettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
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
