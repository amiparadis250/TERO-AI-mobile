import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      console.log('Logging in with:', username, password);
      // You can add authentication logic here
    };
  
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>
  
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 10, borderRadius: 5 }}
        />
  
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 20, borderRadius: 5 }}
        />
  
        <Button title="Login" onPress={handleLogin} />
  
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue', marginTop: 10 }}>Don't have an account? Create one</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
export default ProfileScreen;
