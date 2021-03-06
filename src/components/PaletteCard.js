import React, { useState } from "react";
import ReactCardFlip from "react-card-flip"
import { connect } from 'react-redux'
import DetailsButton from './DetailsButton'

 function PaletteCard({id, user, colors}) {
 
    const [isFlipped, setIsFlipped] = useState(false)
  
    const handleClick = () => {
      setIsFlipped(!isFlipped)
    }

    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" >
        <div className="card" onClick={handleClick}>
            {colors.map((color, id) => <div key={id} style={{backgroundColor: color}}></div>)}
        </div>
        <div className="card" onDoubleClick={handleClick}>
            {colors.map((color, id) => <li key={id}>{color}</li>)}
           {user && <DetailsButton id={id} user={user}/> }
        </div>
        </ReactCardFlip>
    )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(PaletteCard)