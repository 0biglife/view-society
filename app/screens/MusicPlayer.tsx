import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import Slider from '@react-native-community/slider';
import styled from 'styled-components/native';

import IonIcon from 'react-native-vector-icons/Ionicons';

// import TrackPlayer, {
//   Capability,
//   Event,
//   RepeatMode,
//   State,
//   usePlaybackState,
//   useProgress,
//   useTrackPlayerEvents,
// } from 'react-native-track-player';

import songs from '../model/data';

const { width, height } = Dimensions.get('window');

const SafeAreaViewContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const MainContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ArtworkWrapper = styled.View`
  width: 300px;
  height: 300px;
  margin-bottom: 25px;
`;

const ArtworkImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
`;

const TitleText = styled.Text`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: black;
`;

const ArtistText = styled.Text`
  font-size: 16px;
  font-weight: 200;
  text-align: center;
  color: black;
`;

const BottomContainer = styled.View`
  border-top-color: #393e46;
  border-top-width: 1px;
  width: width;
  align-items: center;
  padding-top: 15px;
`;

const BottomControls = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
`;

// const setupPlayer = async () => {
//   await TrackPlayer.setupPlayer();

//   await TrackPlayer.add(songs);
// };

// const togglePlayback = async (playbackState) => {
//   const currentTrack = await TrackPlayer.getCurrentTrack();

//   if (currentTrack !== null) {
//     if (playbackState == State.Paused) {
//       await TrackPlayer.play();
//     } else {
//       await TrackPlayer.pause();
//     }
//   }
// };

const MusicPlayer = () => {
  // const playbackState = usePlaybackState();
  return (
    <SafeAreaViewContainer>
      <MainContainer>
        <ArtworkWrapper>
          <ArtworkImage source={require('../assets/artwork/cover2.jpeg')} />
        </ArtworkWrapper>
        <View>
          <TitleText>Song Title</TitleText>
          <ArtistText>Song Artist Name</ArtistText>
        </View>
      </MainContainer>
      <BottomContainer>
        <BottomControls>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="heart-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="repeat" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="share-outline" size={30} color="#777777" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <IonIcon name="ellipsis-horizontal" size={30} color="#777777" />
          </TouchableOpacity>
        </BottomControls>
      </BottomContainer>
    </SafeAreaViewContainer>
  );
};

export default MusicPlayer;