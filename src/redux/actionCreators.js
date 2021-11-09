const API = 'http://localhost:3000/'


export const test = () => ({type: "TEST"})
export const setImage = () => ({type: "SET_IMAGE"})

export const getPalettes = () => {
    return dispatch => fetch(API + 'palettes')
    .then(resp => resp.json())
    .then(palettes => dispatch({type: 'FETCH_PALETTES', payload: palettes}))
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
                console.log(history)
                console.log(user)
                history.history.push('/dashboard')    
              //  debugger 
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
                    console.log(history)
                    console.log(user)
                    history.history.push('/dashboard')    
                  //  debugger 
                }
            })        
        }
    

    


