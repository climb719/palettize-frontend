import React from 'react'
import { connect } from 'react-redux'
import { ColorExtractor } from 'react-color-extractor'
import { test } from '../redux/actionCreators'


const Create = (props) => {

    return (
        <div>
            <button onClick={props.test}>Create</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}

export default connect(mapStateToProps, {test})(Create)