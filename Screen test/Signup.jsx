import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify({ email, password, isLoggedIn: false }));
      console.log("Signup with:", email, password);
      navigation.navigate('Login');
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.headerText}>Get started free</Text>
          <Text style={styles.subHeaderText}>Enter your details below</Text>
        </View>
        <View>
          <TextInput 
            placeholder='Name'
            value={name} 
            onChangeText={setName}
            style={[styles.inputBox, styles.inputBoxFirst]}
          />
          <TextInput 
            placeholder='Email'
            keyboardType="email-address" 
            value={email}
            onChangeText={setEmail}
            style={styles.inputBox}
          />
          <TextInput
            placeholder='Password'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} 
            style={styles.inputBox}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.logInButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logInButtonText}>Log in</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignup}>
          <Text style={styles.signUpButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text style={styles.otpText}>Signup with OTP</Text>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  subContainer: {
    padding: 20,
    backgroundColor: '#218F76',
    width: '100%',
    height: '70%',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
    justifyContent: 'flex-end',
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2B2B52',
  },
  subHeaderText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#2B2B52',
  },
  inputBox: {
    height: 40,
    borderColor: '#2B2B52',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputBoxFirst: {
    marginTop: 30,
  },
  logInButton: {
    opacity: 0.6,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 8,
    width: 80
