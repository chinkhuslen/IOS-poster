/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

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
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import {data} from './mockData';
const App = () => {
  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {data?.map(el => {
          return (
            <View style={styles.poster}>
              <Image
                style={styles.tinyLogo}
                source={{
                  uri: el.img,
                }}
              />
              <View style={styles.info}>
                <Text style={styles.text}>{el.name}</Text>
                <Text>
                  <Text style={styles.text}>{el.lengthOfMovie}</Text>
                </Text>
              </View>
              <View style={styles.likeBtn}>
                <Text style={styles.text}>Like</Text>
              </View>
            </View>
          );
        })}
        {/* <View style={styles.poster}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
          <View style={styles.info}>
            <Text style={styles.text}>Movie name</Text>
            <Text>
              <Text style={styles.text}>8.3</Text>
            </Text>
          </View>
          <View style={styles.likeBtn}>
            <Text style={styles.text}>Like</Text>
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
