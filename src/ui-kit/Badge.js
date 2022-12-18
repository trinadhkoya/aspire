import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from 'utils/colors.utils';
import {font, fontSize} from 'utils/typefaces.utils';

const Badge = ({onPress, title}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  btnStyle: PropTypes.object,
};

Badge.defaultProps = {
  onPress: () => {},
  btnStyle: {},
  title: 'TITLE ME',
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
    fontSize: fontSize.small,
    alignItems: 'flex-start',
    fontFamily: font.DemiBold,
    alignSelf: 'center',
  },
});
export default Badge;
