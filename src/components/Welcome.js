import React from 'react';
import EnterButton from './EnterButton'

const Welcome = props => {
    console.log(props)
  return (
    <div className="welcome">
        <header className="App-header">
        <img src="https://i.pinimg.com/564x/1e/db/25/1edb253a19ebb84b7528e9c33e375159.jpg" className="home-panels" alt="swatches" />
        <h1>
          Welcome to Palettize
        </h1>
        <EnterButton />
      </header>
    </div>
  )
}

export default Welcome;