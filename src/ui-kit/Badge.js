import PropTypes from 'prop-types';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Colors from 'utils/colors.utils';
import {SCREEN_WIDTH} from 'utils/constants.utils';
// import {SCREEN_WIDTH} from 'utils/screen.utils';
// import {Colors} from '../theme/Colors';

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
    width: SCREEN_WIDTH,
    backgroundColor: Colors.primaryColor,
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
  },
  btnText: {
    color: Colors.primaryDarkText,
    fontSize: 12,
    alignItems: 'flex-start',
    fontWeight: '500',
  },
});
export default Badge;
