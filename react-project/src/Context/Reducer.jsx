import { act } from "react-dom/test-utils"



function reducer(state,action) {
    switch(action.type){
        case "setinputpin":
        return {...state,inputpin:action.playload}
        case "setpin":
            return {...state,pin:action.playload}
        case "setcity":
            return {...state,city:action.playload}
        case "setcartLength":
                return (action.playload)
        case "toggleregpop":
            return action.playload
        default:
            return state
    }
}

export default reducer;