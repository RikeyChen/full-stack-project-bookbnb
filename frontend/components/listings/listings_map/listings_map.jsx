import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
import MarkerManager from '../../../util/marker_manager';

const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng(),
});

const mapOptions = {
  center: { lat: 37.7758, lng: -122.435 },
  zoom: 13,
};

class ListingsMap extends React.Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    if (this.props.listing) {
      this.props.fetchListing(this.props.listingId);
    } else {
      this.registerListeners();
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  componentDidUpdate() {
    if (this.props.listing) {
      const targetListingKey = Object.keys(this.props.listings)[0];
      const targetListing = this.props.listings[targetListingKey];
      this.MarkerManager.updateMarkers([targetListing]);
    } else {
      this.MarkerManager.updateMarkers(this.props.listings);
    }
  }

  registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const {
        north, south, east, west,
      } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west },
      };
      this.props.updateFilter('bounds', bounds);
    });
    google.maps.event.addListener(this.map, 'click', (event) => {
      const coords = getCoordsObj(event.latLng);
      this.handleClick(coords);
    });
  }

  handleMarkerClick(listing) {
    this.props.history.push(`listings/${listing.id}`);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'listings/new',
      search: `lat=${coords.lat}&lng=${coords.lng}`,
    });
  }

  render() {
    return (
      <div ref={map => this.mapNode = map} id="map-container" />
    );
  }
}

export default withRouter(ListingsMap);
