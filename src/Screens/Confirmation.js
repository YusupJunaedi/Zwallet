import React, {useState} from 'react';
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
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {addDataTransferAmountNotesCreator} from '../Redux/actions/actionTransfer';
import * as color from '../styles/colorStyles';

const Confirmation = ({navigation}) => {
  const dispatch = useDispatch();

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const d = new Date();
  const month = monthNames[d.getMonth() + 1];
  const date = `${month} ${d.getDate()}, ${d.getFullYear()} `;
  const time = `${d.getHours()}.${d.getMinutes()}`;

  const dataTransfer = useSelector((state) => state.dataTransfer);
  const transferNote = useSelector((state) => state.dataTransfer.note);
  const dataUser = useSelector((state) => state.auth.data);
  const balanceLeft = parseInt(dataUser.amount) - parseInt(dataTransfer.amount);

  return (
    <View style={style.container}>
      <StatusBar barStyle="default" backgroundColor="#6379F4" />
      <View style={style.header}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <IconFeather name="arrow-left" size={30} color="white" />
          </TouchableOpacity>
          <Text style={style.textHistory}>Confirmation</Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 40}}>
          <TouchableOpacity onPress={() => console.log('di klik')}>
            <View style={style.cardContact}>
              <View>
                <Image
                  source={{uri: dataTransfer.image}}
                  style={{width: 52, height: 52, borderRadius: 10}}
                />
              </View>

              <View style={{flex: 1, paddingHorizontal: 10}}>
                <Text
                  style={{color: '#4D4B57', fontSize: 16, fontWeight: 'bold'}}>
                  {dataTransfer.name}
                </Text>
                <Text style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
                  {dataTransfer.no_hp}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style.content}>
        <View style={{marginTop: 20}}>
          <View style={style.containerTwoItems}>
            <View style={style.itemSmallContainer}>
              <View style={style.textContainer}>
                <Text style={style.textTitle}>Amount</Text>
                <Text style={style.textItem}>Rp{dataTransfer.amount}</Text>
              </View>
            </View>
            <View style={style.itemSmallContainer}>
              <View style={style.textContainer}>
                <Text style={style.textTitle}>Balance Left</Text>
                <Text style={style.textItem}>Rp{balanceLeft}</Text>
              </View>
            </View>
          </View>
          <View style={style.containerTwoItems}>
            <View style={style.itemSmallContainer}>
              <View style={style.textContainer}>
                <Text style={style.textTitle}>Date</Text>
                <Text style={style.textItem}>{date}</Text>
              </View>
            </View>
            <View style={style.itemSmallContainer}>
              <View style={style.textContainer}>
                <Text style={style.textTitle}>Time</Text>
                <Text style={style.textItem}>{time}</Text>
              </View>
            </View>
          </View>
          <View style={style.profileContainer}>
            <View style={style.textContainer}>
              <Text style={style.textTitle}>Notes</Text>
              <Text style={style.textItem}>{transferNote}</Text>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 80}}>
          <TouchableOpacity
            style={style.buttonLogin}
            onPress={() => navigation.navigate('PinConfirmation')}>
            <Text style={style.buttonLoginText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Confirmation;

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
  buttonLogin: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: color.primary,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonLoginText: {
    color: color.white,
    fontSize: 18,
    fontWeight: '700',
  },
  containerTwoItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemSmallContainer: {
    backgroundColor: color.white,
    // marginTop: '5%',
    marginBottom: '5%',
    marginHorizontal: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4%',
    borderRadius: 10,
    elevation: 3,
    flex: 1,
  },
  textContainer: {
    justifyContent: 'space-between',
    height: 50,
    // marginLeft: 20,
  },
  textTitle: {
    fontWeight: '400',
    fontSize: 16,
    color: color.subtitle,
  },
  textItem: {
    color: color.dark,
    fontSize: 18,
    fontWeight: '700',
  },
  // long item
  profileContainer: {
    backgroundColor: color.white,
    // marginTop: '5%',
    marginBottom: '5%',
    marginHorizontal: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4%',
    borderRadius: 10,
    elevation: 3,
  },
  profileFlex: {
    flexDirection: 'row',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textProfileContainer: {
    justifyContent: 'space-between',
    height: 50,
    marginLeft: 20,
  },
  textName: {
    fontWeight: '700',
    fontSize: 16,
  },
  textPhone: {
    color: '#7A7886',
    fontSize: 14,
  },
  sectionText: {
    fontSize: 18,
    fontWeight: '700',
    color: color.dark,
    marginHorizontal: '4%',
    marginVertical: '5%',
  },
});
