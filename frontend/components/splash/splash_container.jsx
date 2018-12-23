import { connect } from 'react-redux';
import { updateFilter2 } from '../../actions/filter_actions';
import Splash from './splash';

const mDp = dispatch => ({
  updateFilter2: (filter, value) => dispatch(updateFilter2(filter, value)),
});

export default connect(null, mDp)(Splash);
