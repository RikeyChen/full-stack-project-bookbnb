import React from 'react';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../../util/route_util';
import ListingDetail from './listing_detail';

class ListingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const listingId = this.props.match.params.listingId;
    this.props.fetchListing(listingId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.listingId !== prevProps.match.params.listingId) {
      const nextListingId = this.props.match.params.listingId;
      this.props.fetchListing(nextListingId);
    }
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
              <div>
                <img src={this.props.listing.photo_url[1]} alt="photo2" />
              </div>
              <div>
                <img src={this.props.listing.photo_url[2]} alt="photo3" />
              </div>
            </div>
            <div className="listing-show-pics-right-2">
              <div>
                <img src={this.props.listing.photo_url[3]} alt="photo4" />
              </div>
              <div>
                <img src={this.props.listing.photo_url[4]} alt="photo5" />
              </div>
            </div>
          </div>
        </header>
        <ListingDetail listing={this.props.listing} />
      </div>
    );
  }
}

export default ListingShow;
