const initialState = {
    palettes: []
}

export function paletteReducer(state=initialState, action) {
    switch (action.type) {
        case "TEST":
            console.log("before test case return")
            return {...state, test: "Hello World!"}
        case 'FETCH_PALETTES':
            console.log(action)
            return {...state, palettes: action.payload.palettes}
        default:
            return {...state}
    }

}

