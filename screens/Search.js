import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import vector icons
import background from '../assets/images/bgImage.jpg';

const Search = () => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sample list of items to search from
  const items = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes',
    'Pineapple',
  ];

  // Filtering items based on the search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ImageBackground
      source={background}
      style={styles.background}
    >
      <View style={styles.container}>
      <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#2f4858" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a song..."
            placeholderTextColor="#555"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
          <TouchableOpacity>
            <Ionicons name="search" size={24} color="#2f4858" />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollContainer}>
            {filteredItems.map((item, index) => (
              <Text key={index} style={styles.itemText}>
                {item}
              </Text>
            ))}
          </ScrollView>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    background: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    searchBar: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '100%',
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    searchInput: {
      flex: 1,
      marginHorizontal: 10,
      fontSize: 16,
    },
    scrollContainer: {
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 5,
        height: '75%', // Adjust height for scroll area
      },
    itemText: {
      fontSize: 18,
      paddingVertical: 10,
      color: 'black',
    },
    noItemsText: {
      fontSize: 18,
      color: 'grey',
    },
  });

export default Search;
