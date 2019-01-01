import React from 'react';
import { Link } from 'react-router-dom';

const TripsItem = ({ booking, listing }) => {
  if (!booking || !listing) return null;
  return (
    <Link to={`/listings/${listing.id}`} target="_blank" className="trips-item-main">
      <img className="trips-listing-pic" src={listing.listing_photo_url} alt="" />
      <img className="trips-host-pic" src={listing.host_photo_url} alt="" />
      <span>
        With
        {' '}
        {listing.first_name}
      </span>
      <span className="trips-name">{listing.name}</span>
      <span>
        {booking.checkin_date}
        {' '}
        to
        {' '}
        {booking.checkout_date}
      </span>
      <span>
        {booking.num_guests}
        {' '}
        {booking.num_guests > 1 ? 'guests' : 'guest'}
      </span>
    </Link>
  );
};

export default TripsItem;
