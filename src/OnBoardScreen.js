import React, {useEffect} from 'react';
import { View, Button, Text, StyleSheet, Image, StatusBar} from 'react-native';
import {COLORS} from '../Utils/Theme';
import {VALUES} from '../Utils/Constants.js';
import OnBoard from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Login from './LoginScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Next = ({...props}) => (
  <View style={styles.nextContainer}>
    <Text style={styles.nextBtn} {...props}>
      Next
    </Text>
    <Icon
      name="keyboard-arrow-right"
      size={26}
      color={COLORS.primary}
      style={styles.icon}
    />
  </View>
);

const OnBoarding = ({navigation}) => {
  const slide01 = require('../assets/slide01.png');
  const slide02 = require('../assets/slide02.png');
  const slide03 = require('../assets/slide03.png');
  const Skip = ({...props}) => (
    <View style={styles.nextContainer}>
      <Text style={styles.skipBtn} {...props}>
        Skip
      </Text>
    </View>
  );
  const Done = ({...props}) => (
    <View style={styles.nextContainer}>
      <Text
        style={styles.doneBtn}
        {...props}
        onPress={() => {
          AsyncStorage.setItem(VALUES.IS_INTRO_SEEN, 'true');
          // alert('done clicked');
          navigation.replace('Login');
        }}>
        Done
      </Text>
    </View>
  );
  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? COLORS.primary : COLORS.gray;
    return (
      <View
        style={{
          width: 7,
          height: 7,
          marginHorizontal: 6,
          borderRadius: 5,
          backgroundColor,
        }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <OnBoard
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DoneButtonComponent={Done}
        DotComponent={Dots}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.replace('Login')}
        pages={[
          {
            backgroundColor: COLORS.white,
            image: <Image source={slide01} style={{width: '100%'}} />,
            title: (
              <Text style={styles.titleText}>
                Drive success with our tractors
              </Text>
            ),
            subtitle: (
              <Text style={styles.subTitle}>
                From small plots to vast landscapes, our tractors are built to
                conquer every terrain. Get ready to elevate your farming game
              </Text>
            ),
          },
          {
            backgroundColor: COLORS.white,
            image: <Image source={slide02} />,
            title: (
              <Text style={styles.titleText}>
                Unleash your farming potential
              </Text>
            ),
            subtitle: (
              <Text style={styles.subTitle}>
                Unlock the path to efficiency with our cutting edge tractors.
                Experience seamless performance that drives success{' '}
              </Text>
            ),
          },
          {
            backgroundColor: COLORS.white,
            image: <Image source={slide03} />,
            title: (
              <Text style={styles.titleText}>
                Efficiency in motion, field conquerors
              </Text>
            ),
            subtitle: (
              <Text style={styles.subTitle}>
                Step into the future of agriculture with our technologically
                advanced tractors.
              </Text>
            ),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  nextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nextBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
    fontSize: 17,
  },
  skipBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 17,
  },
  doneBtn: {
    fontWeight: 'bold',
    fontSize: 17,
    color: COLORS.primary,
    marginRight: 15,
  },
  icon: {
    marginRight: 15,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.black,
  },
  subTitle: {
    marginTop: 15,
    marginStart: 15,
    marginEnd: 15,
    textAlign: 'center',
  },
});

export default OnBoarding;
