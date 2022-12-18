import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {store} from 'redux/store';
import Loader from 'ui-kit/Loader';
import NavStack from 'routing/NavStack';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <SafeAreaProvider>
          <StatusBar barStyle={'dark-content'} translucent={false} />
          <Loader isLoading={false} />
          <NavStack />
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
