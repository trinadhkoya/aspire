import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {
  selectIsLoadingIndicatorDisplayed,
  selectLoadingIndicatorText,
} from 'redux/slices/appVariablesSlice';

const Loader = () => {
  const isLoadingIndicatorDisplayed = useSelector(
    selectIsLoadingIndicatorDisplayed,
  );
  const loadingIndicatorText = useSelector(selectLoadingIndicatorText);

  return (
    <View
      style={
        isLoadingIndicatorDisplayed ? styles.loadingOverlay : {display: 'none'}
      }>
      <ActivityIndicator size="large" color="#000" />
      <Text style={{textAlign: 'center', fontSize: 15, fontWeight: '700'}}>
        {loadingIndicatorText}
      </Text>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loadingOverlay: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    position: 'absolute',
    alignContent: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
});
