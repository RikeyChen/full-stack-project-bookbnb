import React from 'react';

const ListingsIndexItem = ({ listings }) => (
  <div>
    {listings.map(listing => (
      <div>
        <img src="" alt="" />
        <span>lodging type</span>
        <h1>Listing name</h1>
        <div>
          <div>$</div>
          <div>price</div>
          <span>per night</span>
          <span>Free cancellation</span>
        </div>
        <div className="booking-form-stars">
          <div className="stars-outer">
            <div className="stars-inner" />
          </div>
          <div id="booking-form-review-count">300</div>
        </div>
      </div>
    ))}
  </div>
);

