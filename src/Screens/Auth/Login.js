import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import {Button} from 'native-base';
import {color} from 'react-native-reanimated';

const Login = ({navigation}) => {
  const [form, setform] = useState({email: '', password: ''});
  const [color, setcolor] = useState({
    active: '#6379F4',
    noActive: 'rgba(169, 169, 169, 0.6)',
    invalid: '#FF5B37',
  });
  const [colorBtnLogin, setcolorBtnLogin] = useState('#3A3D42');
  const [colorBtnEye, setcolorBtnEye] = useState('rgba(169, 169, 169, 0.6)');
  const [showPassword, setshowPassword] = useState(true);
  const msgInvalid = 'Email or Password Invalid';

  const formEmpty = () => {
    if (form.email === '' || form.password === '') {
      return true;
    } else {
      return false;
    }
  };

  const emptyPassword = () => {
    if (form.password === '') {
      return true;
    } else {
      return false;
    }
  };

  const emptyEmail = () => {
    if (form.email === '') {
      return true;
    } else {
      return false;
    }
  };

  const btnshowPassword = () => {
    if (colorBtnEye === '#6379F4') {
      setcolorBtnEye('rgba(169, 169, 169, 0.6)');
      setshowPassword(true);
    } else {
      setcolorBtnEye('#6379F4');
      setshowPassword(false);
    }
  };

  return (
    <View style={style.body}>
      <View style={style.compHeader}>
        <Text style={style.textZwallet}>Zwallet</Text>
      </View>
      <View style={style.compFormLogin}>
        <View style={style.formHeader}>
          <Text style={{fontSize: 24, color: '#3A3D42', fontWeight: 'bold'}}>
            Login
          </Text>
          <Text style={style.textDescLogin}>
            Login to your existing account to access all the features in
            Zwallet.
          </Text>
        </View>
        <View style={style.inputUser}>
          <View style={style.inputEmail}>
            <TextInput
              value={form.email}
              style={
                msgInvalid !== ''
                  ? style.TextInputinvalid
                  : emptyEmail()
                  ? style.TextInput
                  : style.TextInputActive
              }
              placeholder="Enter your e-mail"
              onChangeText={(Text) => setform({...form, email: Text})}
            />
            <Icon
              name="email-outline"
              size={30}
              color={
                msgInvalid !== ''
                  ? color.invalid
                  : form.email === ''
                  ? color.noActive
                  : color.active
              }
              style={{position: 'absolute', top: 10, left: 23}}
            />
          </View>
          <View style={style.inputPassword}>
            <TextInput
              secureTextEntry={showPassword}
              value={form.password}
              style={
                msgInvalid !== ''
                  ? style.TextInputinvalid
                  : emptyPassword()
                  ? style.TextInput
                  : style.TextInputActive
              }
              placeholder="Enter your password"
              onChangeText={(Text) => setform({...form, password: Text})}
            />
            <IconIon
              name="ios-lock-closed-outline"
              size={30}
              color={
                msgInvalid !== ''
                  ? color.invalid
                  : form.password === ''
                  ? color.noActive
                  : color.active
              }
              style={{position: 'absolute', top: 10, left: 23}}
            />
            <TouchableOpacity
              onPress={() => btnshowPassword()}
              style={{position: 'absolute', top: 10, right: 23}}>
              <Icon name="eye-off" size={30} color={colorBtnEye} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'flex-end', marginRight: 25, marginTop: 20}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: 'rgba(58, 61, 66, 0.8)',
            }}>
            Forgot password?
          </Text>
        </View>
        <View style={{alignItems: 'center', marginTop: 20}}>
          {msgInvalid !== '' ? (
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#FF5B37',
              }}>
              Email or Password Invalid
            </Text>
          ) : null}
        </View>
        <View style={style.compButton}>
          <Button
            block
            style={formEmpty() ? style.btnLogin : style.btnLoginActive}>
            <Text style={formEmpty() ? style.textLogin : style.textLoginActive}>
              Login
            </Text>
          </Button>
        </View>
        <View style={style.signUp}>
          <Text style={{fontSize: 16, color: 'rgba(58, 61, 66, 0.8)'}}>
            Don’t have an account? Let’s
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{fontSize: 16, color: '#6379F4', fontWeight: 'bold'}}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  compHeader: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textZwallet: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#6379F4',
  },
  compFormLogin: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  formHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  textDescLogin: {
    marginTop: 10,
    color: 'rgba(58, 61, 66, 0.6)',
    fontSize: 16,
    width: 300,
    textAlign: 'center',
    lineHeight: 23,
  },
  inputUser: {
    marginTop: 20,
  },
  inputEmail: {
    paddingHorizontal: 25,
    position: 'relative',
  },
  inputPassword: {
    paddingHorizontal: 25,
    position: 'relative',
    marginTop: 30,
  },
  TextInput: {
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
  },
  TextInputActive: {
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: '#6379F4',
  },
  TextInputinvalid: {
    fontSize: 16,
    paddingLeft: 40,
    paddingRight: 20,
    borderBottomWidth: 1.5,
    borderBottomColor: '#FF5B37',
  },
  compButton: {
    paddingHorizontal: 20,
    marginTop: 70,
  },
  btnLogin: {backgroundColor: '#DADADA', borderRadius: 15},
  btnLoginActive: {backgroundColor: '#6379F4', borderRadius: 15},
  textLogin: {color: '#88888F', fontSize: 18, fontWeight: 'bold'},
  textLoginActive: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  signUp: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
