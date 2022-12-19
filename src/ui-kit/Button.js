import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import Colors from "utils/colors.utils";
import TextView from "ui-kit/TextView";

const Button = ({buttonStyle, onPress, title, titleStyle}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.touchableOpacityStyle, buttonStyle]}>
    <TextView style={[titleStyle]}>{title}</TextView>
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
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
  },
});

export default Button;
