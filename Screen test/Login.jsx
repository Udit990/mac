import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginChecked, setLoginChecked] = useState(false);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        const parsedUser = JSON.parse(user);
        if (parsedUser.isLoggedIn) {
          navigation.navigate('Home');
        }
      }
      setLoginChecked(true); // Set login check complete
    };
    checkLoggedIn();
  }, []);

  const handleLogin = async () => {
    try {
      const user = JSON.parse(await AsyncStorage.getItem('user'));
      if (user && user.email === email && user.password === password) {
        console.log('Login successful');
        await AsyncStorage.setItem('user', JSON.stringify({ ...user, isLoggedIn: true }));
        navigation.navigate('Home');
      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  if (!loginChecked) {
    return null; // Render nothing until login check is complete
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text style={styles.subtitleText}>Enter your details below</Text>
        </View>
        <View>
          <TextInput
            placeholder='Email'
            value={email}
            onChangeText={setEmail}
            style={[styles.inputBox, styles.inputBox1]}
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
      <TouchableOpacity style={styles.getStartedBtn} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.getStartedText}>Get Started</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
  welcomeText: {
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2B2B52',
  },
  subtitleText: {
    fontSize: 15,
    textAlign: 'center',
    color: '#2B2B52',
  },
  inputBox: {
    marginTop: 30,
    height: 40,
    borderColor: '#2B2B52',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  inputBox1: {
    marginTop: 200,
  },
  loginBtn: {
    padding: 15,
    backgroundColor: '#2B2B52',
    borderRadius: 99,
    marginTop: 30,
  },
  loginText: {
    textAlign: 'center',
    color: '#DAE0E2',
    fontSize: 17,
  },
  getStartedBtn: {
    opacity: 0.6,
    alignSelf: 'center',
    marginBottom: 20,
    padding: 8,
    width: 90,
    height: 40,
    backgroundColor: '#EAF0F1',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  getStartedText: {
    textAlign: 'center',
    color: '#2C3335',
    fontSize: 14,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 10,
  },
});
