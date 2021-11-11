import React from 'react'
import { connect } from 'react-redux'
import PaletteCard from '../components/PaletteCard'
import { getPalettes } from '../redux/actionCreators'
import { useEffect } from "react"
// import  { TagButtons } from '../components'

function PaletteContainer({getPalettes, palettes, paletteTags}) {
    //destructuring - instead of props and then using props.palettes 

//   componentDidMount(){
//     this.props.getPalettes()
//   }
    const allTags = paletteTags.flat()
    const uniqueTags = [...new Set(allTags)].sort()
    console.log(uniqueTags)


    useEffect(getPalettes, [getPalettes])
    //useEffect instead of component did mount
    //function and array of dependenies, so if chnages it can run again but since doesn't change, happences once 

        
        return (
            <div className="App-Main">
    
            <div className="lib-dashboard">
                {uniqueTags.map((tag, i) => <div className="lib-tags" key={i}> {tag} </div> )} 
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
        palettes: state.palettes,
        paletteTags: state.palettes.map(palette => palette.tags)  
    }
}

export default connect(mapStateToProps, {getPalettes})(PaletteContainer)

// {palettes.map((palette) => ( <div key={palette.id}> {palette.tags.map((tag, i) => <div className="lib-tags" key={i}> {tag} </div> )}  </div> ))}