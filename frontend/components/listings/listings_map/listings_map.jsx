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
  constructor(props) {
    super(props);
    this.state = {
      center: {
        lat: mapOptions.center.lat,
        lng: mapOptions.center.lng,
      },
    };
  }

  componentDidMount() {
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
    if (this.props.listing) {
      this.props.fetchListing(this.props.listingId);
    } else {
      this.registerListeners();
    }
    this.search = this.props.location.search;
    this.newURL = new URLSearchParams(this.search);
    const newLat = parseFloat(this.newURL.get('lat'));
    const newLng = parseFloat(this.newURL.get('lng'));
    const center = { lat: newLat, lng: newLng };

    if (this.props.location.search === '') {
      this.props.history.push(`/listings?lat=${this.state.center.lat}&lng=${this.state.center.lng}`);
    } else {
      this.setState({ center });
      this.map.setCenter(center);
    }

    this.MarkerManager.updateMarkers(this.props.listings);
  }

  componentDidUpdate(prevProps) {
    if (this.props.listing) {
      const targetListingKey = Object.keys(this.props.listings)[0];
      const targetListing = this.props.listings[targetListingKey];
      this.MarkerManager.updateMarkers([targetListing]);
    }
    console.log(prevProps);

    if (prevProps.location.search !== this.props.location.search) {
      if (this.props.location.search === '') {
        this.props.history.push(`/listings?lat=${this.state.center.lat}&lng=${this.state.center.lng}`);
      }

      this.search = this.props.location.search;
      this.newURL = new URLSearchParams(this.search);
      const newLat = parseFloat(this.newURL.get('lat'));
      const newLng = parseFloat(this.newURL.get('lng'));
      const center = { lat: newLat, lng: newLng };
      this.setState({ center });
      this.map.setCenter(center);
    }
    this.MarkerManager.updateMarkers(this.props.listings);
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

  // handleClick(coords) {
  //   this.props.history.push({
  //     pathname: 'listings/new',
  //     search: `lat=${coords.lat}&lng=${coords.lng}`,
  //   });
  // }

  render() {
    return (
      <div ref={map => this.mapNode = map} id="map-container" />
    );
  }
}

export default withRouter(ListingsMap);
