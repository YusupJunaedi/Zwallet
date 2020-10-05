import {Button} from 'native-base';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';

const CardHistory = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{padding: 15}}>
        <Text style={{fontSize: 16, color: '#7A7886'}}>This Week</Text>
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
            Transfer
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: '#1EC15F', fontSize: 18, fontWeight: 'bold'}}>
            +Rp. 50.000
          </Text>
        </View>
      </View>
      <View style={style.cardHistori}>
        <View style={{}}>
          <Image
            source={require('../../Assets/image/hm2.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Nawirudin
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            Subscription
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: '#FF5B37', fontSize: 18, fontWeight: 'bold'}}>
            -Rp. 49.000
          </Text>
        </View>
      </View>

      <View style={{padding: 15}}>
        <Text style={{fontSize: 16, color: '#7A7886'}}>This Month</Text>
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
            Transfer
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: '#1EC15F', fontSize: 18, fontWeight: 'bold'}}>
            +Rp. 50.000
          </Text>
        </View>
      </View>
      <View style={style.cardHistori}>
        <View style={{}}>
          <Image
            source={require('../../Assets/image/hm2.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Nawirudin
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            Subscription
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: '#FF5B37', fontSize: 18, fontWeight: 'bold'}}>
            -Rp. 49.000
          </Text>
        </View>
      </View>
      <View style={style.cardHistori}>
        <View style={{}}>
          <Image
            source={require('../../Assets/image/hm3.jpg')}
            style={{width: 52, height: 52, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 10}}>
          <Text style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
            Wildan Dhilya
          </Text>
          <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
            Transfer
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Text style={{color: '#1EC15F', fontSize: 18, fontWeight: 'bold'}}>
            +Rp. 165.000
          </Text>
        </View>
      </View>
      <View style={style.btnGroup}>
        <Button style={style.btnArrow}>
          <IconFeather name="arrow-up" size={30} color="#FF5B37" />
        </Button>
        <Button style={style.btnArrow}>
          <IconFeather name="arrow-up" size={30} color="#1EC15F" />
        </Button>
        <Button style={style.btnFilter}>
          <Text style={{color: '#6379F4', fontSize: 18, fontWeight: 'bold'}}>
            Filter by Date
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default CardHistory;

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
});
