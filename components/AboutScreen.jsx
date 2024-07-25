import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';
import MainLayout from '../layouts/MainLayout';

function AboutScreen({ navigation }) {
  const appName = "ToDo App";
  const yourName = "Your Name";
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>App Name: {appName}</Text>
        <Text style={styles.text}>Your Name: {yourName}</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;

