import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import GameCard from './components/GameCard';
const gameData = require('./gamedata/gameData.json');

const App = (): JSX.Element => {
  // const isDarkMode = useColorScheme() === 'dark';
  // console.log(isDarkMode);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Games Lists</Text>
        <Text style={styles.description}>See all the list of games here</Text>
        <FlatList
          data={gameData}
          renderItem={({item}) => <GameCard key={item.id} {...item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: 'red',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 8,
    color: '#666',
  },
});

export default App;
