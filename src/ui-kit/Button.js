import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'utils/colors.utils';
import TextView from 'ui-kit/TextView';
import {FontSize, Typeface} from 'utils/typefaces.utils';

const Button = ({buttonStyle, onPress, title, titleStyle}) => (
  <TouchableOpacity
    activeOpacity={0.7}
    onPress={onPress}
    style={[styles.container, buttonStyle]}>
    <TextView style={[styles.textStyle, titleStyle]}>{title}</TextView>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  buttonStyle: PropTypes.object,
};

Button.defaultProps = {
  title: '',
  titleStyle: {},
  buttonStyle: {},
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primaryColor,
  },
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    fontFamily: Typeface.DemiBold,
  },
});

export default Button;
