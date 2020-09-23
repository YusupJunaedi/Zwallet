import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import CardHistory from '../Components/cardHistory/CardHistory';

const History = () => {
  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4" />
      <View style={style.header}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity>
            <IconFeather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            History
          </Text>
        </View>
      </View>
      <View style={style.content}>
        {/* <View style={{padding: 20}}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>This Week</Text>
        </View> */}
        <CardHistory />
      </View>
    </View>
  );
};

export default History;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
  },
  header: {
    height: 80,
    backgroundColor: '#6379F4',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  content: {
    flex: 1,
  },
});
