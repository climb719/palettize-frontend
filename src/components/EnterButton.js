import { useHistory } from 'react-router-dom';

function EnterButton() {

 let history = useHistory()

  function handleClick() {
    console.log("Enter")
     history.push('/home')
  }

  return (
    <button type="button" onClick={handleClick}>
      Enter
    </button>
  );

}

export default EnterButton

// import React from 'react'
// import { connect } from 'react-redux'
// import { test } from '../redux/actionCreators'

// const EnterButton = (props) => {

    

//   return (
//    <button onClick={ props.test}>
//           Enter
//         </button>
//   )
// }


// export default connect(null, {test})(EnterButton)