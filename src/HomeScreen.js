import React, {useState, UseEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {COLORS} from '../Utils/Theme.js';
import Icons from 'react-native-vector-icons/MaterialIcons.js';

const Home = () => {
  const profile =
    'https://media.licdn.com/dms/image/D4D22AQF2lWsIiD8FdA/feedshare-shrink_800/0/1682008229496?e=2147483647&v=beta&t=XIMt5kFOLWuyRFaqETPZe5b7qIjmiaB6YdmzuevDYmQ';
  return (
    <ScrollView style={styles.root}>
      <View height={'100%'}>
        <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

        {/* header */}
        <View style={styles.headerContainer}>
          <View style={styles.profileContainer}>
            <Image
              source={{
                uri: profile,
              }}
              style={styles.profileImage}
            />
            <Text style={styles.usernameText}>Username</Text>
          </View>

          <Icons
            name="power-settings-new"
            size={28}
            color={COLORS.red}
            style={{marginEnd: 10}}
          />
        </View>

        {/* product */}
        <View
          backgroundColor={COLORS.white}
          style={{
            flexDirection: 'row',
            borderRadius: 10,
            marginTop: 15,
            marginStart: 15,
            marginEnd: 15,
            elevation: 5,
            height: 170,
            flex: 1,
          }}>
          <Image
            backgroundColor={COLORS.gray}
            source={{
              uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
            }}
            style={{
              width: 80,
              height: '90%',
              resizeMode: 'contain',
              margin: 10,
              borderRadius: 10,
            }}
          />
          <View style={{flex: 1}}>
            <Text style={styles.titleText}>Title sdfiuvgbsdjkfgbskjd</Text>
            <Text styles={{marginTop: 20}}>Title sdfiuvgbsdjkfgbskjd</Text>
          </View>
        </View>

        <View
          height={150}
          backgroundColor={COLORS.white}
          style={{
            alignItems: 'center',
            alignContent: 'center',
            borderRadius: 10,
            marginTop: 15,
            marginStart: 15,
            marginEnd: 15,
            elevation: 5,
          }}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Aligns items at the ends of the container
    marginTop: 10,
    marginEnd: 10,
    marginStart: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 50,
    marginStart: 5,
  },
  usernameText: {
    color: COLORS.primary,
    fontSize: 16,
    marginStart: 15,
    justifyContent: 'center',
    fontFamily: 'Mulish-ExtraBold',
  },
  titleText: {
    color: COLORS.black,
    marginTop: 12,
    marginStart: 5,
    fontSize: 17,
    fontFamily: 'Mulish-ExtraBold',
    marginEnd: 10,
  },
});

export default Home;
