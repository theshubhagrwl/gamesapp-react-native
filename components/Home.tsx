import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import GameCard from './GameCard';
import {useSelector} from 'react-redux';
import {GameState} from '../interfaces/interfaces';

const Home = () => {
  const gameData = useSelector((state: GameState) => state.games);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Games</Text>
      <FlatList
        data={gameData.games}
        renderItem={({item}) => <GameCard key={item.id} {...item} />}
      />
    </View>
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
    margin: 10,
  },
});

export default Home;
