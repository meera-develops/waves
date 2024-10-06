import * as React from 'react';
import { ImageBackground, StyleSheet, Image, Text, View, SafeAreaView } from 'react-native';
import background from '../assets/images/bgImage.jpg';
import userPic from '../assets/images/userPic.jpg';
import searchIcon from '../assets/images/searchIcon.png';


const CurrentlyPlaying = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ImageBackground
          source={background}
          style={styles.background}
        >
          <View style={styles.textContainer}>
            <Image
              source={userPic}
              style={styles.userPic}>
            </Image>
            <Text style={styles.text}>Sara_Songs</Text>
            <View style={styles.searchContainer}>
              <Image 
                source={searchIcon}
                style={styles.searchImg}></Image>
              <Text style={styles.search}>Search</Text>
            </View>

          </View>

        </ImageBackground>
      </SafeAreaView>

    );
  };


  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    textContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 30
    },
    userPic: {
      position: 'relative',
      // marginTop: 30,
      // marginLeft: 40,
      borderRadius: 100,
    },
    text: {
      marginLeft: 10,
      color: 'black',
      fontSize: 10,
      fontWeight: 'bold',
      fontFamily: 'lexend-era'
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    searchContainer: {
      marginLeft: 130,
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    search: {
      //justifyContent: 'flex-end'
      marginLeft: 8
    },
    searchImg: {
      //justifyContent: 'flex-end'
    }
  });

  export default CurrentlyPlaying;