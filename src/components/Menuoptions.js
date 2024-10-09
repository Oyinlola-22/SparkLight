import React, {useState, useMemo, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import News from '../screen/News';
import Trending from '../screen/Trending';
import Button from './writeArticlebutton';

const MenuOptions = () => {
  const [activeButton, setActiveButton] = useState('News near me');

  const handleButtonPress = useCallback(button => {
    setActiveButton(button);
  }, []);

  const renderActiveComponent = useMemo(() => {
    switch (activeButton) {
      case 'News near me':
        return (
          <>
            <News />
            <Button />
          </>
        );
      case 'Trending News':
        return (
          <>
            <News />
            <Button />
          </>
        );
      default:
        return null;
    }
  }, [activeButton]);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <View style={{flexDirection: 'row'}}>
          <MenuItem
            text="News near me"
            active={activeButton === 'News near me'}
            onPress={() => handleButtonPress('News near me')}
          />
          <MenuItem
            text="Trending News"
            active={activeButton === 'Trending News'}
            onPress={() => handleButtonPress('Trending News')}
          />
        </View>
      </View>
      {renderActiveComponent}
    </View>
  );
};

const MenuItem = ({text, active, onPress}) => {
  return (
    <Pressable
      style={[styles.menuButton, active && styles.activeButton]}
      onPress={onPress}>
      <Text style={[styles.menuText, active && styles.activeText]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  menuButton: {
    padding: 10,
  },
  menuText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 37,
  },
  activeText: {
    color: '#C45628',
  },
});

export default React.memo(MenuOptions);
