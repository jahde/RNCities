// import * as constants from './constants';
import {
  ADD_CITY,
  ADD_LOCATION,
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from './constants';

import GetCities from './api';

export function addCity(city) {
  return {
    type: ADD_CITY,
    city,
  }
}

export function fetchCities() {
  return {
    type: FETCH_CITIES
  }
}

// function fetchCitiesSuccess(cities) {
//   return {
//     type: FETCH_CITIES_SUCCESS,
//     cities
//   }
// }
//
// export function fetchFromApi() {
//   return (dispatch) => {
//     dispatch(fetchCities())
//     GetCities()
//       .then(cities => {
//         dispatch(fetchCitiesSuccess(cities))
//       })
//       .catch(err => {
//         dispatch(fetchCitiesFailure())
//       })
//   }
// }
//
// function fetchCitiesFailure() {
//   return {
//     type: FETCH_CITIES_FAILURE
//   }
// }
