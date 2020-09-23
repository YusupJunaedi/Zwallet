import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import {Button} from 'native-base';

const Register = () => {
  return (
    <View style={style.body}>
      <View style={style.compHeader}>
        <Text style={style.textZwallet}>Zwallet</Text>
      </View>
      <View style={style.compFormRegister}>
        <View style={style.formHeader}>
          <Text style={{fontSize: 24, color: '#3A3D42', fontWeight: 'bold'}}>
            Sign Up
          </Text>
          <Text style={style.textDescRegister}>
            Create your account to access Zwallet.
          </Text>
        </View>
        <View style={style.inputUser}>
          <View style={style.inputUsername}>
            <TextInput
              style={style.TextInput}
              placeholder="Enter your username"
            />
            <IconSimple
              name="user"
              size={30}
              color="rgba(169, 169, 169, 0.6)"
              style={{position: 'absolute', top: 10, left: 23}}
            />
          </View>
          <View style={style.inputEmail}>
            <TextInput
              style={style.TextInput}
              placeholder="Enter your e-mail"
            />
            <Icon
              name="email-outline"
              size={30}
              color="rgba(169, 169, 169, 0.6)"
              style={{position: 'absolute', top: 10, left: 23}}
            />
          </View>
          <View style={style.inputPassword}>
            <TextInput
              style={style.TextInput}
              placeholder="Enter your password"
            />
            <IconIon
              name="ios-lock-closed-outline"
              size={30}
              color="rgba(169, 169, 169, 0.6)"
              style={{position: 'absolute', top: 10, left: 23}}
            />
            <TouchableOpacity
              style={{position: 'absolute', top: 10, right: 23}}>
              <Icon name="eye-off" size={30} color="rgba(169, 169, 169, 0.6)" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.compButton}>
          <Button block style={{backgroundColor: '#DADADA', borderRadius: 15}}>
            <Text style={{color: '#88888F', fontSize: 18, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </Button>
        </View>
        <View style={style.signUp}>
          <Text style={{fontSize: 16, color: 'rgba(58, 61, 66, 0.8)'}}>
            Already have an account? Let’s
          </Text>
          <TouchableOpacity>
            <Text style={{fontSize: 16, color: '#6379F4', fontWeight: 'bold'}}>
              {' '}
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
  compFormRegister: {
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
  textDescRegister: {
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
  inputUsername: {
    paddingHorizontal: 25,
    position: 'relative',
  },
  inputEmail: {
    marginTop: 30,
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
  compButton: {
    paddingHorizontal: 20,
    marginTop: 70,
  },
  signUp: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
