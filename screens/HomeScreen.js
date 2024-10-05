import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the HOME Screen!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
});

export default HomeScreen;