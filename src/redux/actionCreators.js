const API = 'http://localhost:3000/'

export const test = () => ({type: "TEST"})
export const setImage = () => ({type: "SET_IMAGE"})
export const getPalettes = () => {
    return dispatch => fetch(API + 'palettes')
    .then(resp => resp.json())
    .then(palettes => dispatch({type: 'FETCH_PALETTES', payload: palettes}))
}

// export const addUser = (user) => ({type: "ADD_USER", payload: user})

    export const addUser = (user) => {
        return  dispatch => fetch(API + 'users', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
          })
        .then(resp => resp.json())
        .then(user => dispatch({type: "ADD_USER", payload: user}))
    }


    

