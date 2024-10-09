import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../assets/sparklight.jpg';
import {GoogleLogo} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';

const GetStarted = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('HomeTabs');
  };
  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="#055160" barStyle="dark-content" /> */}
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.name}>SparkLight</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.googleButton} onPress={handlePress}>
          <GoogleLogo
            size={24}
            weight="fill"
            color="#FFFFFF"
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#055160',
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginLeft: 120,
    marginTop: 25,
  },
  name: {
    color: 'white',
    fontSize: 30,
    marginLeft: 133,
    marginTop: 10,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    width: '77%',
    height: 40,
  },
  googleButtonText: {
    color: 'white',
    marginLeft: 50,
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 500,
    marginLeft: 70,
  },
  googleIcon: {
    left: 10,
  },
});

export default GetStarted;
