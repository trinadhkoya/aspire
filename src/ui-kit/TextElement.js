import React from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, Text} from 'react-native';

import {normalize} from 'utils/screen.utils';
import {font, fontSize} from 'utils/typefaces.utils';
import Colors from 'utils/colors.utils';

const TextElement = props => {
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
    ...rest
  } = props;

  return (
    <Text
      style={StyleSheet.flatten([
        styles.text,
        style && style,
        h1 && styles.bold,
        h2 && styles.bold,
        h3 && styles.bold,
        h4 && styles.bold,
        h1 &&
          StyleSheet.flatten([
            {fontSize: normalize(fontSize.extraLarge)},
            h1Style,
          ]),
        h2 &&
          StyleSheet.flatten([{fontSize: normalize(fontSize.large)}, h2Style]),
        h3 &&
          StyleSheet.flatten([
            {fontSize: normalize(fontSize.regular)},
            h3Style,
          ]),
        h4 &&
          StyleSheet.flatten([{fontSize: normalize(fontSize.medium)}, h4Style]),
        h4 &&
          StyleSheet.flatten([{fontSize: normalize(fontSize.small)}, h4Style]),
      ])}
      {...rest}>
      {children}
    </Text>
  );
};

TextElement.propTypes = {
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
};

TextElement.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  style: {},
  h1Style: {
    fontFamily: font.Bold,
  },
  h2Style: {
    fontFamily: font.Bold,
  },
  h3Style: {
    fontFamily: font.Regular,
    fontSize: 14,
    color: Colors.black,
  },
  h4Style: {
    fontFamily: font.Medium,
    fontSize: fontSize.small,
    color: Colors.black,
  },
  h5Style: {},
  children: '',
};

const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      android: {
        ...font.Regular,
      },
    }),
    color: Colors.white,
  },
  bold: {
    ...Platform.select({
      android: {
        ...font.Regular,
      },
    }),
    color: Colors.white,
  },
});

export default TextElement;
