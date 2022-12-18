import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';

import {normalize} from 'utils/screen.utils';
import {FontSize, Typeface} from 'utils/typefaces.utils';
import Colors from 'utils/colors.utils';

const TextView = props => {
  const {
    style,
    children,
    h1,
    h2,
    h3,
    h4,
    h5,
    h1Style,
    h2Style,
    h3Style,
    h4Style,
    h5Style,
    color,
    ...rest
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        h1 && {fontSize: normalize(FontSize.extraLarge)},
        h2 && {fontSize: normalize(FontSize.large)},
        h3 && {fontSize: normalize(FontSize.medium)},
        h4 && {fontSize: normalize(FontSize.small)},
        h5 && {fontSize: normalize(FontSize.extraSmall)},
        h1 && h1Style && StyleSheet.flatten(h1Style),
        h2 && h2Style && StyleSheet.flatten(h2Style),
        h3 && h3Style && StyleSheet.flatten(h3Style),
        h4 && h4Style && StyleSheet.flatten(h4Style),
        h5 && h5Style && StyleSheet.flatten(h5Style),
        {color: props.color},
      ])}
      {...rest}>
      {children}
    </Text>
  );
};

TextView.propTypes = {
  style: Text.propTypes.style,
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  h4: PropTypes.bool,
  h1Style: Text.propTypes.style,
  h2Style: Text.propTypes.style,
  h3Style: Text.propTypes.style,
  h4Style: Text.propTypes.style,
  children: PropTypes.node,
  color: PropTypes.string,
};

TextView.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  style: {},
  h1Style: {
    fontFamily: Typeface.Bold,
  },
  h2Style: {
    fontFamily: Typeface.Bold,
  },
  h3Style: {
    fontFamily: Typeface.Regular,
    fontSize: 14,
    color: Colors.black,
  },
  h4Style: {
    fontFamily: Typeface.Medium,
    fontSize: FontSize.small,
    color: Colors.black,
  },
  h5Style: {},
  children: '',
  color: Colors.black,
};
const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.regular,
    fontFamily: Typeface.Regular,
  },
});
export default TextView;
