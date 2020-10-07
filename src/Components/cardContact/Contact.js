import {Button} from 'native-base';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {
  getDataContactCreator,
  getQuickContactCreator,
} from '../../Redux/actions/actionContact';
import {addDataTransferCreator} from '../../Redux/actions/actionTransfer';

const Contact = ({navigation, search}) => {
  console.log(search.length);
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.data);
  const quickContact = useSelector((state) => state.contact.quick);
  const id_user = useSelector((state) => state.auth.data.id_user);

  useEffect(() => {
    dispatch(getDataContactCreator(id_user));
    dispatch(getQuickContactCreator(id_user));
  }, []);

  const addDataTranser = (id, name, image, no_hp) => {
    const data = {
      id_contact: id,
      name: name,
      image: image,
      no_hp: no_hp,
    };

    dispatch(addDataTransferCreator(data));
    navigation.navigate('InputAmount');
  };

  const renderItem = ({item}) => (
    <View style={style.cardHistori}>
      <View>
        <TouchableOpacity
          onPress={() =>
            addDataTranser(item.id_contact, item.name, item.image, item.no_hp)
          }>
          <Image
            source={{uri: item.image}}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
          {item.no_hp}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={{flex: 1}}>
      {search.length !== 0 ? null : quickContact.length ? (
        <>
          <View style={{padding: 15}}>
            <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
              Quick Access
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            {quickContact.map((item) => {
              return (
                <View style={style.cardQuick}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 52, height: 52, borderRadius: 10}}
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: 'bold',
                      color: '#4D4B57',
                    }}>
                    {item.name.substring(0, 10)}
                  </Text>
                </View>
              );
            })}
          </View>
        </>
      ) : null}
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
          Contacts
        </Text>
        <Text style={{fontSize: 14, color: '#8F8F8F', marginTop: 10}}>
          {contact.length} Contact Founds
        </Text>
      </View>
      {contact.length ? (
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={contact}
            renderItem={renderItem}
            keyExtractor={(item) => item.id_contact}
          />
        </SafeAreaView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 24, color: '#514F5B', fontWeight: 'bold'}}>
            Contact not found!
          </Text>
        </View>
      )}
    </View>
  );
};

export default Contact;

const style = StyleSheet.create({
  cardHistori: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  btnGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 20,
  },
  btnArrow: {
    width: 57,
    height: 57,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  btnFilter: {
    width: 189,
    height: 57,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  cardQuick: {
    width: 96,
    height: 146,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
