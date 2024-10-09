import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {DotOutline} from 'phosphor-react-native';
import {useNavigation} from '@react-navigation/native';
import Logo from '../../assets/sparklight.jpg';

const articleData = [
  {
    id: '1',
    headline: 'Mastering React Native',
    text: 'A comprehensive guide to becoming proficient in React Native development...',
    category: 'Technology',
    author: 'By: Jane Smith',
    date: '01/01/2024',
    image: Logo,
  },
  {
    id: '2',
    headline: 'Mastering React Native',
    text: 'A comprehensive guide to becoming proficient in React Native development...',
    category: 'Technology',
    author: 'By: Jane Smith',
    date: '01/01/2024',
    image: Logo,
  },
];

const ArticleItem = ({item}) => {
  const navigation = useNavigation();
  const [showFullText, setShowFullText] = useState(false);

  const handleReadMore = () => {
    navigation.navigate('ArticleDetail', {item});
  };

  return (
    <View style={styles.articleContainer}>
      <View style={{flexDirection: 'row'}}>
        <Image source={item.image} style={styles.logo} resizeMode="contain" />
        <Text style={styles.articleText}>
          {showFullText ? item.headline : `${item.headline.slice(0, 50)}... `}
          {!showFullText && (
            <TouchableOpacity onPress={handleReadMore}>
              <Text style={styles.readMore}>Read More</Text>
            </TouchableOpacity>
          )}
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginLeft: 96, bottom: 20}}>
        <Text style={styles.category}>{item.author}</Text>
        <DotOutline weight="fill" color="green" style={{bottom: 3}} />
        <Text style={styles.category}>{item.date}</Text>
      </View>
      <View style={styles.bottomBorder} />
    </View>
  );
};

const MyArticles = () => {
  return (
    <>
      <Text style={styles.header}>My Articles</Text>

      <FlatList
        data={articleData}
        renderItem={({item}) => <ArticleItem item={item} />}
        keyExtractor={item => item.id}
        style={{marginTop: 20}}
      />
    </>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    flex: 1,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  articleText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'justify',
    marginRight: '30%',
    left: 13,
  },
  category: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomBorder: {
    borderBottomWidth: 2,
    borderBottomColor: '#c45628',
    marginRight: 30,
    bottom: 10,
  },
  readMore: {
    color: '#1e90ff',
    fontSize: 15,
    top: 4,
  },
  header: {
    fontSize: 20,
    color: 'white',
    marginTop: '5%',
    fontWeight: 'bold',
  },
});

export default MyArticles;
