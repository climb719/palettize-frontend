import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'
import { getPalettes } from '../redux/actionCreators'
import { useEffect } from "react"
import  { TagButtons } from '../components'

function PaletteContainer({getPalettes, palettes, user}) {

    useEffect(getPalettes, [getPalettes], console.log("A"))

    console.log("B")  

    return (
        <div className="App-Main">
        <TagButtons />
        <h2 className="palettes"> Palette Library </h2>
        {!user && <div className="lib-text">Login or signup to enjoy more features!</div>}
        <div className="palette-container">
            {palettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
        </div>
        </div>
    )    
}

const mapStateToProps = (state) => {
    return {
        palettes: state.palettes,
        user: state.user
    }
}

export default connect(mapStateToProps, {getPalettes})(PaletteContainer)
