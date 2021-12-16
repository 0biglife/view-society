import React, {useState} from 'react';
import styled from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Modal, Alert} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

// import {navigate} from './rootNavigation';
//screens
import {
  homeViewDataTest,
  SecondCatView,
  ThirdCatView,
  searchView,
  mymusicView,
  boardView,
  profileView,
  PlayerBar,
  postView,
  // modalScreen,
} from '../screens';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PlayerContainer = styled.View`
  /* width: 100%;
  position: absolute;
  bottom: 79px;
  flex-direction: row;
  justify-content: center;
  background-color: red;
  height: 50; */
`;

const ModalWrapper = styled.TouchableOpacity`
  flex: 1;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: 'rgba(0,0,0,0.2)';
`;

const ModalBox = styled.View`
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 200px;
  background-color: white;
  border-radius: 10px;
`;

const ModalTitle = styled.View`
  flex: 1;
  width: 70%;
  justify-content: center;
`;

const ModalTitleText = styled.Text`
  align-self: center;
  font-size: 15px;
`;

const ModalButton = styled.TouchableOpacity`
  flex: 1;
  width: 70%;
  justify-content: center;
`;

const ModalButtonText = styled.Text`
  align-self: center;
  font-size: 16px;
`;

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();
const HomeTopTab = createMaterialTopTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen component={HomeTabNavigation} name="HomeTab" />
      <Stack.Screen component={postView} name="postView" />
    </Stack.Navigator>
  );
};

const HomeTabNavigation = () => {
  return (
    <HomeTopTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 40,
        },
        tabBarIndicatorStyle: {
          borderBottomWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: -10,
        },
      }}>
      <HomeTopTab.Screen name="팔로잉" component={homeViewDataTest} />
      <HomeTopTab.Screen name="인기아티스트" component={SecondCatView} />
      <HomeTopTab.Screen name="게시판" component={ThirdCatView} />
    </HomeTopTab.Navigator>
  );
};

const MainTab = ({ navigation }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [imageCamera, setImageCamera] = useState(null);

  const openCamera = () => {
    const option = {
      mediaType: 'photo',
      quality: 1,
    };
    launchCamera(option, res => {
      if (res.didCancel) {
        console.log('User Cancelled Image Picker');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets;
        setImageCamera(data);
        console.log(data);
      }
    });
  };

  const openLibrary = () => {
    //
  };

  const headerButtonOption = () => {
    
  };

  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'MyMusician') {
              iconName = focused
                ? 'ios-musical-notes'
                : 'ios-musical-notes-outline';
            } else if (route.name === 'Board') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <IonIcon name={iconName} size={size} color={color} />;
          },
          headerTitleAlign: 'center',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <IonIcon
                    name="add"
                    size={24}
                    color="black"
                    style={{marginRight: 8}}
                  />
                  <Modal
                    visible={open}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => {
                      setOpen(false);
                    }}>
                    <ModalWrapper>
                      <ModalContainer>
                        <ModalBox>
                          <ModalTitle>
                            <ModalTitleText>게시글 업로드</ModalTitleText>
                          </ModalTitle>
                          <ModalButton
                            onPress={() => {
                              setOpen(false);
                              navigation.navigate('postView');
                            }}>
                            <ModalButtonText>Post</ModalButtonText>
                          </ModalButton>
                          <ModalButton
                            onPress={() => {
                              setOpen(false);
                              openCamera();
                            }}>
                            <ModalButtonText>Camera</ModalButtonText>
                          </ModalButton>
                          <ModalButton
                            onPress={() => {
                              setOpen(false);
                              openLibrary();
                            }}>
                            <ModalButtonText>Album</ModalButtonText>
                          </ModalButton>
                          <ModalButton
                            onPress={() => {
                              Alert.alert('Music');
                              setOpen(false);
                            }}>
                            <ModalButtonText>Music</ModalButtonText>
                          </ModalButton>
                        </ModalBox>
                      </ModalContainer>
                    </ModalWrapper>
                  </Modal>
                </TouchableOpacity>
              );
            },
          }}
        />
        <Tab.Screen name="Search" component={searchView} />
        <Tab.Screen name="MyMusician" component={mymusicView} />
        <Tab.Screen name="Board" component={boardView} />
        <Tab.Screen
          name="Profile"
          component={profileView}
          options={{
            headerRight: () => {
              return (
                <TouchableOpacity onPress={() => setOpen(true)}>
                  <IonIcon
                    name="add"
                    size={24}
                    color="black"
                    style={{marginRight: 8}}
                  />
                  <Modal
                    visible={open}
                    animationType="fade"
                    transparent={true}
                    onRequestClose={() => {
                      setOpen(false);
                    }}>
                    <ModalWrapper>
                      <ModalContainer>
                        <ModalBox>
                          <ModalTitle>
                            <ModalTitleText>게시글 업로드</ModalTitleText>
                          </ModalTitle>
                          <ModalButton
                            onPress={() => {
                              setOpen(false);
                              navigation.navigate('postView');
                            }}>
                            <ModalButtonText>Post</ModalButtonText>
                          </ModalButton>
                          <ModalButton
                            onPress={() => {
                              setOpen(false);
                              openCamera();
                            }}>
                            <ModalButtonText>Camera</ModalButtonText>
                          </ModalButton>
                          <ModalButton
                            onPress={() => {
                              setOpen(false);
                              openLibrary();
                            }}>
                            <ModalButtonText>Album</ModalButtonText>
                          </ModalButton>
                          <ModalButton
                            onPress={() => {
                              Alert.alert('Music');
                              setOpen(false);
                            }}>
                            <ModalButtonText>Music</ModalButtonText>
                          </ModalButton>
                        </ModalBox>
                      </ModalContainer>
                    </ModalWrapper>
                  </Modal>
                </TouchableOpacity>
              );
            },
          }}
        />
      </Tab.Navigator>
      <PlayerContainer>
        <PlayerBar />
      </PlayerContainer>
    </>
  );
};

export default MainTab;
