import React, {useEffect} from 'react';
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
import {useSelector, useDispatch} from 'react-redux';
import {getDataHistoryCreator} from '../Redux/actions/actionHistory';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);

  useEffect(() => {
    dispatch(getDataHistoryCreator(user.id_user));
  }, [user.amount]);

  return (
    <View style={style.container}>
      <View style={style.profile}>
        <View style={style.imgProfile}>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image
              source={{uri: user.image}}
              style={{width: 52, height: 52, borderRadius: 10}}
            />
          </TouchableOpacity>
        </View>
        <View style={{flexWrap: 'wrap'}}>
          <Text style={{fontSize: 18}}>Hello</Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            {user.username}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end', padding: 20}}>
          <Icon name="bell-o" size={25} />
        </View>
      </View>
      <View style={{paddingHorizontal: 20}}>
        <CardSaldo dataUser={user} />
        <BtnTransferTopUp navigation={navigation} />
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
            <TouchableOpacity onPress={() => navigation.navigate('AllHistory')}>
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
