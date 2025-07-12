
import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export default function ToDoList({ tasks }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text style={styles.task}>{item.text}</Text>}
      ListEmptyComponent={<Text style={styles.empty}>No tasks yet</Text>}
    />
  );
}

const styles = StyleSheet.create({
  task: {
    fontSize: 18,
    paddingVertical: 8,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  empty: {
    fontStyle: 'italic',
    color: '#999',
  },
});
