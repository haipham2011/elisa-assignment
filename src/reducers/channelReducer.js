import { SET_CHANNELS } from "../actions/actionTypes";

export default (state = [], action) => {
    switch(action.type){
        case SET_CHANNELS:
            return action.channels
        default:
            return state;
    }
}
