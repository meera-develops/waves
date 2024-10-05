import * as React from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity} from 'react-native';
import { ImageBackground } from 'react-native-web';
import background from '../assets/images/bgImage.jpg';
import CurrentlyPlaying from './CurrentlyPlaying';

/* To Do:
1. Get user name to show up in text region
2. Get buttons to redirect to other pages
3. Add icons to buttons
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
                <Text style={styles.accountText}>
                    user_name placeholder
                </Text>
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
    }
});

export default HomeScreen;