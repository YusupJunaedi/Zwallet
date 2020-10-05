import React, {useState} from 'react';
import {View, Text, Alert, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Input} from 'react-native-elements';
import {useSelector} from 'react-redux';
import Axios from 'axios';
import {changePassword} from '../utils/http';

import * as color from '../styles/colorStyles';

const ResetPassword = ({navigation}) => {
  const [form, setForm] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
    wrongPassword: '',
  });

  const email = useSelector((state) => state.auth.data.email);

  const alertChangePassword = () =>
    Alert.alert(
      'Success',
      'Password has been changed',
      [{text: 'OK', onPress: () => navigation.navigate('Profile')}],
      {cancelable: false},
    );

  const handleSubmit = () => {
    setForm({...form, wrongPassword: ''});
    const API = 'http://192.168.43.116:8000/auth/checkPassword';
    Axios.post(API, {email: email, password: form.currentPassword})
      .then((data) => {
        const passwordUser = data.data.data.passwordUser;
        const ApiUpdatePassword =
          'http://192.168.43.116:8000/auth/changePassword';
        Axios.patch(ApiUpdatePassword, {
          email: email,
          password: form.newPassword,
        })
          .then((res) => alertChangePassword())
          .catch((err) => console.log(err));
      })
      .catch((err) => setForm({...form, wrongPassword: 'Wrong password!'}));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <Text style={styles.appText}>Zwallet</Text>
      </View>
      <View style={styles.containerBottom}>
        <Text style={styles.loginText}>Reset Password</Text>
        <Text style={styles.loginInfoText}>
          Create and confirm your new password so you can login to Zwallet.
        </Text>
        <Input
          placeholder="Current password"
          leftIcon={<Icon name="lock" size={20} color={color.primary} />}
          rightIcon={<Icon name="eye-off" size={18} color={color.primary} />}
          secureTextEntry={true}
          inputStyle={styles.input}
          inputContainerStyle={styles.input}
          placeholderTextColor={color.input}
          errorMessage={form.wrongPassword}
          value={form.currentPassword}
          onChangeText={(Text) => setForm({...form, currentPassword: Text})}
        />
        <Input
          placeholder="Create new password"
          leftIcon={<Icon name="lock" size={20} color={color.primary} />}
          rightIcon={<Icon name="eye-off" size={18} color={color.primary} />}
          secureTextEntry={true}
          inputStyle={styles.input}
          inputContainerStyle={styles.input}
          placeholderTextColor={color.input}
          value={form.newPassword}
          onChangeText={(Text) => setForm({...form, newPassword: Text})}
        />
        <Input
          placeholder="Confirm new password"
          leftIcon={<Icon name="lock" size={20} color={color.primary} />}
          rightIcon={<Icon name="eye-off" size={18} color={color.primary} />}
          secureTextEntry={true}
          inputStyle={styles.input}
          inputContainerStyle={styles.input}
          placeholderTextColor={color.input}
          value={form.repeatPassword}
          onChangeText={(Text) => setForm({...form, repeatPassword: Text})}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonLogin}>
          <Text style={styles.buttonLoginText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.backgroud,
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
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
    textAlign: 'center',
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
