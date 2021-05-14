import React, {useState, useRef} from 'react';
// Import required components
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';

// Import Youtube Players
import YouTube from 'react-native-youtube';

const Videos = props => {
  const youtubePlayerRef = useRef();
  const singleVideoId = '4A426Yjm_jM';
  const listVideoIds = ['4A426Yjm_jM', 'BfmIgt_kPvM', 'F9LwbmIWIr0'];

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

  return (
    <SafeAreaView style={{flex: 1}}>
      {console.log('dvsvfs', props.route)}

      <ScrollView
        style={styles.container}
        onLayout={({
          nativeEvent: {
            layout: {width},
          },
        }) => {
          if (!containerMounted) setContainerMounted(true);
          if (containerWidth !== width) setContainerWidth(width);
        }}>
        {containerMounted && (
          <YouTube
            ref={youtubePlayerRef}
            // You must have an API Key
            apiKey="AIzaSyCpPQaqwSPZG50ySo5_8bjfDVpXISyybPs"
            videoIds={[props.route.params.videoId]}
            play={isPlaying}
            loop={isLooping}
            fullscreen={fullscreen}
            controls={1}
            style={[
              {
                height: PixelRatio.roundToNearestPixel(
                  containerWidth / (16 / 9),
                ),
              },
              styles.player,
            ]}
            onError={e => setError(e.error)}
            onReady={e => setIsReady(true)}
            onChangeState={e => setStatus(e.state)}
            onChangeQuality={e => setQuality(e.quality)}
            onChangeFullscreen={e => setFullscreen(e.isFullscreen)}
            onProgress={e => {
              setDuration(e.duration);
              setCurrentTime(e.currentTime);
            }}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Videos;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
