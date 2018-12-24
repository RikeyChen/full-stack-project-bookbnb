import * as ListingApiUtil from '../util/listing_api_util';
import { receiveBookings, receiveIndexBookings } from './booking_actions';

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_TRIP_LISTINGS = 'RECEIVE_TRIP_LISTINGS';

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings,
});

export const receiveTripListings = listings => ({
  type: RECEIVE_TRIP_LISTINGS,
  listings,
});

export const receiveListing = ({ listing, user }) => ({
  type: RECEIVE_LISTING,
  listing,
  user,
});

export const fetchListings = filters => dispatch => (
  ListingApiUtil.fetchListings(filters)
    .then(payload => (
      dispatch(receiveListings(payload.listings)),
      dispatch(receiveIndexBookings(payload.bookings))
    ))
);
export const fetchListing = listingId => dispatch => (
  ListingApiUtil.fetchListing(listingId)
    .then(payload => (
      dispatch(receiveListing({ listing: payload.listing, user: payload.user })),
      dispatch(receiveBookings(payload.bookings))
    ))
);
