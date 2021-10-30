import {takeEvery, call, put, select} from 'redux-saga/effects';
import {recipes} from '../types';
import api from '../../services/recipes.service';
import {
    fetchRecipes,
    fetchRecipesSuccess,
    fetchRecipesFailure
} from '../actions/recipes.actions';

// WORKERS
function* fetchRecipesWorker() {
    try {
        const recipes = yield call(api.get);
        yield put(fetchRecipesSuccess(recipes.data));
    } catch(error) {
        console.log('Request error', error);
        yield put(fetchRecipesFailure());
    }
}

// WATCHERS
export function* watchFetchRecipes() {
    yield takeEvery(recipes.FETCH_RECIPES, fetchRecipesWorker);
}