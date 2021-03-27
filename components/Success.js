import React from "react";
import { View, Text } from "react-native";


export default function Success() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white", padding: 10}}>
      <Text style={{ fontSize: 18, fontWeight: "600"}}>Your request for a loan has been sent!</Text>
      <Text style={{ fontSize: 18, fontWeight: "600"}}>Thank you</Text>
    </View>
  );
};
