const API = 'http://localhost:3000/'

export const test = () => ({type: "TEST"})
export const getPalettes = () => {
    fetch(API + 'palettes')
    .then(resp => resp.json())
    .then(palettes => console.log(palettes))
}