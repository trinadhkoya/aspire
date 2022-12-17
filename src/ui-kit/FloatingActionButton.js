import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

function FloatingActionButton(props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={props.onPress}
      style={styles.touchableOpacityStyle}>
      <View style={styles.floatingButtonStyle} />
    </TouchableOpacity>
  );
}

FloatingActionButton.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  size: PropTypes.oneOf('small', 'large'),
  overlayColor: PropTypes.string,
  color: PropTypes.string,
  placement: PropTypes.string,
};

FloatingActionButton.defaultProps = {
  onPress: () => {},
  title: '',
  size: 'size',
  overlayColor: '',
  color: '',
  placement: '',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

export default FloatingActionButton;
