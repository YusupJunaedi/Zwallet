import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';
import Axios from 'axios';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {changePinCreator} from '../Redux/actions/actionAuth';

import * as color from '../styles/colorStyles';

const OtpConfirmation = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    wrongPassword: '',
  });
  const [pin, setpin] = useState('');
  const idUser = useSelector((state) => state.auth.emailOTP);

  const email = useSelector((state) => state.auth.emailOTP);

  const alertOTPFailed = () =>
    Alert.alert(
      'Failed',
      'OTP code is wrong',
      [{text: 'OK', onPress: () => console.log('Failed OTP')}],
      {cancelable: false},
    );

  const handleSubmit = () => {
    const API = 'http://192.168.43.116:8000/auth/checkOTP';
    Axios.post(API, {
      email: email,
    })
      .then((res) => {
        const OTP = res.data.data.code;
        if (OTP == pin) {
          navigation.navigate('ResetPasswordFilled');
        } else {
          alertOTPFailed();
        }
      })
      .catch((err) => setForm({...form, wrongPassword: 'Wrong password!'}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Icon name="arrow-left" size={30} color="#4D4B57" />
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4D4B57',
            }}>
            Confirm OTP
          </Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.loginInfoText}>
          Enter your current 6 digits Zwallet OTP below to continue to the next
          steps.
        </Text>

        <View style={styles.inputUser}>
          <SmoothPinCodeInput
            value={pin.toString()}
            cellStyle={{
              borderWidth: 2,
              borderRadius: 10,
              borderColor: 'rgba(147, 147, 147, 0.1)',
              padding: 10,
              width: 47,
              height: 58,
            }}
            autoFocus={true}
            codeLength={6}
            onTextChange={(code) => setpin(code)}
          />
        </View>
        <View style={styles.compButton}>
          <Button
            block
            style={{backgroundColor: '#6379F4', borderRadius: 15}}
            onPress={() => handleSubmit()}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Confirm
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default OtpConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroud,
  },
  header: {
    height: 80,
    backgroundColor: color.white,
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appText: {
    color: color.primary,
    fontSize: 26,
  },
  containerBottom: {
    flex: 4,
    backgroundColor: color.white,
    elevation: 3,
    paddingHorizontal: '8%',
    justifyContent: 'space-evenly',
  },
  loginText: {
    color: color.dark,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
  loginInfoText: {
    color: color.subtitle,
    fontSize: 16,
    textAlign: 'left',
  },
  input: {
    fontSize: 16,
    borderColor: color.primary,
  },
  textForgotPass: {
    textAlign: 'right',
    color: 'rgba(58, 61, 66, 0.8)',
    marginTop: 15,
  },
  buttonLogin: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: color.primary,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonLoginText: {
    color: color.white,
    fontSize: 18,
    fontWeight: '700',
  },
  buttonLoginDisabled: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: color.disabled,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonLoginTextDisabled: {
    color: color.disabledText,
    fontSize: 18,
    fontWeight: '700',
  },
  textSignUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textSignUp: {
    fontSize: 16,
  },
  textSignUpLink: {
    color: color.primary,
    fontSize: 16,
  },
});
