import { createStore} from 'redux';

export interface Structure {
    currentJoke: string;
    currentCategory: string;
}

export const initialState: Structure = {
    currentJoke: "",
    currentCategory: ""
}
interface Action {
    type : string;
    data : string;
}


function appReducer(state: Structure = initialState, action: Action){
    if (action.type === "store"){
        return Object.assign({}, state, {
            ...state,
            currentJoke : action.data
        })
    } else if (action.type === "setCategory"){
        return Object.assign({}, state, {
            ...state,
            currentCategory : action.data
        })
    } 

    return state;
}

export const store = createStore(appReducer);
  