import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    // console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state];//same as previous line but with ES6 syntax
    }
    return state;
}