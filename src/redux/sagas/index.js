import { all } from '@redux-saga/core/effects';
import {watchFetchRecipes} from './recipes.saga';

function* rootSaga() {
    yield all([
        watchFetchRecipes(), // Dont forget to execute the saga
    ]);
}

export default rootSaga;