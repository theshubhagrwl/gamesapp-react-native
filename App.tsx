import React from 'react';
import {
  View,
  Text,
  // SafeAreaView,
  StyleSheet,
  // useColorScheme,
  ScrollView,
} from 'react-native';

const App = (): JSX.Element => {
  // const isDarkMode = useColorScheme() === 'dark';
  // console.log(isDarkMode);

  return (
    // <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.title}>Games List</Text>
      <Text style={styles.description}>See all the list of games here</Text>
      <ScrollView>
        <View style={styles.card}>
          <Text>HELLO</Text>
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  heading: {
    color: 'red',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
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
