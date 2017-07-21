import {
  ADD_CITY,
  ADD_LOCATION,
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from '../constants';

const initialState = {
  cities: {},
  isFetching: false,
  error: false,
}

export default function cityReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_CITIES:
      return state
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        ...action.cities,
      }
    case FETCH_CITIES_FAILURE:
    case ADD_CITY:
      return {
        ...state,
        cities: {
          ...state.cities,
          [action.city.name]: {
            ...action.city,
          }
        }
      }
    default:
      return state;
  }
}
