const initialState = {
    palettes: [],
user: {
    id: null,
    username: ""
    },
selectedPalette: {
    colors: [],
    tags: []
    },
filtered: [],
userFavorites: [],
tagColor: ""
}

export function reducer(state=initialState, action) {
    switch (action.type) {
        case 'FETCH_PALETTES':
            console.log("E")
            return {...state, palettes: action.payload}
        case 'FETCH_PALETTE':
            return {...state, selectedPalette: action.payload}
        case 'SET_USER':
            return {...state, user: action.payload}
        case 'SET_FILTERED':
            return {...state, filtered: action.payload}
        case 'CLEAR_USER':
            return {...state, user: null}
        case 'ADD_FAVORITE':
            return {...state, userFavorites: [...state.userFavorites, action.payload]}
        case 'ADD_PALETTE':
            return {...state, palettes: [...state.palettes, action.payload]}
        case 'SET_COLOR':
            return {...state, tagColor: action.payload}
        default:
            return {...state}
    }
}
