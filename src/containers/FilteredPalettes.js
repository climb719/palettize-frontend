import React from 'react'
import { connect } from 'react-redux'
import { PaletteCard, TagButtons } from '../components/index'


function FilteredPalettes({filteredPalettes, tagColor}) {


    console.log(filteredPalettes)
    console.log(tagColor)
 return (
    <div className="App-Main"> 
      <TagButtons />
     <h2 className="filtered-palettes">{tagColor} Palettes</h2>
        <div className="filtered-container">
                {filteredPalettes.map(palette => <PaletteCard key={palette.id} id={palette.id} colors={palette.colors} /> )}
               
        </div>
    </div>
 )

}

const mapStateToProps = (state) => {
    return {
        filteredPalettes: state.filtered,
        tagColor: state.tagColor
    }
  }

export default connect(mapStateToProps)(FilteredPalettes) 