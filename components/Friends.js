import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function Friends(props) {
  const message = props.route.params.message;

  return (
    <View>
      <Text>Friends</Text>
      <Text>{message}</Text>
    </View>
  );
};
