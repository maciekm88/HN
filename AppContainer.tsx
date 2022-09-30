import React from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';

//components
import App from './App';

const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
