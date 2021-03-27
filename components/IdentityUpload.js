import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Camera } from 'expo-camera';

export default function IdentityUpload({ setImageUrl, setIsCameraOpen }) {
	const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  //const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={ref => {setCamera(ref)}}>
          <View style={{height: 200, width: "80%", borderWidth: 2, borderColor: "#4EE5B7", borderRadius: 20, alignSelf: "center", marginTop: "80%"}}>
          </View>
        </Camera>
      {/*
      <View>
      <View>
        <View styles={{ height: 200}}>
          <Image source={{ uri: imageUrl }} style={{width:200,height:200}} />
        </View>
      </View> 
      </View>
      )}
        */}
      <View style={{width: "100%", flexDirection: "row", justifyContent: "center"}}>
        <TouchableOpacity style={styles.buttonContainer} onPress={async () => {
            let photo = await camera.takePictureAsync();
            setImageUrl(photo.uri);
            setIsCameraOpen(false);
          }}>
          <Text style={styles.buttonText}>Take image</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    height: "90%"
  },
  buttonContainer: {
    marginTop: 10,
    height: 40,
    width: "50%",
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50
  },
  buttonText: {
    color: "white",
    fontSize: 17
  }
}); 
