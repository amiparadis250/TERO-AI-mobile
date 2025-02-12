import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const RegisterScreen = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    console.log('Registering:', fullName, username, email, password);
    // You can add registration logic here
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Register</Text>

      <TextInput
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 10, borderRadius: 5 }}
      />

      <TextInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={{ borderWidth: 1, width: '100%', padding: 10, marginBottom: 20, borderRadius: 5 }}
      />

      <Button title="Register" onPress={handleRegister} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
