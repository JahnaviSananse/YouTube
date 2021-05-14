import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  PixelRatio,
} from 'react-native';
import YouTube from 'react-native-youtube';
import {IMAGE} from '../../assets/images/images';

const Home = ({navigation}) => {
  const youtubePlayerRef = useRef();
  const [isReady, setIsReady] = useState(false);
  const [status, setStatus] = useState(null);
  const [quality, setQuality] = useState(null);
  const [error, setError] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLooping, setIsLooping] = useState(true);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [containerMounted, setContainerMounted] = useState(false);
  const [containerWidth, setContainerWidth] = useState(null);

  const DATA = [
    {
      id: 1,
      title: <Image style={styles.stretch} source={IMAGE.NATURE} />,
      video: '4A426Yjm_jM',
    },
    {
      id: 2,
      title: <Image style={styles.stretch} source={IMAGE.DOGGIES} />,
      video: 'BfmIgt_kPvM',
    },
    {
      id: 3,
      title: <Image style={styles.stretch} source={IMAGE.LION} />,
      video: 'F9LwbmIWIr0',
    },
    {
      id: 4,
      title: <Image style={styles.stretch} source={IMAGE.ELEPHANT} />,
      video: '4A426Yjm_jM',
    },
    {
      id: 5,
      title: <Image style={styles.stretch} source={IMAGE.SQUIRAL} />,
      video: 'F9LwbmIWIr0',
    },
  ];
  const listVideoIds = ['4A426Yjm_jM', 'BfmIgt_kPvM', 'F9LwbmIWIr0'];
  const renderItem = ({item}) => {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate('Videos', {videoId: item.video})}>
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

  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
});

export default Home;

// import React, {useState, useRef} from 'react';
// // Import required components
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   PixelRatio,
// } from 'react-native';

// // Import Youtube Players
// import YouTube from 'react-native-youtube';

// const Home = () => {
//   const youtubePlayerRef = useRef();
//   const singleVideoId = '4A426Yjm_jM';
//   const listVideoIds = ['4A426Yjm_jM', 'BfmIgt_kPvM', 'F9LwbmIWIr0'];

//   const [isReady, setIsReady] = useState(false);
//   const [status, setStatus] = useState(null);
//   const [quality, setQuality] = useState(null);
//   const [error, setError] = useState(null);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isLooping, setIsLooping] = useState(true);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [fullscreen, setFullscreen] = useState(false);
//   const [containerMounted, setContainerMounted] = useState(false);
//   const [containerWidth, setContainerWidth] = useState(null);

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ScrollView
//         style={styles.container}
//         onLayout={({
//           nativeEvent: {
//             layout: {width},
//           },
//         }) => {
//           if (!containerMounted) setContainerMounted(true);
//           if (containerWidth !== width) setContainerWidth(width);
//         }}>
//         {containerMounted && (
//           <YouTube
//             ref={youtubePlayerRef}
//             // You must have an API Key
//             apiKey="AIzaSyCpPQaqwSPZG50ySo5_8bjfDVpXISyybPs"
//             // Un-comment one of videoId / videoIds / playlist.
//             // videoId={singleVideoId}
//             videoIds={listVideoIds}
//             // playlistId="PLF797E961509B4EB5"
//             play={isPlaying}
//             loop={isLooping}
//             fullscreen={fullscreen}
//             controls={1}
//             style={[
//               {
//                 height: PixelRatio.roundToNearestPixel(
//                   containerWidth / (16 / 9),
//                 ),
//               },
//               styles.player,
//             ]}
//             onError={e => setError(e.error)}
//             onReady={e => setIsReady(true)}
//             onChangeState={e => setStatus(e.state)}
//             onChangeQuality={e => setQuality(e.quality)}
//             onChangeFullscreen={e => setFullscreen(e.isFullscreen)}
//             onProgress={e => {
//               setDuration(e.duration);
//               setCurrentTime(e.currentTime);
//             }}
//           />
//         )}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//   },
//   titleText: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     paddingVertical: 20,
//   },
//   buttonGroup: {
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   button: {
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     alignSelf: 'center',
//   },
//   buttonText: {
//     fontSize: 18,
//     color: 'blue',
//   },
//   buttonTextSmall: {
//     fontSize: 15,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   player: {
//     alignSelf: 'stretch',
//     marginVertical: 10,
//   },
// });
