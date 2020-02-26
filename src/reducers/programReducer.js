import { SET_PROGRAMS, SET_SORT } from "../actions/actionTypes";

let initialState = {
    programsGroup: [],
}
export default (state = initialState, action) => {
    switch(action.type){
        case SET_PROGRAMS:
            return {
                ...state,
                programsGroup: action.programs
            }
        case SET_SORT:
            return {
                ...state,
                programsGroup: action.programs
            }
        default:
            return state;
    }
}
