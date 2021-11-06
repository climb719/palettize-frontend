import React from 'react'
// import { connect } from 'react-redux'
import { ColorExtractor } from 'react-color-extractor'
// import { test } from '../redux/actionCreators'

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
        // this.props.test()
        console.log(this.state.image)
        this.setState({image: "", colors: []}) 
    }

    getColors = colors =>
    this.setState(state => ({ colors: [...state.colors, ...colors] }))
       
    renderSwatches = () => {
        const { colors } = this.state

        return colors.map((color, id) => {
    
            return ( 
                <div className="swatch-container">
                <div className="swatches"
                key={id}
                style={{backgroundColor: color}}>
                <div className="create-hexes">{color}</div>
                </div>
                </div> 
                )
            })
        }
 

    render() {
    return (
        <div>
            <ColorExtractor getColors={this.getColors} maxColors={4}  >
           { (this.state.image === "") ?
           <img className="image_field" src="https://www.kenyons.com/wp-content/uploads/2017/04/default-image-620x600.jpg" alt="default"/>
            : <img className="image_field"
              src={this.state.image}  alt="your input"
            />
            }
            </ColorExtractor>
            <form>
              <input type="text" name="image" placeholder="drop a url here..." size="50" onChange={this.onChange} value={this.state.image} />&nbsp;
              
              <input type="submit" value="Reset"  onClick={this.handleClick}/>
            </form>
            <div>
                {this.renderSwatches()}
            </div>
        </div>
        )
    }

}

export default Create 

// const mapStateToProps = (state) => {
//     return {
       
//         colors: state.colors
//     }
// }


// export default connect(mapStateToProps, {test})(Create)

//<input type="submit" value="Submit"  onClick={this.handleClick}/>

