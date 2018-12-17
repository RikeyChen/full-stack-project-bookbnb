import React from 'react';
import { Route } from 'react-router-dom';

const ListingsIndexItem = ({ listing }) => {
  const item = () => (
    <div className="listings-index-item-master">
      <img src={listing.photo_url} alt="" />
      <span className="listings-index-item-home-type">
        {listing.home_type}
        <span className="dot">&#8226;</span>
        {listing.num_beds}
        {listing.num_beds > 1 ? 'beds' : 'bed'}
      </span>
      <h1>{listing.name}</h1>
      <div className="listings-index-item-pricing">
        {`$${listing.price} per night `}
        &#8226; Free cancellation
      </div>
      <div className="listings-index-stars">
        <div className="stars-outer">
          <div className="stars-inner" />
        </div>
        <div id="listings-index-review-count">300</div>
      </div>
    </div>
  );

  return (
    <Route to={`/listings/${listing.id}`} component={item} />
  );
};
export default ListingsIndexItem;
