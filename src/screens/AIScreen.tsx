import React from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';

const AIScreen = () => {
  // Function to handle button click and show alert
  const handleButtonClick = (aiName: string) => {
    Alert.alert(`${aiName} is selected!`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>AI Features</Text>

      {/* Text to Video AI */}
      <View style={styles.aiContainer}>
        <Text style={styles.aiTitle}>Text to Video AI</Text>
        <Text style={styles.aiDescription}>
          This AI can convert text into a video. Simply input any text, and this AI
          will generate a video based on the provided text.
        </Text>
        <Button title="Select Text to Video AI" onPress={() => handleButtonClick('Text to Video AI')} />
      </View>

      {/* Audio to Video AI  video Ai needed to be updsted with correct button function*/}
      <View style={styles.aiContainer}>
        <Text style={styles.aiTitle}>Audio to Video AI</Text>
        <Text style={styles.aiDescription}>
          This AI allows you to convert audio files into video. Upload an audio file,
          and it will generate a video that matches the audio content.
        </Text>
        <Button title="Select Audio to Video AI" onPress={() => handleButtonClick('Audio to Video AI')} />
      </View>

      {/* AI Chat so we need to change this section  */}
      <View style={styles.aiContainer}>
        <Text style={styles.aiTitle}>AI Chat</Text>
        <Text style={styles.aiDescription}>
          This AI acts as a conversational chatbot. You can interact with it by typing
          messages, and it will respond with intelligent answers based on your input.
        </Text>
        <Button title="Select AI Chat" onPress={() => handleButtonClick('AI Chat')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  aiContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  aiTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aiDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#555',
  },
});

export default AIScreen;
