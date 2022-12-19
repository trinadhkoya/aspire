import React from 'react';
import {StyleSheet, View} from 'react-native';
import TextView from 'ui-kit/TextView';

const HomeContainer = () => (
  <View style={styles.container}>
    <TextView h2>Work in progress</TextView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
HomeContainer.propTypes = {};

export default HomeContainer;
