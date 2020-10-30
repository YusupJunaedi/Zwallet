import React, {useEffect} from 'react';
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
import {Formik} from 'formik';
import * as yup from 'yup';
import {useDispatch} from 'react-redux';
import {authRegisterCreator} from '../../Redux/actions/actionAuth';
import {useSelector} from 'react-redux';

const reviewSchema = yup.object({
  username: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .matches(
      /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
      'password must be include lowerCase, upperCase, numbers and minimum 8 characters',
    ),
});

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const createRegister = useSelector((state) => state.auth.createUser);

  useEffect(() => {
    if (createRegister) {
      return navigation.navigate('Pin');
    }
  }, [createRegister]);

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
        <Formik
          initialValues={{username: '', email: '', password: ''}}
          validationSchema={reviewSchema}
          onSubmit={(values) => {
            dispatch(
              authRegisterCreator(
                values.username,
                values.email,
                values.password,
              ),
            );
          }}>
          {(props) => (
            <>
              <View style={style.inputUser}>
                <View style={style.inputUsername}>
                  <TextInput
                    style={style.TextInput}
                    placeholder="Enter your username"
                    onChangeText={props.handleChange('username')}
                    value={props.values.username}
                    onBlur={props.handleBlur('username')}
                  />
                  <IconSimple
                    name="user"
                    size={30}
                    color="#6379F4"
                    style={{position: 'absolute', top: 10, left: 23}}
                  />
                  {props.errors.username ? (
                    <Text style={{color: '#FF5B37', paddingLeft: 40}}>
                      {props.touched.username && props.errors.username}
                    </Text>
                  ) : null}
                </View>
                <View style={style.inputEmail}>
                  <TextInput
                    style={style.TextInput}
                    placeholder="Enter your e-mail"
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    onBlur={props.handleBlur('email')}
                  />
                  <Icon
                    name="email-outline"
                    size={30}
                    color="#6379F4"
                    style={{position: 'absolute', top: 10, left: 23}}
                  />
                  {props.errors.email ? (
                    <Text style={{color: '#FF5B37', paddingLeft: 40}}>
                      {props.touched.email && props.errors.email}
                    </Text>
                  ) : null}
                </View>
                <View style={style.inputPassword}>
                  <TextInput
                    secureTextEntry={true}
                    style={style.TextInput}
                    placeholder="Enter your password"
                    onChangeText={props.handleChange('password')}
                    value={props.values.password}
                    onBlur={props.handleBlur('password')}
                  />
                  <IconIon
                    name="ios-lock-closed-outline"
                    size={30}
                    color="#6379F4"
                    style={{position: 'absolute', top: 10, left: 23}}
                  />
                  {props.errors.password ? (
                    <Text style={{color: '#FF5B37', paddingLeft: 40}}>
                      {props.touched.password && props.errors.password}
                    </Text>
                  ) : null}
                  <TouchableOpacity
                    style={{position: 'absolute', top: 10, right: 23}}>
                    <Icon name="eye-off" size={30} color="#6379F4" />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={style.compButton}>
                <Button
                  block
                  style={{backgroundColor: '#6379F4', borderRadius: 15}}
                  onPress={props.handleSubmit}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Sign Up
                  </Text>
                </Button>
              </View>
            </>
          )}
        </Formik>
        <View style={style.signUp}>
          <Text style={{fontSize: 16, color: 'rgba(58, 61, 66, 0.8)'}}>
            Already have an account? Let’s
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
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
