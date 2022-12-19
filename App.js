import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import Router from 'routing/Router';
import {LogBox} from 'react-native';
import store from 'redux/store';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Router />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
