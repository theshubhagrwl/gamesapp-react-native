import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ToastAndroid,
  ScrollView,
} from 'react-native';

interface GameCardInterface {
  title: string;
  steamUrl: string;
  publisher: string;
  genre: string;
  status: string;
  highlightsSupported: boolean;
  fullyOptimized: boolean;
}

const GameCard = ({
  title,
  steamUrl,
  publisher,
  genre,
  status,
  highlightsSupported,
  fullyOptimized,
}: GameCardInterface) => {
  //last ele which is app id
  const appId = steamUrl?.split('/').pop();
  const imageUrl = `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`;
  const genres = genre?.split(',')!;
  //there is , in the end of data
  if (!genres[genres?.length - 1]) {
    genres.pop();
  }

  const showToast = () => {
    ToastAndroid.show(`You selected ${title}`, ToastAndroid.SHORT);
  };
  return (
    <Pressable onPress={showToast}>
      <ScrollView horizontal style={styles.cardContainer}>
        {/* <Pressable > */}
        <Image source={{uri: imageUrl}} style={styles.image} />
        <View style={styles.cardContent}>
          <Text
            style={styles.title}
            lineBreakMode="tail"
            // numberOfLines={2}
            // ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text style={styles.publisher}>{publisher}</Text>
          <View style={styles.genreContainer}>
            {genres?.map((genreItem, index) => (
              <View key={index} style={styles.genrePill}>
                <Text style={styles.genreText}>{genreItem.trim()}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.highlights}>
            Highlights: {highlightsSupported ? 'Supported' : 'Not Supported'}
          </Text>
          <Text style={styles.optimized}>
            Fully Optimized: {fullyOptimized ? 'Yes' : 'No'}
          </Text>
          <Text style={styles.status}>{status}</Text>
        </View>
      </ScrollView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  image: {
    width: 120,
    height: 180,
    marginRight: 10,
  },
  cardContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  publisher: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  genreContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 5,
  },
  genrePill: {
    backgroundColor: '#e3e3e3',
    borderRadius: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 5,
    marginBottom: 5,
  },
  genreText: {
    fontSize: 12,
    color: '#555',
  },
  status: {
    fontSize: 14,
    color: 'green',
  },
  highlights: {
    fontSize: 14,
    marginBottom: 5,
  },
  optimized: {
    fontSize: 14,
    marginBottom: 5,
  },
});

export default GameCard;
