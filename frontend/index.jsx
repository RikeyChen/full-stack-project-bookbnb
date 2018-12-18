import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id },
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.onclick = function (event) {
    if (!event.target.matches('.booking-form-guests-dropdown-btn')) {
      const dropdowns = document.getElementsByClassName('booking-form-guests-dropdown');
      if (dropdowns[0].id === 'show') {
        dropdowns[0].id = 'hidden';
      }
    }
  };

  ReactDOM.render(<Root store={store} />, root);
});
