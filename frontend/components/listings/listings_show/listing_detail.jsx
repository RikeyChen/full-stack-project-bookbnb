import React from 'react';

const ListingDetail = ({ listing }) => (
  <div className="listing-detail-master">
    <div className="listing-detail-main-section">
      <header className="listing-detail-header">
        <div className="listing-detail-header-main">
          <div className="listing-detail-title-city">
            <h1>{listing.name}</h1>
            <span>{listing.city}</span>
          </div>
          <div className="listing-detail-host-pic">
            <img src="" alt="Host Profile" />
          </div>
        </div>
        <div className="listing-detail-core-amenities">
          <span>
            {listing.max_guests}
            {listing.max_guests > 1 ? 'guests' : 'guest'}
          </span>
          <span>
            {listing.num_bedrooms}
            {listing.num_bedrooms > 1 ? 'bedrooms' : 'bedroom'}
          </span>
          <span>
            {listing.num_beds}
            {listing.num_beds > 1 ? 'beds' : 'bed'}
          </span>
          <span>
            {listing.num_bathrooms}
            bath
          </span>
        </div>
      </header>
    </div>
    <div className="listing-detail-book-box-spacer">
      <div className="listing-detail-book-box">Booking Box Form Goes inside this Div</div>
    </div>
  </div>
);

export default ListingDetail;
