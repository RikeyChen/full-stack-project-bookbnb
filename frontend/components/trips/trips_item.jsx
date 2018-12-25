import React from 'react';

const TripsItem = ({ booking, listing }) => (
  <div>
    <img src={listing.listing_photo_url} alt="" />
    <img src={listing.host_photo_url} alt="" />
    <span>
      With
      {' '}
      {listing.first_name}
    </span>
    <span>{listing.name}</span>
    <span>
      {booking.checkin_date}
      {' '}
      to
      {' '}
      {booking.checkout_date}
    </span>
    <span>{booking.num_guests}</span>
  </div>
);

export default TripsItem;
