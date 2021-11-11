

const API = 'http://localhost:3000/'


export const filterPalettes = (filteredPalettes) => ({type: "SET_FILTERED", payload: filteredPalettes})
//export const setImage = () => ({type: "SET_IMAGE"})

export const getPalettes = () => {
    return dispatch => fetch(API + 'palettes')
    .then(resp => resp.json())
    .then(palettes => dispatch({type: 'FETCH_PALETTES', payload: palettes}))
}


export const getPalette = (id) => {
    return dispatch => fetch(API + `palettes/${id}`)
    .then(resp => resp.json())
    .then(palette => dispatch({type: 'FETCH_PALETTE', payload: palette}))
}

export const addUser = (user, history) => {
    return  dispatch => fetch(API + 'users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        })
        .then(resp => resp.json())
        .then(user =>     {
            if (user.errors) {
                alert(user.errors)
            } else {
                dispatch({type: "ADD_USER", payload: user})
                history.history.push('/dashboard')    
            }
        })        
    }

export const findUser = (user, history) => {
    return  dispatch => fetch(API + 'sessions', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
            })
        .then(resp => resp.json())
        .then(user =>     {
            if (user.errors) {
                alert(user.errors)
            } else {
                dispatch({type: "FIND_USER", payload: user})
                history.history.push('/dashboard')    
                }
            })        
        }
    

    


