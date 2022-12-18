import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import Colors from 'utils/colors.utils';
import TextElement from 'ui-kit/TextElement';
import PropTypes from 'prop-types';

const Loader = ({isLoading, loadingIndicatorText}) => {
  if (isLoading) {
    return (
      <View style={styles.loadingOverlay}>
        <ActivityIndicator size="large" color={Colors.black} />
        <TextElement h3>{loadingIndicatorText}</TextElement>
      </View>
    );
  }
  return <></>;
};
Loader.propTypes = {
  loadingIndicatorText: PropTypes.string,
  isLoading: PropTypes.bool,
};
Loader.defaultProps = {
  loadingIndicatorText: 'Loading...',
  isLoading: false,
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
