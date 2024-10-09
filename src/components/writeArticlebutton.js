import {PenNib} from 'phosphor-react-native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Button = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate('WriteArticle');
  };
  return (
    <TouchableOpacity style={{flex: 1}} onPress={handlePress}>
      <View style={styles.button}>
        <PenNib size={35} color="white" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#C45628',
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 170,
    bottom: 80,
    left: 120,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
export default Button;
