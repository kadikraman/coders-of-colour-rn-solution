import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Home = ({ route, navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const newPalette = route.params ? route.params.newPalette : null;

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    const data = await result.json();
    setColorPalettes(data);
  }, []);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchColorPalettes();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, []);

  useEffect(() => {
    if (newPalette) {
      setColorPalettes((current) => [newPalette, ...current]);
    }
  }, [newPalette]);

  return (
    <FlatList
      ListHeaderComponent={
        <TouchableOpacity onPress={() => navigation.navigate('AddNewPalette')}>
          <Text style={styles.newText}>Add a New Palette</Text>
        </TouchableOpacity>
      }
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      contentContainerStyle={styles.container}
      keyExtractor={(item, index) => `${item.paletteName}-${index}`}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ColorPalette', { colors: item.colors })
          }
        >
          <Text style={styles.title}>{item.paletteName}</Text>
          <View style={styles.preview}>
            {item.colors.slice(0, 5).map((color) => (
              <View
                key={color.hexCode}
                style={[styles.box, { backgroundColor: color.hexCode }]}
              />
            ))}
          </View>
        </TouchableOpacity>
      )}
      data={colorPalettes}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  box: {
    height: 40,
    width: 40,
    marginRight: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    borderRadius: 5,
  },
  preview: {
    flexDirection: 'row',
  },
  container: {
    padding: 10,
  },
  newText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
