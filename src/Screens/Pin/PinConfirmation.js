import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Button} from 'native-base';

const PinConfirmation = () => {
  const [pin, setpin] = useState('');
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity>
            <IconFeather name="arrow-left" size={30} color="#4D4B57" />
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4D4B57',
            }}>
            Enter Your Pin
          </Text>
        </View>
      </View>
      <View style={style.compPin}>
        <View style={style.pinHeader}>
          <Text style={style.textDescPin}>
            Enter your 6 digits PIN for confirmation to continue transferring
            money.
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
          <Button block style={{backgroundColor: '#DADADA', borderRadius: 15}}>
            <Text style={{color: '#88888F', fontSize: 18, fontWeight: 'bold'}}>
              Transfer Now
            </Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

export default PinConfirmation;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
  },
  header: {
    height: 80,
  },
  content: {
    flex: 1,
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
    // textAlign: 'center',
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
