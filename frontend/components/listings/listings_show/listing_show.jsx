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
    let photoLink;
    if (this.props.listing) {
      photoLink = this.props.listing;
    } else {
      photoLink = 'CHEESE';
    }

    console.log(photoLink);
    return (
      <div className="listing-show-main">
        <header className="listing-show-pics-container">
          {/* <img src={this.props.listing.photoUrl[0]} alt="photo1" /> */}
          {/* <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" /> */}
        </header>
        <h1>Listing Detail Comp Goes Here</h1>
      </div>
    );
  }
}

export default ListingShow;