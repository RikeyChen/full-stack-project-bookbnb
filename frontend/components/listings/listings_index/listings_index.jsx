import React from 'react';
import ListingsIndexItem from './listings_index_item';
import ListingsMap from '../listings_map/listings_map';
import ListingsIndexSidebar from './listings_index_sidebar';

class ListingsIndex extends React.Component {
  render() {
    return (
      <div className="listings-index-master">
        <ListingsIndexSidebar />
        <div className="listings-index-map-container">
          <main className="listings-index-main">
            <header>300+ homes</header>
            <div className="listings-index-items">
              {this.props.listings.map(listing => (
                <ListingsIndexItem listing={listing} key={listing.id} />
              ))}
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
