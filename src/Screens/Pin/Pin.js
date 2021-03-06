import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {updatePinCreator} from '../../Redux/actions/actionAuth';

const Pin = ({navigation}) => {
  const dispatch = useDispatch();
  const idUser = useSelector((state) => state.auth.data.id_user);
  const createPin = useSelector((state) => state.auth.createPin);
  const [pin, setpin] = useState('');

  useEffect(() => {
    if (createPin) {
      return navigation.navigate('PinSuccess');
    }
  }, [createPin]);

  const handleSubmit = () => {
    dispatch(updatePinCreator(pin, idUser));
  };

  return (
    <View style={style.body}>
      <View style={style.compHeader}>
        <Text style={style.textZwallet}>Zwallet</Text>
      </View>
      <View style={style.compPin}>
        <View style={style.pinHeader}>
          <Text style={{fontSize: 24, color: '#3A3D42', fontWeight: 'bold'}}>
            Create Security PIN
          </Text>
          <Text style={style.textDescPin}>
            Create a PIN that’s contain 6 digits number for security purpose in
            Zwallet.
          </Text>
        </View>
        <View style={style.inputUser}>
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
        <View style={style.compButton}>
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

export default Pin;

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
  compPin: {
    flex: 1,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: 'white',
  },
  pinHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  textDescPin: {
    marginTop: 10,
    color: 'rgba(58, 61, 66, 0.6)',
    fontSize: 16,
    width: 350,
    textAlign: 'center',
    lineHeight: 23,
  },
  inputUser: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  inputPin: {
    borderWidth: 1,
    width: 47,
    height: 58,
    fontWeight: 'bold',
    fontSize: 24,
  },
  compButton: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 200,
  },
});
