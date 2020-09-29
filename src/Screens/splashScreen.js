import React from 'react';
import {View, Text} from 'react-native';

const splashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Login',
        },
      ],
    });
  }, 2000);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6379F4',
      }}>
      <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
        Zwallet
      </Text>
    </View>
  );
};

export default splashScreen;
