import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'utils/colors.utils';
import {SCREEN_HEIGHT} from 'utils/constants.utils';
import IcoBack from 'assets/icons/Icoback';
import IcoBrandLogo from 'assets/icons/IcoBrandLogo';

const HEADER_HEIGHT = SCREEN_HEIGHT * 0.07;
const HEADER_ICON_SIZE = 24;

const ScreenHeader = props => {
  const renderLeftButton = () => (
    <TouchableOpacity onPress={props.onPressCancel} hitSlop={styles.touchArea}>
      <View style={styles.rightIcon}>
        <IcoBack width={24} height={24} fillColor={Colors.white} />
      </View>
    </TouchableOpacity>
  );

  const renderRightButton = () => {
    if (props.showRightButton) {
      return (
        <TouchableOpacity
          disabled={props.rightButtonDisabled}
          activeOpacity={0.7}
          hitSlop={styles.touchArea}
          onPress={props.onPressRightButton}>
          {props.rightButtonComponent()}
        </TouchableOpacity>
      );
    } else {
      return <IcoBrandLogo />;
    }
  };

  return (
    <SafeAreaView style={props.customStyles}>
      <View style={styles.headerOuterWrap}>
        <View style={styles.headerInnerWrap}>
          {props.showLeftIcon && (
            <View style={styles.left}>
              <View style={styles.right}>{renderLeftButton()}</View>
            </View>
          )}
          <View
            style={
              props.showRightButton ? styles.centerAbsolute : styles.center
            }>
            <Text style={styles.title}>{props.title}</Text>
          </View>
          <View style={styles.right}>{renderRightButton()}</View>
        </View>
      </View>
    </SafeAreaView>
  );
};

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
  onPressCancel: () => {},
  showLeftIcon: true,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: StatusBar.currentHeight,
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
    height: HEADER_HEIGHT,
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
    top: (HEADER_HEIGHT - HEADER_ICON_SIZE) / 2,
    right: 20,
  },
  touchArea: {
    right: 20,
    bottom: 20,
    top: 20,
  },
});

export default ScreenHeader;
