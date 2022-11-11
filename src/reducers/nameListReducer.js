
const initialState = {
    items: [],
    uItems:[],
    item: {}
  };

export default function(state=initialState,action){
    switch(action.type){
        case "FETCH_MOVIES" : 
            return {
                ...state,
                items: action.payload
            };
        case "UPDATE_LIST":
            return{
                ...state,
                uItems: action.payload
            }
        default: return state;
    }
}