import React from 'react'
import { connect } from 'react-redux'
import { ColorExtractor } from 'react-color-extractor'

const Create = () => {

    return (
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        colors: state.colors
    }
}

export default connect(mapStateToProps)(Create)