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
    // const [palette, setPalette] = useState({colors: [], tags: []})


    const animatedSelect = makeAnimated()

    const handleChange = (e) => setColors({...colors, [e.target.name]: e.target.value}, console.log(colors))
    
    const handleSelectChange = (selected) => setSelected({optionSelected: selected}, console.log(optionSelected))

    const handleSubmit = (e) => {
        e.preventDefault()
        let paletteArr = Object.values(colors)
      
        let nestedTags = optionSelected.optionSelected
        let tagArr = nestedTags.map(tag => tag.value)
        if (paletteArr.length !== 4) {
            alert("You have not selected 4 colors, make sure you have made your own selection for colors 1-4")
        } else {
        console.log(paletteArr)
        console.log(tagArr)
        }
        
       // debugger 
    }

    return (
        <div className="App-Main">
        <h2 className="add-title">Palettize</h2>
          <p className="add-text">Add A Palette Here</p>
            <div className="add-form">
            <form onSubmit={handleSubmit}> 
            <p>Choose your palettes's colors:</p>
            <div>
            <p>Color 1: <input required={true} type="color" id="color1" name="color1" value={colors[0]} onChange={handleChange} /></p>
            <p>Color 2: <input type="color" id="color2" name="color2" value={colors[1]}  onChange={handleChange}/></p>
            <p>Color 3: <input type="color" id="color3" name="color3" value={colors[2]}  onChange={handleChange}/></p>
            <p>Color 4: <input type="color" id="color4" name="color4" value={colors[3]} onChange={handleChange}/></p> 
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


