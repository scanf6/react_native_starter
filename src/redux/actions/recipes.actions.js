import {recipes} from '../types';

export const fetchRecipes = () => ({type: recipes.FETCH_RECIPES});
export const fetchRecipesSuccess = (data) => ({type: recipes.FETCH_RECIPES_SUCCESS, payload: data});
export const fetchRecipesFailure = () => ({type: recipes.FETCH_RECIPES_FAILURE});