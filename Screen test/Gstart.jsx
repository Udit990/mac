import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Gstart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <Text style={styles.welcomeText}>Welcome to the App</Text>
        <Text style={styles.subtitleText}>Find Your Most Loved Items Here</Text>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.btnText}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Gstart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#218F76',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  subcontainer: {
    backgroundColor: '#DAE0E2',
    height: '70%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    padding: 20,
  },
  welcomeText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2B2B52',
  },
  subtitleText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#2B2B52',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 50,
    width: '100%',
    paddingHorizontal: 20,
  },
  loginBtn: {
    backgroundColor: '#53E0BC',
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 10,
  },
  signupBtn: {
    backgroundColor: '#53E0BC',
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: 10,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#2B2B52',
  },
});
