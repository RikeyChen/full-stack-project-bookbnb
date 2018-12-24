import { merge } from 'lodash';
import { UPDATE_FILTER, CLEAR_FILTERS } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {
    northEast: { lat: 37.82781631655672, lng: -122.40538841247559 },
    southWest: { lat: 37.72374705944836, lng: -122.46461158752442 },
  },
  guests: 1,
  max_price: 1000,
  dates: {},
});

const filtersReducer = (oldState = defaultFilters, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value };
      return merge({}, oldState, newFilter);
    case CLEAR_FILTERS:
      return defaultFilters;
    default:
      return oldState;
  }
};

export default filtersReducer;
