import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'utils/colors.utils';
import IcoBack from 'assets/icons/Icoback';
import IcoBrandLogo from 'assets/icons/IcoBrandLogo';
// import colors from '../../assets/colors';
// import IcoBack from '../../assets/icons/misc/IcoBackIcon';
// import IcoBrandLogo from '../../assets/icons/tab/IcoBrandLogo';

const componentSize = 44;
const buttonSize = 24;

class ScreenHeader extends Component {
  renderLeftButton = () => (
    <TouchableOpacity
      onPress={this.props.onPressCancel}
      hitSlop={styles.touchArea}>
      <View style={styles.rightIcon}>
        <IcoBack width={24} height={24} fillColor={Colors.white} />
      </View>
    </TouchableOpacity>
  );

  renderRightButton = () => {
    const {
      onPressRightButton,
      rightButtonDisabled,
      rightButtonComponent,
      showRightButton,
    } = this.props;

    if (showRightButton) {
      return (
        <TouchableOpacity
          disabled={rightButtonDisabled}
          activeOpacity={0.7}
          hitSlop={styles.touchArea}
          onPress={onPressRightButton}>
          {rightButtonComponent()}
        </TouchableOpacity>
      );
    } else {
      return <IcoBrandLogo />;
    }
  };

  render() {
    const {
      showRightButton,
      segmentedComponent,
      paddingTop,
      backgroundColor,
      title,
      showLeftIcon,
    } = this.props;
    const customStyles = [
      styles.container,
      {
        paddingTop: paddingTop,
        backgroundColor: backgroundColor,
      },
    ];
    return (
      <SafeAreaView style={customStyles}>
        <View style={styles.headerOuterWrap}>
          <View style={styles.headerInnerWrap}>
            {showLeftIcon && (
              <View style={styles.left}>
                <View style={styles.right}>{this.renderLeftButton()}</View>
              </View>
            )}
            <View
              style={showRightButton ? styles.centerAbsolute : styles.center}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.right}>{this.renderRightButton()}</View>
          </View>
          <View style={{flex: 1}}>{segmentedComponent()}</View>
        </View>
      </SafeAreaView>
    );
  }
}

ScreenHeader.propTypes = {
  title: PropTypes.string,
  darkContent: PropTypes.bool,
  showCancel: PropTypes.bool,
  showRightButton: PropTypes.bool,
  rightButtonComponent: PropTypes.func,
  onPressRightButton: PropTypes.func,
  rightButtonDisabled: PropTypes.bool,
  segmentedComponent: PropTypes.func,
  paddingTop: PropTypes.number,
  onPressCancel: PropTypes.func,
  showLeftIcon: PropTypes.bool,
};

ScreenHeader.defaultProps = {
  title: '',
  darkContent: false,
  showCancel: false,
  showRightButton: false,
  rightButtonDisabled: false,
  rightButtonComponent: () => {},
  onPressRightButton: () => {},
  segmentedComponent: () => {},
  onPressCancel: () => {},
  showLeftIcon: true,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
    zIndex: 210,
    backgroundColor: Colors.white,
  },

  headerOuterWrap: {
    flex: 1,
    width: '100%',
  },
  headerInnerWrap: {
    flexDirection: 'row',
    height: 44,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  left: {
    width: 44,
    height: 44,
    left: 20,
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  centerAbsolute: {
    position: 'absolute',
    flex: 1,
    width: '100%',
  },
  right: {
    minWidth: 44,
    height: 44,
  },
  rightIcon: {
    position: 'absolute',
    top: (componentSize - buttonSize) / 2,
    right: 20,
  },
  touchArea: {
    right: 20,
    bottom: 20,
    top: 20,
  },
});

export default ScreenHeader;
