import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {Button} from 'native-base';
import PushNotification from 'react-native-push-notification';
import {showLocalNotification} from '../../Assets/notif/handleNotification';

const BtnTransferTopUp = ({navigation}) => {
  const channelId = 'test-notification';

  useEffect(() => {
    PushNotification.createChannel({
      channelId,
      channelName: 'test notification',
    });
  }, []);

  return (
    <View style={style.cardActions}>
      <View style={style.buttonCard}>
        <Button
          block
          style={{
            height: 50,
            marginRight: 10,
            borderRadius: 10,
            backgroundColor: '#E5E8ED',
          }}
          onPress={() => navigation.navigate('Search')}>
          <IconFeather name="arrow-up" size={35} color="#608DE2" />
          <Text style={style.textButton}>Transfer</Text>
        </Button>
      </View>
      <View style={style.buttonCard}>
        <Button
          block
          style={{
            height: 50,
            marginLeft: 10,
            borderRadius: 10,
            backgroundColor: '#E5E8ED',
          }}
          onPress={() =>
            showLocalNotification(
              'New Notification',
              'Selamat Datang',
              channelId,
            )
          }>
          <IconFeather name="plus" size={35} color="#608DE2" />
          <Text style={style.textButton}>Top Up</Text>
        </Button>
      </View>
    </View>
  );
};

export default BtnTransferTopUp;

const style = StyleSheet.create({
  cardActions: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
  },
  buttonCard: {
    flex: 1,
  },
  textButton: {
    color: '#514F5B',
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
});
