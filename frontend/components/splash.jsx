import React from 'react';

class SplashPage extends React.Component {
  render() {
    return (
      <div>
        <div id="splash-pic">
          <div className="splash-search-container">
            <div className="splash-search">
              <h1>Find a place anywhere.</h1>
              <div>
                <div>
                  <span>WHERE</span>
                  <input type="text" id="splash-search-bar" />
                </div>
              </div>
              <div>
                <span>Check in</span>
                <span>Check out</span>
                DATE
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SplashPage;
