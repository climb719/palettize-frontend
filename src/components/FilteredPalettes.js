import React from 'react'
import { connect } from 'react-redux'


function FilteredPalettes({filteredPalettes}) {

    console.log(filteredPalettes)
 return (
    <div className="App-Main"> 
    </div>
 )

}

const mapStateToProps = (state) => {
    return {
        filteredPalettes: state.filtered
    }
  }



export default connect(mapStateToProps)(FilteredPalettes) 