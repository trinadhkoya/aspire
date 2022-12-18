'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import {Animated, Easing, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  flippableView: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backfaceVisibility: 'hidden',
  },
});

class FlipView extends React.Component {
  constructor(props) {
    super(props);

    const targetRenderState = this._getTargetRenderStateFromFlippedValue(
      props.isFlipped,
    );

    const frontRotationAnimatedValue = new Animated.Value(
      targetRenderState.frontRotation,
    );
    const backRotationAnimatedValue = new Animated.Value(
      targetRenderState.backRotation,
    );

    const interpolationConfig = {
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    };
    const frontRotation =
      frontRotationAnimatedValue.interpolate(interpolationConfig);
    const backRotation =
      backRotationAnimatedValue.interpolate(interpolationConfig);

    this.state = {
      frontRotationAnimatedValue,
      backRotationAnimatedValue,
      frontRotation,
      backRotation,
      isFlipped: props.isFlipped,
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isFlipped !== this.props.isFlipped) {
      this.flip();
    }
  };

  _getTargetRenderStateFromFlippedValue = isFlipped => {
    return {
      frontRotation: isFlipped ? 0.5 : 0,
      backRotation: isFlipped ? 1 : 0.5,
    };
  };

  render = () => {
    const rotateProperty = this.props.flipAxis === 'y' ? 'rotateY' : 'rotateX';

    return (
      <View {...this.props}>
        <Animated.View
          pointerEvents={this.state.isFlipped ? 'none' : 'auto'}
          style={[
            styles.flippableView,
            {
              transform: [
                {perspective: this.props.perspective},
                {[rotateProperty]: this.state.frontRotation},
              ],
            },
          ]}>
          {this.props.front}
        </Animated.View>
        <Animated.View
          pointerEvents={this.state.isFlipped ? 'auto' : 'none'}
          style={[
            styles.flippableView,
            {
              transform: [
                {perspective: this.props.perspective},
                {[rotateProperty]: this.state.backRotation},
              ],
            },
          ]}>
          {this.props.back}
        </Animated.View>
      </View>
    );
  };

  flip = () => {
    this.props.onFlip();

    const nextIsFlipped = !this.state.isFlipped;

    const {frontRotation, backRotation} =
      this._getTargetRenderStateFromFlippedValue(nextIsFlipped);

    setImmediate(() => {
      requestAnimationFrame(() => {
        Animated.parallel([
          this._animateValue(
            this.state.frontRotationAnimatedValue,
            frontRotation,
            this.props.flipEasing,
          ),
          this._animateValue(
            this.state.backRotationAnimatedValue,
            backRotation,
            this.props.flipEasing,
          ),
        ]).start(k => {
          if (!k.finished) {
            return;
          }
          this.setState({isFlipped: nextIsFlipped});
          this.props.onFlipped(nextIsFlipped);
        });
      });
    });
  };

  _animateValue = (animatedValue, toValue, easing) => {
    return Animated.timing(animatedValue, {
      toValue: toValue,
      duration: this.props.flipDuration,
      easing: easing,
      useNativeDriver: true,
    });
  };
}

FlipView.propTypes = {
  style: PropTypes.object,
  flipDuration: PropTypes.number,
  flipEasing: PropTypes.func,
  flipAxis: PropTypes.oneOf(['x', 'y']),
  front: PropTypes.object,
  back: PropTypes.object,
  perspective: PropTypes.number,
  onFlip: PropTypes.func,
  onFlipped: PropTypes.func,
  isFlipped: PropTypes.bool,
};

FlipView.defaultProps = {
  style: {},
  flipDuration: 500,
  flipEasing: Easing.out(Easing.ease),
  flipAxis: 'y',
  perspective: 1000,
  onFlip: () => {},
  onFlipped: () => {},
  isFlipped: false,
};

export default FlipView;
