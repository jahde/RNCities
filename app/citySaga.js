import {
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from './constants';

import GetCities from './api';
import { put, takeEvery } from 'redux-saga/effects';

function* citiesSaga() {
  yield takeEvery(FETCH_CITIES, fetchCities)
}

function* fetchCities() {
  try {
    const cities = yield GetCities();
    yield put({ type: FETCH_CITIES_SUCCESS, cities })
  } catch(err) {
    yield put({ type: FETCH_CITIES_FAILURE })
  }
}

export default citiesSaga;
