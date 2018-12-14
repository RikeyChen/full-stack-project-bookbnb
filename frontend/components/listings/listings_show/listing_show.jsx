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
    // let photoLink;
    // if (this.props.listing.photo_url) {
    //   photoLink = this.props.listing_url;
    // } else {
    //   photoLink = 'CHEESE';
    // }

    // console.log(photoLink);
    return (
      <div className="listing-show-main">
        <header className="listing-show-pics-container">
          <div className="listing-show-pics-left">
            <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6b56683902cd31fb8fbcc81e6484f14875d0159/lst1-1.jpg" alt="photo1" />
          </div>
          <div className="listing-show-pics-right">
            <div className="listing-show-pics-right-1">
              <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6b56683902cd31fb8fbcc81e6484f14875d0159/lst1-1.jpg" alt="photo2" />
              <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6b56683902cd31fb8fbcc81e6484f14875d0159/lst1-1.jpg" alt="photo3" />
            </div>
            <div className="listing-show-pics-right-2">
              <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6b56683902cd31fb8fbcc81e6484f14875d0159/lst1-1.jpg" alt="photo4" />
              <img src="/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBCZz09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c6b56683902cd31fb8fbcc81e6484f14875d0159/lst1-1.jpg" alt="photo5" />
            </div>
          </div>
          {/* <img src={this.props.listing.photo_url[1]} alt="photo2" />
          <img src={this.props.listing.photo_url[2]} alt="photo3" />
          <img src={this.props.listing.photo_url[3]} alt="photo4" />
          <img src={this.props.listing.photo_url[4]} alt="photo5" /> */}
        </header>
        <h1>Listing Detail Comp Goes Here</h1>
      </div>
    );
  }
}

export default ListingShow;
