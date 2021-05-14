import React, {useRef} from 'react';
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {IMAGE} from '../../assets/images/images';
import RBSheet from 'react-native-raw-bottom-sheet';
export default function Subscription() {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
});
