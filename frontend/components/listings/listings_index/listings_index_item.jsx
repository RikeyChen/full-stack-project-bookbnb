import React from 'react';

const ListingsIndexItem = ({ listings }) => (
  <div>
    {listings.map(listing => (
      <div>
        <img src={listing.photo_url[0]} alt="" />
        <span>
          {listing.home_type}
          <span>.</span>
          {listing.num_beds}
          {listing.num_beds > 1 ? 'beds' : 'bed'}
        </span>
        <h1>{listing.name}</h1>
        <div>
          <div>$</div>
          <div>{listing.price}</div>
          <span>per night</span>
          <span>.</span>
          <span>Free cancellation</span>
        </div>
        <div className="listings-index-stars">
          <div className="stars-outer">
            <div className="stars-inner" />
          </div>
          <div id="listings-index-review-count">300</div>
        </div>
      </div>
    ))}
  </div>
);

export default ListingsIndexItem;
