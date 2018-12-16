import React from 'react';
import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import selectListingsByKeyType from '../../../reducers/selectors';

const mSp = state => {
  const =
  return ({
    listings: Object.values(state.entities.listings)
  })
}

