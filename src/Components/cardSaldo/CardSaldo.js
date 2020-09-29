import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CardSaldo = ({dataUser}) => {
  return (
    <View style={style.cardPrice}>
      <Text style={{color: `#D0D0D0`, fontSize: 14}}>Balance</Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 24,
          fontWeight: 'bold',
          marginVertical: 10,
        }}>
        Rp. {dataUser.amount}
      </Text>
      <Text style={{color: '#DFDCDC', fontSize: 14}}> {dataUser.no_hp} </Text>
    </View>
  );
};

export default CardSaldo;

const style = StyleSheet.create({
  cardPrice: {
    height: 130,
    borderRadius: 20,
    backgroundColor: '#6379F4',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});
