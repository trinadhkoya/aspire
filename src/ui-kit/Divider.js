import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";
import Colors from "utils/colors.utils";

const Divider = props => (
  <View style={{height: props.height, backgroundColor: Colors.grey.light}} />
);

Divider.propTypes = {
  style: PropTypes.object,
  height: PropTypes.number,
};
Divider.defaultProps = {
  style: {},
  height: 5,
};

export default Divider;
