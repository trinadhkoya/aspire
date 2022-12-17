import {View, StyleSheet} from 'react-native';
import Circle from 'ui-kit/Circle';
import React from 'react';
import PropTypes from 'prop-types';

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
    marginRight: 20,
  },
});
export default SecureTextView;
