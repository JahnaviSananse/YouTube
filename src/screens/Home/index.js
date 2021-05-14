import React, {useRef} from 'react';
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
import YouTube from 'react-native-youtube';
import {IMAGE} from '../../assets/images/images';

const Home = () => {
  const youtubePlayerRef = useRef();

  const DATA = [
    {
      id: 1,
      title: <Image style={styles.stretch} source={IMAGE.NATURE} />,
    },
    {
      id: 2,
      title: <Image style={styles.stretch} source={IMAGE.DOGGIES} />,
    },
    {
      id: 3,
      title: <Image style={styles.stretch} source={IMAGE.LION} />,
    },
    {
      id: 4,
      title: <Image style={styles.stretch} source={IMAGE.ELEPHANT} />,
    },
    {
      id: 5,
      title: <Image style={styles.stretch} source={IMAGE.SQUIRAL} />,
    },
    {
      id: 6,
      title: <Image style={styles.stretch} source={IMAGE.NATURE} />,
    },
    {
      id: 7,
      title: <Image style={styles.stretch} source={IMAGE.DOGGIES} />,
    },
    {
      id: 8,
      title: <Image style={styles.stretch} source={IMAGE.LION} />,
    },
    {
      id: 9,
      title: <Image style={styles.stretch} source={IMAGE.ELEPHANT} />,
    },
    {
      id: 10,
      title: <Image style={styles.stretch} source={IMAGE.SQUIRAL} />,
    },
  ];
  const renderItem = ({item}) => {
    return (
      <>
        {/* <TouchableOpacity onPress={() => alert(item.id)}> */}
        <TouchableOpacity>
          <View>{item.title}</View>
        </TouchableOpacity>

        <View style={{borderBottomWidth: 2, marginBottom: 10}} />
      </>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: '7%',
          backgroundColor: 'white',
        }}>
        <Image style={styles.youtubeIcon} source={IMAGE.YOUTUBE} />
        <Text style={styles.youtubeText}> YouTube</Text>
        <View
          style={{
            flexDirection: 'row',
            left: '24%',
            width: '45%',
            backgroundColor: 'white',
            justifyContent: 'space-between',
          }}>
          <Image style={styles.topRightIcons} source={IMAGE.CONNECTDEVICE} />
          <Image style={styles.topRightIcons} source={IMAGE.BELL} />
          <Image style={styles.topRightIcons} source={IMAGE.LOUPE} />
          <Image style={styles.topRightIcons} source={IMAGE.PROFILE} />
        </View>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <YouTube ref={youtubePlayerRef} apiKey="Replace Your API Key" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  youtubeIcon: {
    top: 5,
    width: 35,
    height: 35,
    left: 5,
    // margin: 25,
    // marginLeft: 30,
  },
  topRightIcons: {
    width: 25,
    height: 25,
    top: 10,
    // margin: 25,
    // marginLeft: 30,
  },
  youtubeText: {
    top: 6.5,
    left: 5,
    fontSize: 20,
    color: 'red',
  },
  stretch: {
    width: '100%',
    height: 200,
    // resizeMode: 'stretch',
  },
});

export default Home;
