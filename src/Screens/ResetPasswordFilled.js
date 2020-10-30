import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import {Input} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';

import Icon from 'react-native-vector-icons/Feather';

import * as color from '../styles/colorStyles';

const ResetPasswordFilled = ({navigation}) => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.emailOTP);

  const [pass1, setPass1] = useState('');
  const [pass2, setPass2] = useState('');
  const [msg1, setMsg1] = useState(null);
  const [msg2, setMsg2] = useState(null);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordd, setShowPasswordd] = useState(true);

  const mail = useSelector((state) => state.auth.email);
  // console.log('kambing',mail)

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleShowPasswordd = () => {
    setShowPasswordd(!showPasswordd);
  };

  const alertChangePassword = () =>
    Alert.alert(
      'Success',
      'Password has been changed',
      [{text: 'OK', onPress: () => navigation.navigate('Login')}],
      {cancelable: false},
    );

  const handleSubmit = () => {
    const checkPass = /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/;
    if (pass1 === '') {
      setMsg1('require');
    } else if (pass2 === '') {
      setMsg2('require');
    } else if (!checkPass.test(pass1)) {
      setMsg1(
        'Password must contain at least 1 number, and be longer than 8 charaters.',
      );
      setMsg2(null);
    } else if (pass1 !== pass2) {
      setMsg2('Password is not mathed');
    } else {
      const ApiUpdatePassword =
        'http://192.168.43.116:8000/auth/changePassword';
      Axios.patch(ApiUpdatePassword, {
        email: email,
        password: pass1,
      })
        .then((res) => alertChangePassword())
        .catch((err) => console.log(err));
    }
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
          Create and confirm your new password so
        </Text>
        <Text style={{...style.contentTextLoginDesc, marginBottom: 35}}>
          you can login to Zwallet
        </Text>
        <View style={{width: 350}}>
          <Input
            placeholder="Enter your password"
            leftIcon={<Icon name="lock" size={20} color={color.input} />}
            rightIcon={
              <Icon
                onPress={handleShowPassword}
                name={showPassword ? 'eye-off' : 'eye'}
                size={18}
                color={color.input}
              />
            }
            secureTextEntry={showPassword}
            inputContainerStyle={style.input}
            inputStyle={style.input}
            placeholderTextColor={color.input}
            onChangeText={(text) => {
              setPass1(text);
            }}
          />
          {msg1 === null ? null : <Text style={{color: 'red'}}>{msg1}</Text>}
          <Input
            placeholder="Enter your password"
            leftIcon={<Icon name="lock" size={20} color={color.input} />}
            rightIcon={
              <Icon
                onPress={handleShowPasswordd}
                name={showPasswordd ? 'eye-off' : 'eye'}
                size={18}
                color={color.input}
              />
            }
            secureTextEntry={showPasswordd}
            inputContainerStyle={{...style.input}}
            inputStyle={style.input}
            placeholderTextColor={color.input}
            onChangeText={(text) => {
              setPass2(text);
            }}
          />
          {msg2 === null ? null : <Text style={{color: 'red'}}>{msg2}</Text>}
        </View>
      </View>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <TouchableOpacity
          style={{...style.loginBtn, backgroundColor: '#6379F4', marginTop: 85}}
          onPress={() => {
            handleSubmit();
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPasswordFilled;

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#E5E5E5',
    flex: 1,
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
