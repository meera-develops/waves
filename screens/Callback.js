// Callback.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAccessToken } from '../spotify-api/auth';

const Callback = () => {

    const navigation = useNavigation();

    useEffect(() => {
        const handleCallback = async () => {
            const url = new URL(window.location.href);

            const code = url.searchParams.get('code');
            const token = await getAccessToken(code);

                // // Exchange the authorization code for an access token
                // const token = await getAccessToken(code);
                // console.log('Access Token:', token);
                // // Optionally, navigate to another screen or store the token
            
        // Clean up the listener on component unmount
        if (token) {
            // Save the access token (use AsyncStorage or your state management)
            console.log('Access Token:', token);
            localStorage.setItem('access_token', token);
            // Navigate to the home screen or wherever you want
            navigation.navigate('Home');
          }
        };
    

    
        handleCallback();
    }), [navigation];

    return (
        <View>
            <Text>Logging you in...</Text>
        </View>
    );
};

export default Callback;
