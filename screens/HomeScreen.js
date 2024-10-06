import * as React from 'react';
import { View, Text, StyleSheet, Button, Alert, Pressable, Image} from 'react-native';
import { ImageBackground } from 'react-native-web';
import background from '../assets/images/bgImage.jpg';
import userIcon from '../assets/images/userIcon.png'
import CurrentlyPlaying from './CurrentlyPlaying';
import { jsxDEV } from 'react/jsx-dev-runtime';
import shell1 from '../assets/images/shell1.png';
import sunset1 from '../assets/images/sunset1.png';
import island1 from '../assets/images/island1.png';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();
    {/* This is where it's going to redirect to currently playing page and other pages: */}
    const buttonAction = () => {
        navigation.navigate('CurrentlyPlaying');
    };
    const buttonAction2 = () => {
        Alert.alert("Friends page incomplete")
    };
    const buttonAction3 = () => {
        Alert.alert("Waiting on Discover page")
    };

    return (
        <ImageBackground
            source={background}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.userInfo}>
                    <Image
                        style = {styles.imgIcon}
                        source={userIcon}
                    />
                    <Text style={styles.accountText}>
                        Sara_Songs
                    </Text>
                </View>
                <Pressable onPress={() => buttonAction()} style={styles.buttonContainer}>
                    <Text style={styles.buttons}>
                        VISIT YOUR TIDE POOL
                    </Text>
                    <Image
                        source={shell1}
                        style={styles.buttonIcon}
                    />
                </Pressable>
                <Pressable onPress={() => buttonAction2()} style={styles.buttonContainer}>
                    <Text style={styles.buttons}>
                        FRIENDS' TIDE POOLS
                    </Text>
                    <Image
                        source={island1}
                        style={styles.buttonIcon}
                    />
                </Pressable>
                <Pressable onPress={() => buttonAction3()} style={styles.buttonContainer}>
                    <Text style={styles.buttons}>
                        DISCOVER MORE
                    </Text>
                    <Image
                        source={sunset1}
                        style={styles.buttonIcon}
                    />
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
        position: 'relative',
      },
      buttons: {
        color: '#433D8B',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Metrophobic',
    },
    buttonIcon: {
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 5,
        right: 5,
    },
    accountText: {
        width: '100%',
        flexDirection: 'row',
        textAlign: 'left',
        color: "#2f4858",
        fontFamily: 'lexend-era',
        textTransform: 'uppercase',
        letterSpacing: 5,
        fontSize: 10,
        marginBottom: 20,
        paddingLeft: 95,
    },
    imgIcon: {
        width:30,
        height:30,
        marginRight: 5,
    },
    userInfo: {
        flexDirection: 'row',
        alignItems: 'left',
        marginBottom: 20,
        justifyContent: 'flex-start',
    },
});

export default HomeScreen;