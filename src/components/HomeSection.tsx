import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SectionProps {
  title: string;
  content: string;
}

const HomeSection: React.FC<SectionProps> = ({ title, content }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    height: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: '#666',
  },
});

export default HomeSection;
