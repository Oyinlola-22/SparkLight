import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/sparklight.jpg';
import MyArticles from '../components/Myarticle';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={Logo} // Replace with your profile image URL
        style={styles.profileImage}
      />
      {/* Username */}
      <Text style={styles.userName}>John Doe</Text>

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Articles</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1.5k</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>350</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>

      <MyArticles />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center horizontally
    paddingTop: 45, // Push everything down from the top
    backgroundColor: '#055160',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75, // Circular image
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  statLabel: {
    fontSize: 14,
    color: 'white',
  },
});

export default ProfileScreen;
