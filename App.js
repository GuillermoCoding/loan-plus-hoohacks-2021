import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoanForm from './components/LoanForm';
import Friends from "./components/Friends";
import IdentityUpload from "./components/IdentityUpload";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Confirmation" component={IdentityUpload} />
        {/*
          <Stack.Screen name="Create a loan" component={LoanForm} />
          <Stack.Screen name="Friends" component={Friends} />
          */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
