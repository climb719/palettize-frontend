const initialState = {
    palettes: []
}

export function paletteReducer(state=initialState, action) {
    switch (action.type) {
        case "TEST":
            console.log("before test case return")
            return {...state, test: "Hello World!"}
        default:
            return {...state}
    }

}

