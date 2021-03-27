import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { Camera } from 'expo-camera';

export default function IdentityUpload() {
	const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
      <View style={{ height: 50 }}>
        <TouchableOpacity style={{ height: 50 }} onPress={async () => {
            let photo = await camera.takePictureAsync();
            console.log(photo);
            setImageUrl(photo.uri);
          }}>
          <Text>Take image</Text>
        </TouchableOpacity>
      </View>
      {imageUrl? (
        <View styles={{ height: 50 }}>
          <Text>HELLLO </Text>
        </View>
      ): null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  camera: {flex: 1},
  buttonContainer: {},
  button: {}
}); 
