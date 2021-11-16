import React from 'react'
import { connect } from 'react-redux'
import { PaletteCard, TagButtons } from '../components/index'


function FilteredPalettes({filteredPalettes}) {


    console.log(filteredPalettes)
 return (
    <div className="App-Main"> 
      <TagButtons />
     <h2 className="palettes">Filtered Palettes</h2>
        <div className="filtered-container">
                {filteredPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
               
        </div>
    </div>
 )

}

const mapStateToProps = (state) => {
    return {
        filteredPalettes: state.filtered
    }
  }



export default connect(mapStateToProps)(FilteredPalettes) 