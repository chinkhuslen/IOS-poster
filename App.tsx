/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
  Animated,
  Dimensions,
  Image,
  Easing,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  const transRef1 = useRef(new Animated.ValueXY()).current;
  const transRef2 = useRef(new Animated.ValueXY()).current;
  const transRef3 = useRef(new Animated.ValueXY()).current;
  const OpRef1 = useRef(new Animated.Value(0)).current;
  const OpRef2 = useRef(new Animated.Value(0)).current;
  const rotateRef = useRef(new Animated.Value(0)).current;
  const [isNight, setIsNight] = useState(false);
  useEffect(() => {
    Animated.parallel([
      Animated.spring(rotateRef, {
        toValue: 1,
        // duration: 2000,dakr
        // easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(transRef1, {
        toValue: isNight ? {x: 1, y: 0} : {x: -1, y: 700},
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(OpRef1, {
        toValue: isNight ? 0 : 1,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(transRef2, {
        toValue: isNight ? {x: 1, y: -700} : {x: -1, y: 0},
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(OpRef2, {
        toValue: isNight ? 1 : 0,
        duration: 2000,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(transRef3, {
        toValue: isNight ? {x: 1, y: 0} : {x: 10, y: -700},
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [OpRef1, OpRef2, rotateRef, isNight, transRef1, transRef2, transRef3]);
  return (
    <View style={[styles.flex, styles.flexRow]}>
      <Switch
        trackColor={{false: '#767577', true: '#0e402a'}}
        thumbColor={isNight ? '#fafafa' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => setIsNight(!isNight)}
        value={isNight}
        style={styles.switch}
      />
      <Animated.Image
        style={[styles.day, {opacity: OpRef1}]}
        source={require('./day.png')}
      />
      <Animated.Image
        style={[
          styles.sun,
          {opacity: OpRef1},
          {
            transform: [
              {
                translateX: transRef2.x.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [10, 20, 30, 40, 50, 60],
                }),
              },
              {
                translateY: transRef2.y,
              },
            ],
          },
        ]}
        source={require('./sun.png')}
      />
      <Animated.Image
        style={[styles.night, {opacity: OpRef2}]}
        source={require('./night.png')}
      />
      <Animated.Image
        style={[
          styles.moon,
          {opacity: OpRef2},
          {
            transform: [
              {
                translateX: transRef1.x.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                  outputRange: [10, 20, 30, 40, 50, 60],
                }),
              },
              {
                translateY: transRef1.y,
              },
            ],
          },
        ]}
        source={require('./moon.png')}
      />
      <Animated.Image
        style={[
          styles.meteor,
          {opacity: OpRef2},
          {
            transform: [
              // {
              //   translateX: transRef3.x.interpolate({
              //     inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
              //     outputRange: [10, 20, 30, 40, 50, 60],
              //   }),
              // },
              // {
              //   translateY: transRef3.y,
              // },
              {
                rotate: isNight
                  ? rotateRef.interpolate({
                      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      outputRange: [
                        '0deg',
                        '-10deg',
                        '-20deg',
                        '-30deg',
                        '-40deg',
                        '-50deg',
                      ],
                    })
                  : rotateRef.interpolate({
                      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
                      outputRange: [
                        '-50deg',
                        '-40deg',
                        '-30deg',
                        '-20deg',
                        '-10deg',
                        '0deg',
                      ],
                    }),
              },
            ],
          },
        ]}
        source={require('./tail-wind.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sun: {
    position: 'absolute',
    top: 400,
    left: 100,
    width: 100,
    height: 100,
  },
  meteor: {
    position: 'absolute',
    top: 330,
    left: 0,
    width: 250,
    height: 250,
    transform: [{rotate: '30deg'}],
  },
  moon: {
    position: 'absolute',
    top: 300,
    left: 50,
    width: 60,
    height: 72,
  },
  flex: {
    display: 'flex',
  },
  flexRow: {flexDirection: 'row'},
  day: {
    position: 'absolute',
    width: '100%',
    height: windowHeight,
  },
  night: {
    width: '100%',
    // transform: [{translateX: windowWidth}],
    height: windowHeight,
  },
  switch: {
    position: 'absolute',
    top: 50,
    right: 1,
    zIndex: 1,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#0ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#082116',
    color: 'white',
  },
  info: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  likeBtn: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    color: 'white',
  },
  scrollView: {
    marginHorizontal: 20,
  },
  poster: {
    // color: 'white',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#0e402a',
    borderRadius: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  postImg: {
    height: '100%',
    width: '20%',
  },
  tinyLogo: {
    borderRadius: 10,
    width: 100,
    height: 150,
    objectFit: 'cover',
  },
  text: {
    color: 'white',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: 'white',
    marginTop: 12,
  },
});
export default App;
