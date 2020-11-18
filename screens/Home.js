import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';

const COLORS = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb4b16' },
  { colorName: 'Red', hexCode: '#dc322f' },
  { colorName: 'Magenta', hexCode: '#d33682' },
  { colorName: 'Violet', hexCode: '#6c71c4' },
  { colorName: 'Blue', hexCode: '#268bd2' },
  { colorName: 'Cyan', hexCode: '#2aa198' },
  { colorName: 'Green', hexCode: '#859900' },
];

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colours: COLORS },
  { paletteName: 'Rainbow', colours: RAINBOW },
  { paletteName: 'Frontend Masters', colours: FRONTEND_MASTERS },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <FlatList
      contentContainerStyle={styles.container}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ColorPalette', { colours: item.colours })
          }
        >
          <Text style={styles.title}>{item.paletteName}</Text>
          <View style={styles.preview}>
            {item.colours.slice(0, 5).map((colour) => (
              <View
                key={colour.hexCode}
                style={[styles.box, { backgroundColor: colour.hexCode }]}
              />
            ))}
          </View>
        </TouchableOpacity>
      )}
      data={COLOR_PALETTES}
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
});

export default Home;
