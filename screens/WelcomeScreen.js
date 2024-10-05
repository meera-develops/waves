import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Hello World!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
    }
});

export default WelcomeScreen;
