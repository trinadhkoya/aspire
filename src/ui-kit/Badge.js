import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from 'utils/colors.utils';
import {FontSize, Typeface} from 'utils/typefaces.utils';

const Badge = ({onPress, title, customStyles, titleStyle}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={Object.assign({}, styles.container, customStyles)}>
      <Text style={[styles.btnText, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  customStyles: PropTypes.object,
  titleStyle: PropTypes.object,
};

Badge.defaultProps = {
  onPress: () => {},
  customStyles: {},
  title: 'TITLE ME',
  titleStyle: {},
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    borderTopEndRadius: 5,
    padding: 10,
  },
  btnText: {
    color: Colors.primaryTextColor,
    fontSize: FontSize.small,
    alignItems: 'flex-start',
    fontFamily: Typeface.DemiBold,
    alignSelf: 'center',
  },
});
export default Badge;
