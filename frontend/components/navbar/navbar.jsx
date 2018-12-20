import React from 'react';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.setInput = this.setInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const input = document.getElementById('searchbar');
    const autocomplete = new google.maps.places.Autocomplete(input);
    google.maps.event.addDomListener(window, 'load', autocomplete);
    let address;
    autocomplete.addListener('place_changed', () => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        this.setState({
          input: address,
        });
        this.handleSubmit();
      } else {
        address = autocomplete.getPlace().formatted_address;
        this.setState({
          input: address,
        });
        this.handleSubmit();
      }
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      const input = document.getElementById('searchbar');
      const autocomplete = new google.maps.places.Autocomplete(input);
      google.maps.event.addDomListener(window, 'load', autocomplete);
      let address;
      autocomplete.addListener('place_changed', () => {
        if (!autocomplete.getPlace().formatted_address) {
          address = autocomplete.getPlace().name;
          this.setState({
            input: address,
          });
          this.handleSubmit();
        } else {
          address = autocomplete.getPlace().formatted_address;
          this.setState({
            input: address,
          });
          this.handleSubmit();
        }
      });
    }
  }

  handleSubmit(e) {
    const geocoder = new google.maps.Geocoder();

    geocoder.geocode({ address: this.state.input }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        const lat = results[0].geometry.location.lat();
        const lng = results[0].geometry.location.lng();
        this.props.history.push(`/listings?lat=${lat}&lng=${lng}`);
      } else {
        this.props.history.push('/listings?lat=34.019956&lng=-118.824270');
      }
    });

    if (e) {
      e.preventDefault();
    }

    this.setState({ input: '' });
  }

  setInput(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }


  render() {
    const {
      currentUser, logout, openModal, location, clearSessionErrors, clearErrors,
    } = this.props;

    let searchBar;
    if (location.pathname === '/') {
      searchBar = null;
    } else {
      searchBar = (<input id="searchbar" type="text" placeholder="Try San Francisco" value={this.state.input} onSubmit={this.handleSubmit} onChange={this.setInput('input')} />);
    }

    let display;
    if (currentUser === undefined) {
      display = (
        <div className="navbar-search-links-innerdiv">
          <nav className="navbar-search">
            {searchBar}
          </nav>
          <nav className={location.pathname === '/' ? 'navbar-links-splash' : 'navbar-links'}>
            <button>Become a host</button>
            <button>Help</button>
            <button onClick={() => {
              openModal('Sign up');
              clearSessionErrors();
            }}
            >
              Sign up
            </button>
            <button onClick={() => {
              openModal('Log in');
              clearSessionErrors();
            }}
            >
              Log in
            </button>
          </nav>
        </div>
      );
    } else {
      display = (
        <div className="navbar-search-links-innerdiv">
          <nav className="navbar-search">
            {searchBar}
          </nav>
          <nav className="navbar-links">
            <button>Become a host</button>
            <button>Trips</button>
            <button>Help</button>
            <button onClick={() => {
              logout();
              clearErrors();
            }}
            >
              Logout

            </button>
          </nav>
        </div>
      );
    }

    return (
      <div className="navbar-search-links-outterdiv">
        {display}
      </div>
    );
  }
}
export default NavBar;
