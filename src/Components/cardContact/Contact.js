import {Button} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const Contact = () => {
  return (
    <View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
          Quick Access
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <View style={style.cardQuick}>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4D4B57'}}>
            Doddy
          </Text>
          <Text style={{fontSize: 13, color: '#7A7886'}}>-9994</Text>
        </View>
        <View style={style.cardQuick}>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4D4B57'}}>
            Doddy
          </Text>
          <Text style={{fontSize: 13, color: '#7A7886'}}>-9994</Text>
        </View>
        <View style={style.cardQuick}>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#4D4B57'}}>
            Doddy
          </Text>
          <Text style={{fontSize: 13, color: '#7A7886'}}>-9994</Text>
        </View>
      </View>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 18, color: '#514F5B', fontWeight: 'bold'}}>
          Contacts
        </Text>
        <Text style={{fontSize: 14, color: '#8F8F8F', marginTop: 10}}>
          17 Contact Founds
        </Text>
      </View>
      <View style={style.cardHistori}>
        <View>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Samuel Suhi
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            +62 813-8492-9994
          </Text>
        </View>
      </View>
      <View style={style.cardHistori}>
        <View>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Samuel Suhi
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            +62 813-8492-9994
          </Text>
        </View>
      </View>
      <View style={style.cardHistori}>
        <View>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Samuel Suhi
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            +62 813-8492-9994
          </Text>
        </View>
      </View>
      <View style={style.cardHistori}>
        <View>
          <Image
            source={require('../../Assets/image/hm1.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Samuel Suhi
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            +62 813-8492-9994
          </Text>
        </View>
      </View>
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
