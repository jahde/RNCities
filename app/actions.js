// import * as constants from './constants';
import {
  ADD_CITY,
  ADD_LOCATION,
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from './constants';

export function addCity(city) {
  return {
    type: ADD_CITY,
    city,
  }
}
