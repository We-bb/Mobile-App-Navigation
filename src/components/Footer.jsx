
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2025 Made by Cody</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  text: {
    fontSize: 14,
    color: '#666',
  },
});
