/* eslint-disable @typescript-eslint/no-unused-vars */

// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// function App(): JSX.Element {
//   return (
//     <View style={{height: '100%'}}>
//       <View style={{height: 100, backgroundColor: 'yellow'}} />
//       <View style={[styles.flex1, styles.flexR]}>
//         <View style={[styles.flex1, styles.bgColorBlue]} />
//         <View style={styles.flex3}>
//           <View style={{height: 120, backgroundColor: 'gray'}} />
//           <View style={{backgroundColor: 'green', flex: 1}} />
//           <View style={{height: 150}} />
//         </View>
//       </View>
//       <View style={{height: 100, backgroundColor: 'red'}}></View>
//     </View>
//   );
// }
import React, {useRef} from 'react';
// import
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
} from 'react-native';
import {sin, useAnimatedStyle, useSharedValue} from 'react-native-reanimated';
const Animation = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const transRef = useRef(new Animated.ValueXY()).current;
  return (
    <SafeAreaView>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: transRef.x.interpolate({
                  inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2],
                  outputRange: [0, 100, 0, 100, 0, 100, 0],
                }),
              },
              {
                translateY: transRef.y,
              },
            ],
          },
        ]}
      />
      <Button
        title="move"
        onPress={() => {
          Animated.timing(transRef, {
            toValue: {x: 1, y: 500},
            duration: 2000,
            useNativeDriver: true,
          }).start();
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#0ff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#082116',
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

// const styles = StyleSheet.create({
//   flex1: {
//     flex: 1,
//   },
//   flex3: {
//     flex: 3,
//   },
//   flexR: {
//     flexDirection: 'row',
//   },
//   bgColorBlue: {
//     backgroundColor: 'blue',
//   },
//   bgColorPrim: {
//     backgroundColor: 'rgba(255, 255, 255,0.1)',
//   },
//   poster: {
//     width: '80%',
//     height: 50,
//     backgroundColor: 'rgba(255, 255, 255, 0.5',
//   },
// });

export default Animation;
