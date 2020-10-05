import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import {authLogoutCreator, updateImgCreator} from '../Redux/actions/actionAuth';
import Axios from 'axios';

import * as color from '../styles/colorStyles';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);
  const [img, setImg] = useState(user.image);
  const [sourceImg, setsourceImg] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const handleLogout = () => {
    dispatch(authLogoutCreator());
    navigation.navigate('Login');
  };

  const selectPhotoTapped = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = response;

        console.log(source);
        setImg(source.uri);
        setsourceImg(source);
      }
    });
  };

  const updateImg = () => {
    dispatch(updateImgCreator(user.id_user, sourceImg));
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{marginVertical: 20, marginLeft: 20}}
        onPress={() => navigation.navigate('HomeApp')}>
        <Icon name="arrow-left" size={30} />
      </TouchableOpacity>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={selectPhotoTapped}>
          <Image source={{uri: img}} style={styles.profileImg} />
        </TouchableOpacity>
        <Pressable style={styles.editButton} onPress={() => updateImg()}>
          <Icon name="edit-2" size={14} color={color.subtitle} />
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
        <Text style={styles.textName}>{user.username}</Text>

        <Text style={styles.textNoPhone}>{user.no_hp}</Text>
      </View>
      <View style={styles.containerAllButton}>
        <TouchableOpacity style={styles.buttonItem}>
          <>
            <Text style={styles.textButton}>Personal Information</Text>
            <Icon name="arrow-right" size={25} color={color.subtitle} />
          </>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonItem}
          onPress={() => navigation.navigate('ResetPassword')}>
          <>
            <Text style={styles.textButton}>Change Password</Text>
            <Icon name="arrow-right" size={25} color={color.subtitle} />
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonItem}>
          <>
            <Text style={styles.textButton}>Change PIN</Text>
            <Icon name="arrow-right" size={25} color={color.subtitle} />
          </>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonItem}>
          <>
            <Text style={styles.textButton}>Notification</Text>
            <Switch
              trackColor={{false: color.disabled, true: color.primary}}
              thumbColor={isEnabled ? color.white : color.white}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </>
        </TouchableOpacity>
        <Button
          onPress={handleLogout}
          title="Logout"
          buttonStyle={styles.buttonLogout}
          titleStyle={{...styles.textButton, color: color.error}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.backgroud,
    flex: 1,
  },
  containerTop: {
    alignItems: 'center',
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  profileImgBlank: {
    width: 80,
    height: 80,
    borderRadius: 10,
    backgroundColor: '#EBEEF2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    marginTop: '4%',
    flexDirection: 'row',
    alignItems: 'center',
    width: 50,
    justifyContent: 'space-between',
  },
  editButtonText: {
    color: color.subtitle,
    fontSize: 16,
  },
  textName: {
    marginTop: '4%',
    fontWeight: '700',
    fontSize: 24,
    color: color.dark,
  },
  textPhone: {
    marginTop: '4%',
    fontWeight: '400',
    fontSize: 16,
    color: color.subtitle,
  },
  textNoPhone: {
    marginTop: '4%',
    fontWeight: '400',
    fontSize: 16,
    color: color.subtitle,
    fontStyle: 'italic',
  },
  containerAllButton: {
    marginVertical: '5%',
  },
  buttonItem: {
    backgroundColor: color.white,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    marginHorizontal: '4%',
    marginVertical: '3%',
    borderRadius: 10,
    height: 58,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '700',
    color: color.dark,
  },
  buttonLogout: {
    backgroundColor: color.white,
    elevation: 3,
    marginHorizontal: '4%',
    marginVertical: '3%',
    borderRadius: 10,
    height: 58,
  },
});

export default Profile;
