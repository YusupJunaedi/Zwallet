import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFeather from 'react-native-vector-icons/Feather';

const InputAmount = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4" />
      <View style={style.header}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity>
            <IconFeather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={style.textHistory}>Transfer</Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 40}}>
          <TouchableOpacity onPress={() => console.log('di klik')}>
            <View style={style.cardContact}>
              <View>
                <Image
                  source={require('../Assets/image/hm1.jpg')}
                  style={{width: 52, height: 52, borderRadius: 10}}
                />
              </View>

              <View style={{flex: 1, paddingHorizontal: 10}}>
                <Text
                  style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
                  Samuel Suhi
                </Text>
                <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
                  +62 813-8492-9994
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.content}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TextInput
            keyboardType="numeric"
            placeholder="0.00"
            style={style.inputAmount}
          />
          <Text
            style={{
              color: '#7C7895',
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 20,
            }}>
            Rp120.000 Available
          </Text>
        </View>
        <View
          style={{paddingHorizontal: 20, marginTop: 50, position: 'relative'}}>
          <TextInput placeholder="Add some notes" style={style.inputNotes} />
          <Icon
            name="pencil-outline"
            size={25}
            color="rgba(169, 169, 169, 0.6)"
            style={{position: 'absolute', top: 10, left: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default InputAmount;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
  },
  header: {
    height: 220,
    backgroundColor: '#6379F4',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
  },
  textHistory: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  cardContact: {
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  inputAmount: {fontSize: 43, fontWeight: 'bold', color: '#6379F4'},
  inputNotes: {
    fontSize: 16,
    color: '#3A3D42',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    paddingRight: 20,
    paddingLeft: 35,
  },
});
