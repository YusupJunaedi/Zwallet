import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import Axios from 'axios';
import {useDispatch} from 'react-redux';
import {addEmailOTP} from '../Redux/actions/actionAuth';

import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';

const ResetPassword1 = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const alertSendEmail = () =>
    Alert.alert(
      'Success',
      'Check your email to get the OTP code',
      [{text: 'OK', onPress: () => navigation.navigate('OtpConfirmation')}],
      {cancelable: false},
    );

  const handleSubmit = () => {
    const API = 'http://192.168.43.116:8000/auth/sendEmail';
    Axios.post(API, {
      email: email,
    })
      .then((res) => {
        console.log(res);
        dispatch(addEmailOTP(email));
        alertSendEmail();
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{...style.mainContiner}}>
      <View style={{...style.header}}>
        <Text style={{fontSize: 30, color: '#6379F4'}}>Zwallet</Text>
      </View>

      <View style={{...style.secContainer, backgroundColor: 'white'}}>
        <Text style={{...style.contentTextLogin, fontSize: 25}}>
          Reset Password
        </Text>
        <Text style={{...style.contentTextLoginDesc}}>
          Enter your Zwallet e-mail so we can send
        </Text>
        <Text style={{...style.contentTextLoginDesc, marginBottom: 35}}>
          you a password reset link
        </Text>
        <View style={{width: 350}}>
          <Input
            placeholder="Enter your e-mail"
            leftIcon={<Icon name="mail" size={20} color={color.input} />}
            inputContainerStyle={style.input}
            inputStyle={style.input}
            placeholderTextColor={color.input}
            keyboardType="email-address"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <TouchableOpacity
          style={{...style.loginBtn, backgroundColor: '#6379F4'}}
          onPress={() => handleSubmit()}>
          <Text style={{color: 'white', fontSize: 20}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword1;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E5E5E5',
    // flex: 1
  },
  header: {
    height: 150,
    alignItems: 'center',
    paddingTop: 50,
    // flex: 1
  },
  secContainer: {
    alignItems: 'center',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,

    // flex: 1
  },
  contentTextLogin: {
    textAlign: 'center',
    paddingTop: 35,
    paddingBottom: 15,
  },
  contentTextLoginDesc: {
    textAlign: 'center',
    paddingVertical: 5,
    paddingLeft: 60,
    paddingRight: 60,
    color: '#3A3D42',
  },
  input: {
    fontSize: 16,
    borderColor: color.input,
  },
  loginBtn: {
    width: 350,
    height: 60,
    borderRadius: 12,
    marginTop: 160,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpBtn: {
    marginBottom: 40,
  },
});
