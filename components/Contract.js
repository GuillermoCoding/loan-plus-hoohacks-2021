import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Contract() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Corntract page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green"
  },
  text: {
    fontSize: 12,
  }
});
