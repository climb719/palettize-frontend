
const API = 'http://localhost:3000/'


export const filterPalettes = (filteredPalettes) => ({type: "SET_FILTERED", payload: filteredPalettes})

export const sendColor = (tagColor) => ({type: "SET_COLOR", payload: tagColor})

export const updateUserDetails = (user) => ({type: "SET_USER", payload: user})

// export const getUserFavorites = (id) => {
//     return dispatch => fetch(API + `users/${id}`, {
//         headers: {
//                 'Authorization': localStorage.token
//             }
//         })
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
//        // debugger
//         // localStorage.token = data.token
//         dispatch({type: "GET_FAVORITES", payload: data})
//     })
// }

//export const setImage = () => ({type: "SET_IMAGE"})
export const clearUser = () => ({type: "CLEAR_USER"})

export const getPalettes = () => {
    console.log("C")
    return dispatch => fetch(API + 'palettes')
    .then(resp => resp.json())
    .then(palettes => dispatch({type: 'FETCH_PALETTES', payload: palettes}, console.log("D")))
}



export const getPalette = (id) => {
    return dispatch => fetch(API + `palettes/${id}`)
    .then(resp => resp.json())
    .then(palette => dispatch({type: 'FETCH_PALETTE', payload: palette}))
}
//can I do this if/else in my fetch in this file? 
export const addUser = (user, history) => {
    return  dispatch => fetch(API + 'users', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({user}),
        })
        .then(resp => resp.json())
        .then(data =>     {
            if (data.errors) {
                alert(data.errors)
            } else {
                localStorage.token = data.token
                dispatch({type: "SET_USER", payload: data.user})
                history.history.push('/palettes')    
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
        .then(data =>     {
            if (data.errors) {
                alert(data.errors)
            } else {
                localStorage.token = data.token
                dispatch({type: "SET_USER", payload: data.user})
                history.history.push('/palettes')    
                }
            })        
        }

export const autoLogin = () => {
    return dispatch => fetch("http://localhost:3000/autologin", {
        headers: {
                'Authorization': localStorage.token
            }
            })
        .then(res => res.json())
        .then(data => {
            localStorage.token = data.token
            dispatch({type: "SET_USER", payload: data.user})
        })
}

export const postFavroite = (palette, id, history) => {
    return dispatch => fetch(`http://localhost:3000/palettes/${id}/favorites`, {
     method: 'POST', 
        headers: {
            'Authorization': localStorage.token
            },
            body: JSON.stringify({favorite: palette}),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           // debugger
           dispatch({type: "SET_USER", payload: data})
           
           history.push('/dashboard')  
           alert("Your palette has been added to your dashboard!")
    })
}   


export const deletePalette = (paletteId, favoriteId, history) => {
   
    console.log(paletteId, favoriteId)
   //debugger 
    return dispatch => fetch(`http://localhost:3000/palettes/${paletteId}/favorites/${favoriteId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': localStorage.token
            }   
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
           // debugger
           dispatch({type: "SET_USER", payload: data})
          
           history.push('/dashboard')  
           alert("Palette has been deleted from your dashboard!")
    })
}   


export const addNewPalette = (palette, history) => {
    return  dispatch => fetch(API + 'palettes', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({palette}),
        })
        .then(resp => resp.json())
        .then(data =>     {
            console.log(palette) 
            console.log(data)
            if (data.errors) {
                alert(data.errors)
            } else {
                console.log(data)
                dispatch({type: "ADD_PALETTE", payload: palette})
                console.log(palette)
                history.history.push('/palettes') 
                alert("Your palette has been added!")

            }
        })        
    }

        
    

        
    

    


