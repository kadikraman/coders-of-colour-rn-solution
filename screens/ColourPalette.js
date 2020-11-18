import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColourBox from '../components/ColourBox';

const MyApp = ({ route }) => {
  return (
    <FlatList
      ListHeaderComponent={
        <Text style={styles.text}>{route.params.paletteName}</Text>
      }
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.colorName}
      data={route.params.colours}
      renderItem={({ item }) => (
        <ColourBox hexCode={item.hexCode} colourName={item.colorName} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyApp;
