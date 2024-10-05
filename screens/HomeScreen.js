import * as React from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native-web';
import background from '../assets/images/bgImage.jpg';
import CurrentlyPlaying from './CurrentlyPlaying';

const HomeScreen = () => {
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
                {/* <Text>Text was here. maybe put user name here and move it to the top of the screen</Text> */}
                {/* This is where it's going to redirect to currently playing page: */}
                <TouchableOpacity onPress={() => buttonAction()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    VISIT YOUR TIDE POOL
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => buttonAction2()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    FRIENDS' TIDE POOLS
                </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => buttonAction3()} style={styles.buttonContainer}>
                <Text style={styles.buttons}>
                    DISCOVER MORE
                </Text>
                </TouchableOpacity>
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
        top:20,
        backgroundColor: '#CAEAFE',
        borderColor: '#CAEAFE',
        padding: 25,
        marginHorizontal: 25,
        marginVertical: 10,
        alignItems: 'stretch',
        borderRadius: 5,
        borderWidth: 2,
      },
      buttons: {
        color: '#433D8B',
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default HomeScreen;