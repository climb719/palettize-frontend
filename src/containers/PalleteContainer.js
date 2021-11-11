import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'
import { getPalettes } from '../redux/actionCreators'
import { useEffect } from "react"
// import  { TagButtons } from '../components'

function PaletteContainer({getPalettes, palettes}) {
    //destructuring - instead of props and then using props.palettes 
//  const paletteTags = palettes.map(palette => palette.tags)

//   componentDidMount(){
//     this.props.getPalettes()
//   }

    useEffect(getPalettes, [getPalettes])
    //useEffect instead of component did mount
    //function and array of dependenies, so if chnages it can run again but since doesn't change, happences once 

        
        return (
            <div className="App-Main"> 
            <div className="library-aside">
                {palettes.map((palette) => ( <div key={palette.id}> {palette.tags.map((tag, i) => <div key={i}> {tag} </div> )}   </div> ))}
            </div>
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