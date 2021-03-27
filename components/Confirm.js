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
      <Text style={{fontSize: 17}}>OR</Text>
      <View style={styles.identityUploadContainer}>
        <View style={styles.signatureContainer}>
          <Text>X</Text>
        </View>
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheading}>Signature in the box above</Text>
        </View>
      </View>
			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={styles.declineButtonContainer}>
					<Text style={styles.disagreeButtonText}>Go Back</Text>
				</TouchableOpacity>

				<TouchableOpacity style={styles.agreeButtonContainer}>
					<Text style={styles.agreeButtonText}>Confirm</Text>
				</TouchableOpacity>
			</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
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
    borderColor: "#a6a6a6",
    borderRadius: 10,
    padding: 9
  },
  imagePreview: {
    //backgroundColor: "red",
    height: 230,
    borderWidth: 3,
    borderStyle: "dashed",
    borderRadius: 10,
    borderColor: "gray",
    //flexDirection: "row",
   // alignItems: "center",
    //justifyContent: "center"
  },
  subheadingContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  subheading: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "500",
    color: "#666666"
  },
  agreeButtonContainer: {
    elevation: 8,
    backgroundColor: "#4EE5B7",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 12,
    width: 180,
  },
  declineButtonContainer: {
    elevation: 8,
    backgroundColor: "#ffff",
    borderRadius: 24,
    borderStyle: "solid",
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 12,
    width: 180,
  },
  agreeButtonText: {
    fontSize: 18,
    color: "#fff",
    alignSelf: "center",
    //textTransform: "uppercase"
  },
  disagreeButtonText: {
    fontSize: 18,
    alignSelf: "center",
    //textTransform: "uppercase"
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 50
  }
});
