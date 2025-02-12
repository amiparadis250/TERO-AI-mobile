import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import HomeSection from '../components/HomeSection';

const sections = [
  {
    title: 'Background Story of Tero AI',
    content: 'Tero AI was built to revolutionize content creation by transforming text and audio into high-quality videos. We believe AI can simplify the creative process.',
  },
  {
    title: 'Vision & Mission',
    content: 'Our mission is to make AI-driven content accessible to everyone. Our vision is to create an AI-powered media tool that empowers users globally.',
  },
  {
    title: 'About the Developer Group',
    content: 'Tero AI is developed by a passionate team of AI engineers and software developers dedicated to pushing the limits of AI in media creation.',
  },
];

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <HomeSection title={item.title} content={item.content} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
});

export default HomeScreen;
