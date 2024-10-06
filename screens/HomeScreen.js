import * as React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, Image} from 'react-native';
import { ImageBackground } from 'react-native-web';
import background from '../assets/images/bgImage.jpg';
import userIcon from '../assets/images/userIcon.jpg'
import CurrentlyPlaying from './CurrentlyPlaying';

/* To Do:
1. Get user name to show up in text region
2. Get buttons to redirect to other pages
3. Add icons to buttons
4. Add user icon to user name
*/

const HomeScreen = () => {
    {/* This is where it's going to redirect to currently playing page and other pages: */}
    const buttonAction = () => {
        Alert.alert("Notice:","This is where redirect to currently playing will occur");
    };
    const buttonAction2 = () => {
        Alert.alert("Notice:", "This is where you can view your friends' tide pools")
    };
    const buttonAction3 = () => {
        Alert.alert("Notice:", "This is where you can discover more")
    };

    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <View style={styles.container}>
                <Image
                    style = {styles.imgIcon}
                    source={require('../assets/images/userIcon.jpg')}
                />
                <Text style={styles.accountText}>
                    Sara_Songs
                </Text>
                <Pressable onPress={() => buttonAction()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    VISIT YOUR TIDE POOL
                </Text>
                </Pressable>
                <Pressable onPress={() => buttonAction2()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    FRIENDS' TIDE POOLS
                </Text>
                </Pressable>
                <Pressable onPress={() => buttonAction3()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    DISCOVER MORE
                </Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
    //   marginTop: 50,
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 50,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    buttonContainer: {
        //top:20,
        backgroundColor: '#CAEAFE',
        borderColor: '#CAEAFE',
        padding: 25,
        marginHorizontal: 25,
        marginVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 2,
        width: 280,
        height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
      },
      buttons: {
        color: '#433D8B',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    accountText: {
        width: '100%',
        textAlign: 'left',
        color: "#2f4858",
        fontFamily: 'lexend-era',
        textTransform: 'uppercase',
        letterSpacing: 5,
        fontSize: 10,
        marginBottom: 20,
        paddingLeft: 20,
    },
    imgIcon: {
        width:10,
        height: 8,
    },
});

export default HomeScreen;