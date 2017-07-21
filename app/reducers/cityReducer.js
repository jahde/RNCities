import {
  ADD_CITY,
  ADD_LOCATION,
  FETCH_CITIES,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_FAILURE
} from '../constants';

const initialState = {
  cities: {
    Austin: {
      name: 'Austin',
      country: 'USA',
    },
    Seattle: {
      name: 'Seattle',
      country: 'USA',
    }
  }
}

export default function cityReducer(state = initialState, action) {
  switch(action.type) {
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
