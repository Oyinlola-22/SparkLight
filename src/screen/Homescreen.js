import {MagnifyingGlass, UserCircle, XCircle} from 'phosphor-react-native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import Logo from '../../assets/sparklight.jpg';
import Menuoptions from '../components/Menuoptions';
import {useNavigation} from '@react-navigation/native';
import Logo1 from '../../assets/sparklight.jpg';

const Homescreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [news, setNews] = useState([
    {id: '1', image: Logo, text: 'Welcome to SparkLight'},
    {
      id: '2',
      image: Logo,
      text: 'Another Breaking News Headline That Might Be Too Long',
    },
    {id: '3', image: Logo, text: 'Short Headline'},
  ]);

  const goSearch = () => {
    navigation.navigate('Search');
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Breaking News</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={goSearch}>
            <MagnifyingGlass size={30} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <UserCircle size={30} color="#FFFFFF" style={styles.profileIcon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Breaking News Section */}
      <View style={styles.breakingNews}>
        <FlatList
          data={news}
          horizontal
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.newsItem}>
              <Image
                source={item.image}
                style={styles.logo}
                resizeMode="cover"
              />
              <Text style={styles.newsText} numberOfLines={1}>
                {item.text}
              </Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>

      {/* Menu Options */}
      <Menuoptions />

      {/* Modal for Profile */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.modalTitle}>Profile Information</Text>
              <TouchableOpacity onPress={toggleModal}>
                <XCircle size={30} style={{marginLeft: '60%', bottom: '17%'}} />
              </TouchableOpacity>
            </View>

            <View style={{flexDirection: 'row', right: '10%'}}>
              <UserCircle
                size={80}
                style={{marginLeft: '10%', bottom: '22%'}}
                weight="fill"
              />
              <View
                style={{
                  flexDirection: 'column',
                  marginLeft: '2%',
                  marginRight: '20%',
                }}>
                <Text style={styles.modalText}>John Doe</Text>
                <Text style={styles.modalText}>Non-Premium Member</Text>
              </View>
            </View>
            {/* Add your profile details here */}
            <View style={{marginBottom: '3%'}}>
              <TouchableOpacity>
                <Text style={styles.others}>
                  Get Premium Membership and Verified
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.others}>
                  Request for Ad Space to advertise your business
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.others}>LOG OUT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#055160',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 27,
    left: 15,
    color: '#FFF',
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 'auto', // This makes sure the icons are right-aligned
    marginRight: 15,
  },
  profileIcon: {
    marginLeft: 15,
  },
  logo: {
    width: 175,
    height: 120,
    borderRadius: 10,
    opacity: 0.5,
  },
  breakingNews: {
    marginTop: 20,
  },
  newsItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  newsText: {
    fontSize: 17,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  flatListContainer: {
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    alignItems: 'flex-start',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'black',
  },
  modalText: {
    fontSize: 16,
    marginVertical: 5,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: '1%',
    alignItems: 'center',
  },
  logo1: {
    width: 105,
    height: 100,
    borderRadius: 10,
  },
  others: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '5%',
  },
});

export default Homescreen;
