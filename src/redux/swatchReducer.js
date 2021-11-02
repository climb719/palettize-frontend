const initialState = {
    swatches: []
}

export function swatchReducer(state=initialState, action) {
    switch (action.type) {
        case "TEST":
            return {...state, test: "Hello World!"}
        default:
            return {...state}
    }

}

