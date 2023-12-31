import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Home from './components/Home';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
