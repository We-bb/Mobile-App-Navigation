
import React from 'react';
import { Text, Button } from 'react-native';

import MainLayout from '../layouts/MainLayout';

export default function AboutScreen({ navigation }) {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>My To Do App</Text>
      <Text style={{ fontSize: 20, marginBottom: 8 }}>By Cody</Text>
      <Text style={{ fontSize: 16, color: 'gray', marginBottom: 16 }}>
        Date: {currentDate}
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </MainLayout>
  );
}
