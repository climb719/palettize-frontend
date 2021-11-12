import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'





function AddPalette ({paletteTags}) {
        //console.log(paletteTags)
    const [colors, setColors] = useState([])

    const allTags = paletteTags.flat()
    const uniqueTags = [...new Set(allTags)].sort()
    console.log(uniqueTags)


    const handleChange = (e) => setColors({...colors, [e.target.name]: e.target.value}, console.log(colors))
    

    return (
        <div className="App-Main">
        <h2 className="add-title">Palettize</h2>
          <p className="add-text">Add A Palette Here</p>
            <div className="add-form">
            <form> 
            <p>Choose your palettes's colors:</p>
            <div>
            <p>Color 1: <input type="color" id="color_1" name="color_1" value={colors[0]} onChange={handleChange} /></p>
            <p>Color 2: <input type="color" id="color_2" name="color_2" value={colors[1]} onChange={handleChange}/></p>
            <p>Color 3: <input type="color" id="color_3" name="color_3" value={colors[2]} onChange={handleChange}/></p>
            <p>Color 4: <input type="color" id="color_4" name="color_4" value={colors[3]} onChange={handleChange}/></p> 
            </div> 
            
            <p> <select  multiple>
            <option value="" disabled selected>Select your tags</option>
            {uniqueTags.map((tag, id) => <option key={id} value={tag} >{tag}</option>)}
            </select> </p>
            </form>
                        
                        
            </div>
        </div>
        )
    

}

const mapStateToProps = (state) => {
    return {
       paletteTags: state.palettes.map(palette => palette.tags)  
    }
}

export default connect(mapStateToProps)(AddPalette)