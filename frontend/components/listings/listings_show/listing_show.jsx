import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';

class ListingShow extends React.Component {
  componentDidMount() {
    const listingId = this.props.match.params.id;
    this.props.fetchListing(listingId);
  }

  render() {
    console.log(this.props);
    return (
      <div className="listing-show-main">
        <header className="listing-show-pics-container">
          ehbfjhewbfjhewb
          <img src={this.props.listing.photoUrl[0]} alt="photo1" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </header>
        <h1>Listing Detail Comp Goes Here</h1>
      </div>
    );
  }
}

export default ListingShow;
