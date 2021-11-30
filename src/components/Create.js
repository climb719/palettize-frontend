import React from 'react'
import { ColorExtractor } from 'react-color-extractor'


class Create extends React.Component {

    state = {
        image: "",
        colors: []
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

    handleClick = (e) => {
       e.preventDefault()
       this.setState({image: "", colors: []}) 
    }

    getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))
       
    renderSwatches = () => {
        return this.state.colors.slice(0, 4).map((color, id) => {
            return ( 
                <div className="swatch-container">
                  <div className="swatches" key={id} style={{backgroundColor: color}}>
                    <p className="create-hexes">{color}</p>
                  </div>
                </div>  
                )                 
            })
        }

    render() {
    return (
        <div className="App-Main" >
            <ColorExtractor getColors={this.getColors}   >
           { (this.state.image === "") ?
           <img className="image-container" alt=""/>
            : <img className="image-field"
              src={this.state.image}  alt="invalid url"
            />
            } 
            </ColorExtractor>
            <form>
              <input type="text" name="image" placeholder="drop a url here..." size="50" onChange={this.onChange} value={this.state.image} />&nbsp;
              &nbsp;
              <input type="submit" value="Reset" onClick={this.handleClick}/>
            </form>
              <div >
                {this.renderSwatches()}  
              </div>
        </div>
        )
    }
}

export default Create 



