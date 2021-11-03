import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PaletteCard = (props) => {
    console.log(props)
    //declare a new state variable and set it's initial state of false 
    //this is similar to th.state.isFlipped and this.setState
    //setIsFlipped is what can call to supdate state
    const [isFlipped, setIsFlipped] = useState(false)
  
    const handleClick = () => {
      setIsFlipped(!isFlipped)
    }

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
  
        <div className="card" onClick={handleClick}>
            {props.colors.map(color => <div style={{backgroundColor: color}}></div>)}
        </div>
        <div className="card" onDoubleClick={handleClick}>
            {props.colors.map(color => <li>{color}</li>)}
        </div>
       
        </ReactCardFlip>
    )

}

export default PaletteCard