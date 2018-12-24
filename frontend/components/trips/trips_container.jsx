import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import Trips from './trips';

const mSp = state => ({
  currentUser: state.entities.users[state.session.id],
  listings: state.entities.listings,
  bookings: state.entities.bookings,
});

const mDp = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(mSp, mDp)(Trips);
