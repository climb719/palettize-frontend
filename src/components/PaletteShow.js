import { useParams } from 'react-router-dom'

function PaletteShow(props) {
   
   const routeId = useParams().id 
   console.log(routeId)    
   //grab id from route id
    return (
        <div className="App-Main">
            <h1>Palette show!</h1>
            </div>
        )
}

export default PaletteShow