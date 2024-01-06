import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {COLORS} from '../Utils/Theme';
import Icons from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ForgotPassword = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.white}></StatusBar>
      <View style={{marginTop: 20, marginStart: 20}}>
        <Icons
          name="arrowleft"
          size={28}
          color={COLORS.black}
          onPress={() => {
            console.log('clicked');
            navigation.goBack();
          }}
        />
        <Text
          style={{
            fontFamily: 'Mulish-Bold',
            fontSize: 24,
            color: COLORS.black,
            marginTop: 30,
          }}>
          Forgot Password
        </Text>

        <Text style={{marginTop: 30}}>Mobile</Text>
        <View
          style={{
            flexDirection: 'row',
            borderWidth: 0.2,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10,
            width: '95%',
          }}>
          <Icon
            name="cellphone"
            size={24}
            color={COLORS.primary}
            style={{
              marginStart: 10,
            }}></Icon>
          <TextInput
            placeholder="Mobile"
            keyboardType="number-pad"
            maxLength={10}
            style={{
              marginStart: 10,
              width: '95%',
            }}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('OTP');
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  button: {
    // width: '100%',
    height: 50,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // bottom: 20,
    borderRadius: 25,
    marginTop: 50,
    marginRight: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ForgotPassword;
