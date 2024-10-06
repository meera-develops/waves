// Callback.js
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAccessToken } from '../spotify-api/auth';
import { getUser } from '../spotify-api/userInfo';

const Callback = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const handleCallback = async () => {
            try {
                console.log('here')
                // Send accessTok and refreshTok
                const url = new URL(window.location.href);
                const code = url.searchParams.get('code');
                const response = await getAccessToken(code);

                const accessTok = response.access_token;
                const refreshTok = response.refresh_token;
                console.log(accessTok)
                if (accessTok) {
                    localStorage.setItem('access_token', accessTok);
                    // Navigate to the home screen or wherever you want
                    navigation.navigate('Home');
                }
                if (refreshTok) {
                    localStorage.setItem('refresh_token', refreshTok);
                }

                let user = await getUser(accessTok, refreshTok);

            } catch (err) {
                console.log('Error saving user:', err);
            }
        };

        handleCallback();
    }, [navigation]);

    return (
        <View>
            <Text>Logging you in...</Text>
        </View>
    );
};

export default Callback;
