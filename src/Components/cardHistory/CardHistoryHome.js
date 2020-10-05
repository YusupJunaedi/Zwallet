import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import colorStyle from '../../styles/colorStyles';

const CardHistoryHome = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);
  const history = useSelector((state) => state.history.historyHome);

  // console.log(`isi history => ${history.length}`);

  return (
    <View style={{flex: 1}}>
      {history.length !== undefined && history.length !== 0 ? (
        <>
          {history.map((item) => {
            return (
              <View style={style.cardHistori} key={item.id_history}>
                <View style={{}}>
                  <Image
                    source={{uri: item.image}}
                    style={{width: 52, height: 52, borderRadius: 10}}
                  />
                </View>
                <View style={{flex: 1, paddingHorizontal: 10}}>
                  <Text
                    style={{
                      color: '#4D4B57',
                      fontSize: 16,
                      fontWeight: 'bold',
                    }}>
                    {item.username}
                  </Text>
                  <Text
                    style={{color: '#7A7886', fontSize: 14, paddingTop: 10}}>
                    {item.transaction}
                  </Text>
                </View>
                <View style={{flex: 1, alignItems: 'flex-end'}}>
                  {/* color: {item.transaction === 'Transfer' ? colorStyle.success : colorStyle.error}, */}
                  <Text
                    style={
                      item.transaction === 'Transfer'
                        ? style.textTransactionPlus
                        : style.textTransactionMinus
                    }>
                    {item.transaction === 'Transfer' ? '+' : '-'}Rp.{' '}
                    {item.Amount}
                  </Text>
                </View>
              </View>
            );
          })}
        </>
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#7A7886', fontSize: 24, fontWeight: 'bold'}}>
            No history
          </Text>
        </View>
      )}
    </View>
  );
};

export default CardHistoryHome;

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
  textTransactionPlus: {
    color: '#1EC15F',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTransactionMinus: {
    color: '#FF5B37',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
