import React from 'react'
import { useState } from 'react'
// import { connect } from 'react-redux'




function AddPalette (props) {
        console.log(props)
    const [colors, setColors] = useState([])


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
            </form>
                        
                        
            </div>
        </div>
        )
    

}

export default AddPalette