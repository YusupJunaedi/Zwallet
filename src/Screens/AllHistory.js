import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  Pressable,
  SafeAreaView,
  SectionList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {DateTime} from 'luxon';
import {getDataHistoryCreator} from '../Redux/actions/actionHistory';

import * as color from '../styles/colorStyles';

const AllHistory = ({navigation}) => {
  const dispatch = useDispatch();
  const thisWeek = useSelector((state) => state.history.thisWeek);
  const thisMonth = useSelector((state) => state.history.thisMonth);

  console.log(thisWeek);
  console.log(thisMonth);

  const DATA = [
    {
      date: 'This Week',
      data: thisWeek,
    },
    {
      date: 'This Month',
      data: thisMonth,
    },
  ];

  const Item = ({data}) => (
    <View style={styles.containerTransaction}>
      <View style={styles.profileContainer}>
        <Image source={{uri: data.image}} style={styles.profileImg} />
        <View style={styles.textHelloContainer}>
          <Text style={styles.textNameTransaction}>{data.username}</Text>
          <Text style={styles.textTransaction}>Transfer</Text>
        </View>
      </View>
      <Text
        style={
          data.transaction === 'Subscription'
            ? styles.textTransactionNumberSpending
            : styles.textTransactionNumberIncome
        }>
        {data.transaction === 'Subscription' ? '-' : '+'}Rp
        {data.Amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="default" backgroundColor={color.primary} />
      <View style={styles.header}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            paddingHorizontal: 10,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeApp')}>
            <Icon name="arrow-left" size={30} color="white" />
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
      <View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => <Item data={item} />}
          renderSectionHeader={({section: {date}}) => (
            <View style={styles.section}>
              <Text style={styles.sectionText}>{date}</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.buttonFilterContainer}>
              <Button
                icon={<Icon name="arrow-up" size={20} color={color.error} />}
                titleStyle={{color: color.dark}}
                buttonStyle={styles.buttonFillter}
                containerStyle={{elevation: 2, flex: 2, marginRight: 20}}
              />
              <Button
                // title="Transfer"
                icon={
                  <Icon name="arrow-down" size={20} color={color.success} />
                }
                titleStyle={{color: color.dark}}
                buttonStyle={styles.buttonFillter}
                containerStyle={{elevation: 2, flex: 2, marginRight: 20}}
              />
              <Button
                title="Filter by Date"
                titleStyle={{color: color.primary}}
                buttonStyle={styles.buttonFillter}
                containerStyle={{elevation: 2, flex: 6}}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroud,
    flex: 1,
    // justifyContent: 'space-evenly'
    // marginTop: 10,
  },
  header: {
    height: 80,
    backgroundColor: '#6379F4',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  // header
  containerHeader: {
    marginTop: '8%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
    backgroundColor: color.primary,
  },
  profileContainer: {
    flexDirection: 'row',
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  textHelloContainer: {
    justifyContent: 'space-between',
    height: 50,
    marginLeft: 20,
  },
  textHello: {
    fontSize: 16,
  },
  textName: {
    fontWeight: '700',
    fontSize: 18,
  },
  // 3 button
  buttonFilterContainer: {
    // marginVertical: '6%',
    marginTop: '4%',
    marginBottom: '30%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
  },
  buttonFillter: {
    backgroundColor: color.white,
    borderRadius: 10,
    height: 57,
    // width: 57,
  },
  // Transaction
  section: {
    // marginTop: '8%',
    marginVertical: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  dividerSeeAll: {
    color: color.primary,
    fontSize: 14,
  },
  containerTransaction: {
    backgroundColor: color.white,
    // marginTop: '5%',
    marginBottom: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4%',
    borderRadius: 10,
    elevation: 1,
  },
  textNameTransaction: {
    fontWeight: '700',
    fontSize: 16,
  },
  textTransaction: {
    color: '#7A7886',
    fontSize: 14,
  },
  textTransactionNumberIncome: {
    color: '#1EC15F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTransactionNumberSpending: {
    color: '#FF5B37',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTransactionNumberOutcome: {
    color: color.error,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AllHistory;
