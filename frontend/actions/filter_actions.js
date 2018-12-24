import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value,
});

export const clearFilters = () => ({
  type: CLEAR_FILTERS,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
  dispatch(changeFilter(filter, value));
  return fetchListings(getState().ui.filters)(dispatch);
};

export const updateFilter2 = (filter, value) => (dispatch) => {
  dispatch(changeFilter(filter, value));
};
