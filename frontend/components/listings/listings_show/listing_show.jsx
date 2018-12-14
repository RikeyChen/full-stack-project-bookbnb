import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';

class ListingShow extends React.Component {
  componentDidMount() {
    console.log('IM HERE');

    const listingId = this.props.match.params.listingId;
    this.props.fetchListing(listingId);
  }

  render() {
    if (this.props.listing === undefined) return null;
    return (
      <div className="listing-show-main">
        <header className="listing-show-pics-container">
          <div className="listing-show-pics-left">
            <img src={this.props.listing.photo_url[0]} alt="photo1" />
          </div>
          <div className="listing-show-pics-right">
            <div className="listing-show-pics-right-1">
              <img src={this.props.listing.photo_url[1]} alt="photo2" />
              <img src={this.props.listing.photo_url[2]} alt="photo3" />
            </div>
            <div className="listing-show-pics-right-2">
              <img src={this.props.listing.photo_url[3]} alt="photo4" />
              <img src={this.props.listing.photo_url[4]} alt="photo5" />
            </div>
          </div>
        </header>
        <h1>Listing Detail Comp Goes Here</h1>
      </div>
    );
  }
}

export default ListingShow;
