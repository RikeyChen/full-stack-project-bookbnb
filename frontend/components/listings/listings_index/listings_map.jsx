import React from 'react';

class ListingsMap extends React.component {
  componentDidMount() {
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13,
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div ref={map => this.mapNode = map} />
    );
  }
}

export default ListingsMap;
