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
          <div>G</div>
          {listing.max_guests}
          {listing.max_guests > 1 ? 'guests' : 'guest'}
          <div>BR</div>
          {listing.num_bedrooms}
          {listing.num_bedrooms > 1 ? 'bedrooms' : 'bedroom'}
          <div>BD</div>
          {listing.num_beds}
          {listing.num_beds > 1 ? 'beds' : 'bed'}
          <div>BA</div>
          {listing.num_bathrooms}
          bath
        </div>
      </header>
      <div className="listing-detail-description">{listing.description}</div>
      <div className="listing-detail-contact-btn">
        Contact Host
      </div>
      <hr />
      <section className="listing-detail-amenities">
        <h1>Amenities</h1>

      </section>
      <hr />
    </div>
    <div className="listing-detail-book-box-spacer">
      <div className="listing-detail-book-box">Booking Box Form Goes inside this Div</div>
    </div>
  </div>
);

export default ListingDetail;
