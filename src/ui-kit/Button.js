import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Button = props => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={props.onPress}
    style={[styles.touchableOpacityStyle, props.buttonStyle]}>
    <Text style={[props.titleStyle]}>{props.title}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};

Button.defaultProps = {
  onPress: () => {},
  title: '',
  titleStyle: {},
  buttonStyle: {},
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
    // width: 50,
    // height: 50,
  },
});

export default Button;
