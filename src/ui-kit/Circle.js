import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import Colors from 'utils/colors.utils';

const DOT_HEIGHT = 20,
  DOT_WIDTH = 20;

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
  height: DOT_HEIGHT,
  width: DOT_WIDTH,
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: DOT_WIDTH / 2,
    marginHorizontal: 1.5,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 0.34, //just to match with number letter spacing
  },
});
export default Circle;
