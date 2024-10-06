import * as React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import background from '../assets/images/bgImage.jpg';
import wave from '../assets/images/waveLight.png';
import starboyCover from '../assets/images/starboy.jpg';
import artist1 from '../assets/images/artist1.jpg';
import artist2 from '../assets/images/artist2.jpg';
// import { Iconify } from 'react-native-iconify';

const discover = () => {
    return (
        <ImageBackground source={background} style={styles.background}>
            {/* Header Section */}
            <Image source={wave} style={styles.wave} />
            <Text style={styles.subHeader}>This tide is making waves!</Text>

            {/* <View style = {styles.iconImage}>
                <Iconify icon = "playButton" size={10} color = "black" />
            </View> */}

            {/* Starboy Album Section */}
            <View style={styles.albumSection}>
                <Image source={starboyCover} style={styles.albumCover} />
                <TouchableOpacity style={styles.playButton}>
                    <Text style={styles.playButtonText}>Play Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.ratingButton}>
                    <Text style={styles.ratingButtonText}>Give a Rating</Text>
                </TouchableOpacity>
            </View>

            {/* Rating and Trending Section */}
            <Text style={styles.ratingText}>4.9 OVERALL RATING</Text>
            <Text style={styles.rankingText}>RANKING: Riptide</Text>

            <View style={styles.trendingSection}>
                <Text style={styles.trendingTitle}>Trending</Text>
                <View style={styles.trendingArtists}>
                    <View style={styles.artist}>
                        <Image source={artist1} style={styles.artistImage} />
                        <Text style={styles.artistRating}>4.8</Text>
                    </View>
                    <View style={styles.artist}>
                        <Image source={artist2} style={styles.artistImage} />
                        <Text style={styles.artistRating}>4.7</Text>
                    </View>
                </View>
            </View>

            {/* Bottom Navigation */}
            <View style={styles.bottomNav}>
                <Text>Home</Text>
                <Text>Search</Text>
                <Text>Social</Text>
                <Text>Profile</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    wave: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: 100,
        resizeMode: 'cover',
    },
    header: {
        marginTop: 60,
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#fff',
        fontFamily: 'lexend-era',
    },
    subHeader: {
        fontSize: 16,
        textAlign: 'center',
        color: '#000',
        marginTop: 30,
        fontFamily: 'lexend-era',
    },
    albumSection: {
        alignItems: 'center',
        marginTop: 30,
    },
    albumCover: {
        width: 150,
        height: 150,
    },
    playButton: {
        marginLeft: -220,
        marginTop: -90,
        padding: 8,
    },
    playButtonText: {
        color: '#2F4858',
        fontWeight: 'bold',
        fontFamily: 'lexend-era',
        fontSize: 10,
        textDecorationLine: 'underline',
    },
    ratingButton: {
        marginRight: -220,
        marginBottom: 90,
        padding: 8,
    },
    ratingButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        color: '#2F4858',
        fontFamily: 'lexend-era',
        fontSize: 10,
        marginTop: -30,
        textDecorationLine: 'underline',
    },
    ratingText: {
        marginTop: -40,
        fontSize: 18,
        textAlign: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'lexend-era',
    },
    rankingText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
        marginBottom: 10,
        fontFamily: 'lexend-era',
    },
    trendingSection: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    trendingTitle: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        fontFamily: 'lexend-era',
    },
    trendingArtists: {
        flexDirection: 'row',
    },
    artist: {
        alignItems: 'center',
        marginHorizontal: 10
    },
    artistImage: {
        width: 90,
        height: 90,
    },
    artistRating: {
        marginTop: 5,
        fontSize: 14,
        color: '#000',
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fff',
        paddingVertical: 10,
    },

    iconImage: {

    },

});

export default discover;