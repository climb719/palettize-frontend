function AddPalette() {

    return (
        <div className="App-Main">
        <h2 className="add-title">Palettize</h2>
          <p className="add-text">Add A Palette Here</p>
            <div className="add-form">
            <form>
            <p>Choose your palettes's colors:</p>
            <div>
            <p>Color 1: <input type="color" id="color" name="color"/></p>
            <p>Color 2: <input type="color" id="color" name="color"/></p>
            <p>Color 3: <input type="color" id="color" name="color"/></p>
            <p>Color 4: <input type="color" id="color" name="color"/></p> 
            </div>  
            </form>
                        
                        
            </div>
        </div>
    )
    
}

export default AddPalette