import React from 'react'
import { connect } from 'react-redux'
import { test } from '../redux/actionCreators'




const EnterButton = (props) => {



    return <button onClick={ props.test}>
            Enter
          </button>
}


export default connect(null, {test})(EnterButton)