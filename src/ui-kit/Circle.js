import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'utils/colors.utils';

const Circle = props => {
  return (
    <View style={[styles.circle, {height: props.height, width: props.width}]} />
  );
};

Circle.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

Circle.defaultProps = {
  height: 20,
  width: 20,
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 20 / 2,
    marginHorizontal: 1.5,
    backgroundColor: Colors.white,
  },
});
export default Circle;
