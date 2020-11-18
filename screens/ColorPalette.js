import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const MyApp = ({ route }) => {
  return (
    <FlatList
      ListHeaderComponent={
        <Text style={styles.text}>{route.params.paletteName}</Text>
      }
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.colorName}
      data={route.params.colors}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
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
