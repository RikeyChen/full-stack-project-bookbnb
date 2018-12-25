import React from 'react';

const TripsItem = ({ booking, listing }) => (
  <li className="trips-item-main">
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
  </li>
);

export default TripsItem;
