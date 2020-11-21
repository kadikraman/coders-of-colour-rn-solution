import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColourBox = ({ hexCode, colorName }) => {
  const textColour =
    parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';
  return (
    <View style={[styles.box, { backgroundColor: hexCode }]}>
      <Text style={[styles.boxText, { color: textColour }]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  boxText: {
    color: 'white',
    fontSize: 18,
  },
});

export default ColourBox;
