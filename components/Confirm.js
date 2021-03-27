import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
//import Signature from 'react-native-signature-canvas';
import IdentityUpload from "./IdentityUpload";

export default function Confirm() {
  const [imageUrl, setImageUrl] = useState(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  if (isCameraOpen) {
    return <IdentityUpload setImageUrl={setImageUrl} setIsCameraOpen={setIsCameraOpen} />
  }

  return (
    <View style={styles.container}>
      <View style={styles.identityUploadContainer}>
        <View style={styles.imagePreview}>
          <TouchableOpacity onPress={() => setIsCameraOpen(true)}>
            {imageUrl? (
              <Image source={{ uri: imageUrl }} style={{height: 200}} />
            ): 
              <Text>Click here to take picture</Text>
            }
          </TouchableOpacity>
        </View>
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>Align your license with the frame</Text>
        </View>
      </View>
      <View style={styles.identityUploadContainer}>
        <View style={styles.signatureContainer}>
          <Text>X</Text>
        </View>
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>Signature in the box above</Text>
        </View>
      </View>

      <View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: "10%",
    backgroundColor: "white",
    alignItems: "center",
    //backgroundColor: "green"
  },
  identityUploadContainer: {
    //backgroundColor: "yellow",
    width: "90%",
    marginTop: 50
  },
  signatureContainer: {
    height: 80,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    padding: 9
  },
  imagePreview: {
    backgroundColor: "red",
    height: 230,
    borderWidth: 3,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "gray"
  },
  subheadingContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  subheading: {
    fontSize: 15,
    alignSelf: "center",
    fontWeight: "600",
  }
});
