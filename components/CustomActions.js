import { TouchableOpacity, Text, View, StyleSheet, Alert } from 'react-native';
import { useActionSheet } from '@expo/react-native-action-sheet';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import * as MediaLibrary from 'expo-media-library';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const CustomActions = ({
  wrapperStyle,
  iconTextStyle,
  onSend,
  storage,
  userID,
}) => {
  // space-saving action sheet menu to choose from custom actions
  const actionSheet = useActionSheet();
  const onActionPress = () => {
    // options for the action sheet
    const options = [
      'Photo From Library',
      'Take Picture',
      'Send Location',
      'Cancel',
    ];
    const cancelButtonIndex = options.length - 1;
    actionSheet.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      // async function to handle the different options
      async (buttonIndex) => {
        switch (buttonIndex) {
          case 0:
            pickImage();
            return;
          case 1:
            takePhoto();
            return;
          case 2:
            getLocation();
          default:
        }
      }
    );
  };

  // handles images from firebase storage
  const uploadAndSendImage = async (imageURI) => {
    const newUploadRef = ref(storage, 'images/' + userID + '/' + Date.now());
    const response = await fetch(imageURI);
    // gets the image as a blob
    const blob = await response.blob();
    uploadBytes(newUploadRef, blob)
      // uploads the image to firebase storage, gets the download URL, and sends
      .then(async (snapshot) => {
        const imageURL = await getDownloadURL(snapshot.ref);
        onSend({
          image: imageURL,
          user: {
            _id: userID,
            name: 'User',
          },
        });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
        Alert.alert('Error uploading image. Please try again.');
      });
  };

  // handles pickImage
  const pickImage = async () => {
    let permissions = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissions?.granted) {
      // launches the image library and sends image, unless cancelled/no permissions
      let result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        await MediaLibrary.createAssetAsync(result.assets[0].uri);
        await uploadAndSendImage(result.assets[0].uri);
      } else Alert.alert("Permissions haven't been granted.");
    }
  };

  // handles takePhoto
  const takePhoto = async () => {
    let permissions = await ImagePicker.requestCameraPermissionsAsync();
    if (permissions?.granted) {
      // launches the camera and sends image, unless cancelled/no permissions
      let result = await ImagePicker.launchCameraAsync();
      if (!result.canceled) {
        await MediaLibrary.createAssetAsync(result.assets[0].uri);
        await uploadAndSendImage(result.assets[0].uri);
      } else Alert.alert("Permissions haven't been granted.");
    }
  };

  // handles getLocation
  const getLocation = async () => {
    let permissions = await Location.requestForegroundPermissionsAsync();
    if (permissions?.granted) {
      // gets the current location if permissions granted
      const location = await Location.getCurrentPositionAsync({});
      if (location) {
        onSend({
          location: {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          },
        });
      } else Alert.alert('You need to enable location services...');
    } else Alert.alert("You haven't granted permissions...");
  };

  // renders customActions component
  return (
    <TouchableOpacity
      style={(styles.container, wrapperStyle)}
      onPress={onActionPress}
    >
      <View style={[styles.wrapper, wrapperStyle]}>
        <Text style={[styles.iconText, iconTextStyle]}>+</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 26,
    height: 26,
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {
    borderRadius: 13,
    borderColor: '#b2b2b2',
    borderWidth: 2,
    flex: 1,
  },
  iconText: {
    color: '#b2b2b2',
    fontWeight: 'bold',
    fontSize: 10,
    backgroundColor: 'transparent',
    textAlign: 'center',
  },
});

export default CustomActions;
