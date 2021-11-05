import React from 'react'
import { connect } from 'react-redux'
import { ColorExtractor } from 'react-color-extractor'
import { test } from '../redux/actionCreators'


class Create extends React.Component {

    handleClick = (e) => {
        e.preventDefault()
        this.props.test()
    }

    render() {
    return (
        <div>
            <ColorExtractor >
            <img className="image_field"
            src="https://media.istockphoto.com/photos/blue-sky-with-rainbow-and-sun-reflection-picture-id518324936?b=1&k=20&m=518324936&s=170667a&w=0&h=3Rht3gTpVgB8oSAKvBmSthglJStzjkGgzTA28tlDRvU=" alt="your_input"
         
            />
            </ColorExtractor>
            <form>
              <input type="text" name="image_url" placeholder="drop a url here..." size="50"/>&nbsp;
              <input type="submit" value="Submit"  onClick={this.handleClick}/>
            </form>
        
        </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}


export default connect(mapStateToProps, {test})(Create)