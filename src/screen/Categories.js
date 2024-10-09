import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import Tech from '../../assets/tech.jpg';
import Sports from '../../assets/sports.jpg';
import Health from '../../assets/health.jpg';
import Business from '../../assets/business.jpg';
import Entertainment from '../../assets/entertainment.jpg';
import Politics from '../../assets/politics.jpg';

const categories = [
  {id: '1', title: 'Technology', image: Tech},
  {id: '2', title: 'Sports', image: Sports},
  {id: '3', title: 'Health', image: Health},
  {id: '4', title: 'Business', image: Business},
  {id: '5', title: 'Entertainment', image: Entertainment},
  {id: '6', title: 'Politics', image: Politics},
];

const Categories = () => {
  const renderCategoryItem = ({item}) => {
    return (
      <View style={styles.categoryContainer}>
        <Image source={item.image} style={styles.categoryImage} />
        <View style={styles.overlay} />
        <Text style={styles.categoryTitle}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Categories</Text>
      <FlatList
        data={categories}
        renderItem={renderCategoryItem}
        keyExtractor={item => item.id}
        numColumns={2} // Display two items per row
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#055160',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',
    textAlign: 'center',
  },
  listContainer: {
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flex: 1,
    margin: 5,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
    elevation: 3, // For shadow in Android
    shadowColor: '#000', // For shadow in iOS
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Dark overlay for text contrast
  },
  categoryTitle: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Categories;
