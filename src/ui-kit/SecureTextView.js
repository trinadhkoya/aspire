import {View, StyleSheet} from 'react-native';
import Circle from 'ui-kit/Circle';
import React from 'react';
import PropTypes from 'prop-types';
import {font as Font} from 'utils/typefaces.utils';

const SecureTextView = props => {
  return (
    <View style={styles.secureDigitsView}>
      {Array.from({length: props.size}).map((item, index) => {
        return <Circle key={index.to} height={8} width={8} />;
      })}
    </View>
  );
};

SecureTextView.propTypes = {
  size: PropTypes.number,
};
SecureTextView.defaultProps = {
  size: 4,
};
const styles = StyleSheet.create({
  secureDigitsView: {
    flexDirection: 'row',
    letterSpacing: 3.5,
    fontFamily: Font.DemiBold,
    marginRight: 24,
  },
});
export default SecureTextView;
