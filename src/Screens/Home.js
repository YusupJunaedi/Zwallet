import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BtnTransferTopUp from '../Components/BtnTransferTopUp/BtnTransferTopUp';
import CardHistoryHome from '../Components/cardHistory/CardHistoryHome';
import CardSaldo from '../Components/cardSaldo/CardSaldo';

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.profile}>
        <View style={style.imgProfile}>
          <Image
            source={require('../Assets/image/hm6.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <Text style={{fontSize: 18}}>Hello</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Robert Chandler
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', padding: 20}}>
          <Icon name="bell-o" size={25} />
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <CardSaldo />
        <BtnTransferTopUp />
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Text style={{color: '#514F5B', fontSize: 18, fontWeight: 'bold'}}>
              Transaction History
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity>
              <Text style={{color: '#6379F4', fontSize: 14}}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <CardHistoryHome />
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
  },
  profile: {
    height: 100,
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgProfile: {
    marginHorizontal: 20,
    flexWrap: 'wrap',
  },
});
