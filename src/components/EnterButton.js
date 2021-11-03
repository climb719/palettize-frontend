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

