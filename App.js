import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {store} from 'redux/store';
import Loader from 'ui-kit/Loader';
import NavStack from 'routing/NavStack';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Loader />
          <NavStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

