import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { tagOptions } from './data';

function AddPalette (props) {
        //console.log(paletteTags)
    const [colors, setColors] = useState([])
    const [optionSelected, setSelected] = useState("")


    const animatedSelect = makeAnimated()

    const handleChange = (e) => setColors({...colors, [e.target.name]: e.target.value}, console.log(colors))
    const handleSelectChange = (selected) => setSelected({optionSelected: selected}, console.log(optionSelected))

    return (
        <div className="App-Main">
        <h2 className="add-title">Palettize</h2>
          <p className="add-text">Add A Palette Here</p>
            <div className="add-form">
            <form> 
            <p>Choose your palettes's colors:</p>
            <div>
            <p>Color 1: <input type="color" id="color_1" name="color_1" value={colors[0]} onChange={handleChange} /></p>
            <p>Color 2: <input type="color" id="color_2" name="color_2"  onChange={handleChange}/></p>
            <p>Color 3: <input type="color" id="color_3" name="color_3"  onChange={handleChange}/></p>
            <p>Color 4: <input type="color" id="color_4" name="color_4"  onChange={handleChange}/></p> 
            </div> 
            <Select
            closeMenuOnSelect={false}
            components={animatedSelect}
            defaultValue="Select your tags"
            isMulti
            options={tagOptions}
            onChange={handleSelectChange}
         
            />
            <p><input type="submit" value="Submit" /></p>
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


