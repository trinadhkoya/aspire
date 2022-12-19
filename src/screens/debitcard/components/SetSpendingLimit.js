import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, TextInput, View} from 'react-native';
import Colors from 'utils/colors.utils';
import Badge from 'ui-kit/Badge';
import {labels, PRE_SET_VALUES} from 'utils/constants.utils';
import {FontSize, Typeface} from 'utils/typefaces.utils';
import TextView from 'ui-kit/TextView';
import Divider from 'ui-kit/Divider';
import IMAGES from 'assets';
import Button from 'ui-kit/Button';
import {Metrics} from 'utils/screen.utils';

const SetSpendingLimit = props => {
  const [initialBudget, setInitialBudget] = useState(1000);
  useEffect(() => {}, [initialBudget]);

  const onChangeText = val => {
    setInitialBudget(val);
  };

  const onSaveButtonPress = () => {
    props.onUpdateSpendLimit(initialBudget);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <React.Fragment>
          <View style={styles.fromTopSheet}>
            <Image style={styles.image} source={IMAGES.timer} />
            <TextView h3>Set a weekly debit card spending limit</TextView>
          </View>

          <View style={styles.inputView}>
            <View style={styles.badgeView}>
              <TextView bold color={Colors.white}>
                $
              </TextView>
            </View>
            <TextInput
              style={styles.input}
              keyboardType="default"
              onChangeText={text => setInitialBudget(text)}
              value={initialBudget.toString()}
              placeholder="Amount"
            />
          </View>

          <Divider height={1} />

          <View>
            <TextView h4 h4Style={styles.note}>
              Here weekly means the last 7 days - not the calendar week
            </TextView>
          </View>
        </React.Fragment>

        {/*Show Pre-Selected Values*/}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PRE_SET_VALUES.map((item, index) => {
            return (
              <>
                <Badge
                  key={'badge_item' + index}
                  title={`${item.currency} ${item.value}`}
                  titleStyle={{color: Colors.primaryColor}}
                  customStyles={styles.customBadge}
                  onPress={() => onChangeText(item.value)}
                />
              </>
            );
          })}
        </ScrollView>
      </View>
      <Button
        onPress={onSaveButtonPress}
        title={labels.save}
        buttonStyle={styles.btn}
        titleStyle={styles.btnTitleStyle}
      />
    </View>
  );
};

export default SetSpendingLimit;

const styles = StyleSheet.create({
  input: {
    paddingLeft: 12,
    fontFamily: Typeface.Bold,
    fontSize: FontSize.extraLarge,
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  container: {
    flex: 1,
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 10,
  },
  note: {
    fontSize: FontSize.medium,
    color: Colors.grey.dark,
    fontFamily: Typeface.Regular,
    paddingVertical: 10,
  },
  customBadge: {
    backgroundColor: Colors.primary70,
    opacity: 0.7,
    marginRight: 20,
    height: 40,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  innerContainer: {
    flexDirection: 'column',
    marginHorizontal: 24,
    flex: 1,
  },
  fromTopSheet: {
    flexDirection: 'row',
  },
  inputView: {
    marginTop: 13,
    height: 33,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  badgeView: {
    backgroundColor: Colors.primaryColor,
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    paddingVertical: 5,
    height: 24,
  },
  btnTitleStyle: {
    fontFamily: Typeface.DemiBold,
    color: Colors.white,
    fontSize: FontSize.regular,
  },
  btn: {
    position: 'absolute',
    bottom: 0,
    left: 20,
    right: 20,
    borderRadius: Metrics.btnBorderRadius,
  },
});
