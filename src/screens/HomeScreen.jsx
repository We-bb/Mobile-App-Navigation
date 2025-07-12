
import React, { useState } from 'react';
import { Text, Button } from 'react-native';

import MainLayout from '../layouts/MainLayout';
import ToDoForm from '../components/ToDoForm';
import ToDoList from '../components/ToDoList';

export default function HomeScreen({ navigation }) {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    setTask('');
  };

  return (
    <MainLayout>
      <Text style={{ fontSize: 28, marginBottom: 16 }}>To Do List</Text>

      <ToDoForm task={task} setTask={setTask} addTask={addTask} />
      <ToDoList tasks={tasks} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </MainLayout>
  );
}
