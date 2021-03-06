import { useState } from 'react'
import { connect } from 'react-redux'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { tagOptions } from './data';
import { addNewPalette } from '../redux/actionCreators'
import { useHistory } from 'react-router-dom'

function AddPalette(props) {
 
    const history = useHistory()
    const animatedSelect = makeAnimated()

    const [colors, setColors] = useState([])
    const [optionSelected, setSelected] = useState("")
    const [palette, setPalette] = useState({colors: [], tags: []})
  
    const handleColorChange = (e) => setColors({...colors, [e.target.name]: e.target.value})
    const handleSelectChange = (selected) => setSelected({optionSelected: selected})
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let paletteArr = Object.values(colors)
        let nestedTags = optionSelected.optionSelected
        let tagArr = nestedTags.map(tag => tag.value)
        if (paletteArr.length !== 4 || nestedTags === null) {
            alert("You have not selected 4 colors, make sure you have made your own selection for colors 1-4")
        } else {
        setPalette({
            colors: palette.colors.push(...paletteArr),
            tags: palette.tags.push(...tagArr)
        })
        props.addNewPalette(palette, history)
        }
    }

    return (
        <div className="App-Main">
        <h2 className="add-title">Palettize</h2>
          <p className="add-text">Add a palette to the general library here: </p>
            <div className="add-form">
            <form onSubmit={handleSubmit}> 
            <p>Choose your palettes's colors:</p>
            <div>
            <p>Color 1: <input type="color" id="color1" name="color1" value={colors[0]} onChange={handleColorChange} /></p>
            <p>Color 2: <input type="color" id="color2" name="color2" value={colors[1]} onChange={handleColorChange}/></p>
            <p>Color 3: <input type="color" id="color3" name="color3" value={colors[2]} onChange={handleColorChange}/></p>
            <p>Color 4: <input type="color" id="color4" name="color4" value={colors[3]} onChange={handleColorChange}/></p> 
            </div> 
            <br></br>
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

const mapDispatchToProps = (dispatch, history) => ({
    addNewPalette: palette => dispatch(addNewPalette(palette, history))
  })

export default connect(null, mapDispatchToProps)(AddPalette)


