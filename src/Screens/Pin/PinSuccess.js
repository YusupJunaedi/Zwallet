import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from 'native-base';
import {useDispatch} from 'react-redux';
import {logoutCreator} from '../../Redux/actions/actionAuth';

const PinSuccess = ({navigation}) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(logoutCreator());
    navigation.navigate('Login');
  };

  return (
    <View style={style.body}>
      <View style={style.compHeader}>
        <Text style={style.textZwallet}>Zwallet</Text>
      </View>
      <View style={style.compPin}>
        <View style={style.bodyPin}>
          <Icon name="check-circle" size={80} color="#1EC15F" />
          <Text
            style={{
              color: '#3A3D42',
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            PIN Successfully Created
          </Text>
          <Text
            style={{
              fontSize: 16,
              lineHeight: 28,
              color: 'rgba(58, 61, 66, 0.6)',
              textAlign: 'center',
              paddingHorizontal: 20,
              marginTop: 30,
            }}>
            Your PIN was successfully created and you can now access all the
            features in Zwallet. Login to your new account and start exploring
          </Text>
          <View style={style.compButton}>
            <Button
              block
              style={{backgroundColor: '#6379F4', borderRadius: 15}}
              onPress={() => handleSubmit()}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                Login Now
              </Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PinSuccess;

const style = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  compHeader: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textZwallet: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#6379F4',
  },
  compPin: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  bodyPin: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  compButton: {
    width: 400,
    paddingHorizontal: 20,
    marginTop: 80,
  },
});
