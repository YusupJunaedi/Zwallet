import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import IconFeather from 'react-native-vector-icons/Feather';
import Contact from '../Components/cardContact/Contact';

const Search = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeApp')}>
            <IconFeather name="arrow-left" size={30} color="#4D4B57" />
          </TouchableOpacity>
          <Text
            style={{
              paddingLeft: 20,
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4D4B57',
            }}>
            Find Receiver
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, position: 'relative'}}>
        <TextInput
          placeholder="Search receiver here"
          style={style.inputSearch}
        />
        <IconFeather
          name="search"
          size={25}
          color="#A9A9A9"
          style={{position: 'absolute', top: 10, left: 28}}
        />
      </View>
      <View style={style.content}>
        <Contact navigation={navigation} />
      </View>
    </View>
  );
};

export default Search;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafcff',
  },
  header: {
    height: 80,
  },
  content: {
    flex: 1,
  },
  inputSearch: {
    backgroundColor: 'rgba(58, 61, 66, 0.1)',
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 20,
    fontSize: 16,
  },
});
