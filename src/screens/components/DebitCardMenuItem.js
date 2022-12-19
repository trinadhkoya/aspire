import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import TextView from "ui-kit/TextView";
import React from "react";
import Colors from "utils/colors.utils";
import { FontSize, Typeface } from "utils/typefaces.utils";
import IMAGES from "assets";
import PropTypes from "prop-types";

function DebitCardMenuItem({item, onToggle}) {
  return (
    <View style={styles.menuItem}>
      <Image
        style={styles.menuIcon}
        source={item.iconAssetUri}
        resizeMode="contain"
      />
      <View style={styles.menuItemTextViews}>
        <TextView h3 h3Style={styles.menuTitle}>
          {item.menuTitle}
        </TextView>
        <TextView h3 h3Style={styles.menuSubtitle}>
          {item.menuSubtitle}
        </TextView>
      </View>
      {item.itemEnabled && (
        <TouchableOpacity onPress={onToggle} style={styles.rightIcon}>
          <Image
            style={styles.menuIcon}
            source={IMAGES.toggle}
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

DebitCardMenuItem.propTypes = {
  onToggle: PropTypes.func,
};
DebitCardMenuItem.defaultProps = {
  onToggle: () => {},
};
const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flex: 1,
  },
  menuTitle: {
    fontFamily: Typeface.Medium,
    color: Colors.blue.dark,
    fontSize: FontSize.regular,
  },
  menuIcon: {
    width: 32,
    height: 32,
  },
  menuSubtitle: {
    fontSize: FontSize.medium,
    color: Colors.grey.dark,
    fontFamily: Typeface.Regular,
    marginTop: 2,
  },
  menuItemTextViews: {
    marginLeft: 12,
    flex: 1,
  },
  rightIcon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },
});

export default DebitCardMenuItem;
