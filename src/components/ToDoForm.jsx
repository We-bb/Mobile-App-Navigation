
import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function ToDoForm({ task, setTask, addTask }) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" onPress={addTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 4,
    height: 40,
  },
});
