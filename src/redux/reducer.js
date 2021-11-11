const initialState = {
    palettes: [],
user: {
    username: "",
    id: null
    },
selectedPalette: {
    colors: [],
    tags: []
}
}

export function reducer(state=initialState, action) {
    switch (action.type) {
        case "TEST":
            console.log("before test case return")
            return {...state, test: "Hello World!"}
        case 'FETCH_PALETTES':
            console.log(action)
            return {...state, palettes: action.payload}
        case 'FETCH_PALETTE':
            console.log("getting one palette", action.payload)
            return {...state, selectedPalette: action.payload}
        case 'SET_IMAGE':
            return 
        case 'ADD_USER':
            console.log(action)
            return {...state, user: action.payload}
        case 'FIND_USER':
            console.log(action.payload) 
            return {...state, user: action.payload}
        default:
            return {...state}
    }

}

