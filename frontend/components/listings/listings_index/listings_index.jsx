import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMap from '../listings_map/listings_map';
import ListingsIndexSidebar from './listings_index_sidebar';

class ListingsIndex extends React.Component {
  render() {
    let homeCount = 0;
    const items = (
      this.props.listings.map((listing) => {
        homeCount += 1;
        return (
          <ListingsIndexItem listing={listing} key={listing.id} />
        );
      })
    );

    const suggestions = (
      homeCount === 0
        ? (
          <header>
            Try one of these awesome cities:
            <br />
            <br />
            <li>San Francisco</li>
            <li>New York</li>
            <li>Los Angeles</li>
            <li>Houston</li>
            <li>Seattle</li>
          </header>
        )
        : null
    );

    return (
      <div className="listings-index-master">
        <ListingsIndexSidebar updateFilter={this.props.updateFilter} updateFilter2={this.props.updateFilter2} maxPrice={this.props.maxPrice} clearFilters={this.props.clearFilters} minPrice={this.props.minPrice} />
        <div className="listings-index-map-container">
          <main className="listings-index-main">
            <header>{`${homeCount} homes in this area`}</header>
            {suggestions}
            <div className="listings-index-items">
              {items}
            </div>
          </main>
          <aside className="listings-index-map">
            <ListingsMap updateFilter={this.props.updateFilter} listings={this.props.listings} />
          </aside>
        </div>
      </div>
    );
  }
}

export default ListingsIndex;
