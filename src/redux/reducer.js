const initialState = {
    palettes: [],
user: {
    username: ""
    },
selectedPalette: {
    colors: [],
    tags: []
    },
filtered: [],
userFavorites: []
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
        case 'SET_USER':
            console.log(action.payload) 
            return {...state, user: action.payload}
        case 'SET_FILTERED':
            console.log(action.payload)
            return {...state, filtered: action.payload}
        case 'CLEAR_USER':
            console.log(action)
            return {...state, user: null}
        case 'FAVORITE_PALETTE':
            console.log(action.payload, "hello favorite palette")
            return {...state, userFavorites: [...state.userFavorites, action.payload]}
        case 'ADD_PALETTE':
            console.log(action.payload, "new palette!")
            return {...state, palettes: [...state.palettes, action.payload]}
        default:
            return {...state}
    }

}

