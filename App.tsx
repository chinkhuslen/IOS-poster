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
// import
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Pressable,
  Switch,
  Appearance,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';
import {data} from './mockData';
import {HandThumbUpIcon} from 'react-native-heroicons/outline';
const App = () => {
  const colorscheme = Appearance.getColorScheme();
  const [isEnabled, setIsEnabled] = useState(colorscheme === 'light');
  const [textHandler, setTextHandler] = React.useState('');
  const toggleSwitch = () => setIsEnabled(prev => !prev);
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isEnabled ? 'white' : '#082116'},
      ]}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss}>
        <ScrollView style={styles.scrollView}>
          <Switch
            trackColor={{false: '#767577', true: '#0e402a'}}
            thumbColor={isEnabled ? '#fafafa' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />

          {/* {data?.map(el => {
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
                <Pressable
                  onPress={() => {
                    console.log('Press');
                  }}>
                  <HandThumbUpIcon color="white" />
                </Pressable>
              </View>
            </View>
          );
        })} */}
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.inner}>
              <Text style={styles.header}>Header</Text>
              <TextInput placeholder="Username" style={styles.textInput} />
              <View style={styles.btnContainer}>
                <Button title="Submit" onPress={() => null} />
              </View>
            </View>
          </KeyboardAvoidingView>
          {/* <View>
          <TextInput
            style={{
              height: 40,
              margin: 12,
              borderWidth: 1,
              padding: 10,
            }}
            onChangeText={value => {
              setTextHandler(value);
            }}
            keyboardType={'default'}
          />
        </View> */}
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
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default App;
