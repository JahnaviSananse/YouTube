import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Button,
  Pressable,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';
// import {useNavigation} from '@react-navigation/native';

const Library = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default Library;
