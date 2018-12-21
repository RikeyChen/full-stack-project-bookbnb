import { merge } from 'lodash';
import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {},
  guests: {},
  max_price: {},
});

const filtersReducer = (oldState = defaultFilters, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case UPDATE_FILTER:
      const newFilter = { [action.filter]: action.value }; return merge({}, oldState, newFilter);
    default:
      return oldState;
  }
};

export default filtersReducer;
