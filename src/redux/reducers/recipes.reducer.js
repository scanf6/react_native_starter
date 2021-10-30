import {recipes} from '../types';
const initialState = {
    loading: false,
    error: false,
    items: [],
    item: null,
};

const recipesReducer =  (state = initialState, action) => {
    switch(action.type) {
        case recipes.FETCH_RECIPES:
            return {...state, loading: true}
        case recipes.FETCH_RECIPES_SUCCESS:
            return {...state, loading: false, items: action.payload};
        case recipes.FETCH_RECIPES_FAILURE:
            return {...state, loading: false, error: true}
        default:
            return state;
    }
}

export default recipesReducer;