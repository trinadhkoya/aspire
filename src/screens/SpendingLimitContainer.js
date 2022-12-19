import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import SetSpendingLimit from "../components/SetSpendingLimit";
import Colors from "utils/colors.utils";
import { SCREEN_HEIGHT } from "utils/constants.utils";
import { Metrics } from "utils/screen.utils";
import Header from "ui-kit/Header";

const SpendingLimitContainer = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.innerContainer}>
        <SetSpendingLimit />
      </View>
    </SafeAreaView>
  );
};

export default SpendingLimitContainer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondaryColor,
    flex: 1,
  },
  innerContainer: {
    backgroundColor: Colors.white,
    marginTop: SCREEN_HEIGHT * 0.1,
    borderRadius: Metrics.borderRadius,
  },
});
