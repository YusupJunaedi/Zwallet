import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {Button} from 'native-base';
import {useSelector, useDispatch} from 'react-redux';
import {addHistoryCreator} from '../../Redux/actions/actionHistory';
import PushNotification from 'react-native-push-notification';
import {showLocalNotification} from '../../Assets/notif/handleNotification';

const PinConfirmation = ({navigation}) => {
  const dispatch = useDispatch();
  const pinUser = useSelector((state) => state.auth.data.pin);
  const dataTransfer = useSelector((state) => state.dataTransfer);
  const dataUser = useSelector((state) => state.auth.data);
  const balanceLeft = parseInt(dataUser.amount) - parseInt(dataTransfer.amount);
  const [pin, setpin] = useState('');

  const channelId = 'test-notification';

  useEffect(() => {
    PushNotification.createChannel({
      channelId,
      channelName: 'test notification',
    });
  }, []);

  const handleSubmit = () => {
    if (pin == pinUser) {
      const data = {
        userIdTransfer: dataUser.id_user,
        userIdSubscription: dataTransfer.id_contact,
        amount: parseInt(dataTransfer.amount),
        balanceLeft: balanceLeft,
      };
      console.log(data);
      dispatch(addHistoryCreator(data));
      navigation.navigate('TransferDetail');
      showLocalNotification(
        'New Notification',
        `Transfer Success To ${dataTransfer.name}`,
        channelId,
      );
    } else {
      alertPinFailed();
    }
  };

  const alertPinFailed = () =>
    Alert.alert(
      'Warning!',
      'wrong pin number',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );

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
          <Button
            block
            style={{backgroundColor: '#6379F4', borderRadius: 15}}
            onPress={handleSubmit}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
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
