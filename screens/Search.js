import * as React from 'react';
import { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import vector icons
import background from '../assets/images/bgImage.jpg';

const Search = () => {
  // State for the search term
  const [searchTerm, setSearchTerm] = useState('');

  // Sample list of songs with names, artists, and images
  const songs = [
    { name: 'Blinding Lights', artist: 'The Weeknd', image: 'https://link_to_image1.jpg' },
    { name: 'Shape of You', artist: 'Ed Sheeran', image: 'https://link_to_image2.jpg' },
    { name: 'Levitating', artist: 'Dua Lipa', image: 'https://link_to_image3.jpg' },
    { name: 'Watermelon Sugar', artist: 'Harry Styles', image: 'https://link_to_image4.jpg' },
    { name: 'Peaches', artist: 'Justin Bieber', image: 'https://link_to_image5.jpg' },
    { name: 'Save Your Tears', artist: 'The Weeknd', image: 'https://link_to_image6.jpg' },
  ];

  // Filtering songs based on the search term
  const filteredSongs = songs.filter((song) =>
    song.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ImageBackground
      source={background}
      style={styles.background}
    >
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <TouchableOpacity>
            <Ionicons name="menu" size={16} color="#2f4858" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for a song or artist..."
            placeholderTextColor="#555"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />
          <TouchableOpacity>
            <Ionicons name="search" size={16} color="#2f4858" />
          </TouchableOpacity>
        </View>

        <ScrollView 
          style={styles.scrollContainer} 
          showsVerticalScrollIndicator={true} // Show vertical scrollbar
          bounces={false} // Disable bounce effect
        >
          {filteredSongs.length > 0 ? (
            filteredSongs.map((song, index) => (
              <View key={index} style={styles.songContainer}>
                <Image source={{ uri: song.image }} style={styles.songImage} />
                <View style={styles.songInfo}>
                  <Text style={styles.songName}>{song.name}</Text>
                  <Text style={styles.artistName}>{song.artist}</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.noItemsText}>No songs found</Text>
          )}
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
    elevation: 5
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 14,
  },
  scrollContainer: {
    width: '100%',
    paddingVertical: 5,
    height: '75%', // Adjust height for scroll area
    backgroundColor: 'transparent', // Make background transparent
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(252, 219, 188, 0.8)', // White background with slight transparency
    borderRadius: 8,
    marginBottom: 10,
  },
  songImage: {
    width: 50,  // Set a width for the image
    height: 50, // Set a height for the image
    borderRadius: 8, // Optional: for rounded corners
    marginRight: 10, // Space between the image and text
  },
  songInfo: {
    flex: 1, // This allows the text to take the remaining space
  },
  songName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  artistName: {
    fontSize: 10,
    color: 'grey',
  },
  noItemsText: {
    fontSize: 14,
    color: 'grey',
  },
});

export default Search;
