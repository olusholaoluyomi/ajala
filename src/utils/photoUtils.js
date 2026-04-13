import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { Alert, Platform } from 'react-native';

export async function pickPhotos(currentCount = 0, max = 4) {
  const remaining = max - currentCount;
  if (remaining <= 0) { Alert.alert('Photo limit', `Maximum ${max} photos.`); return []; }
  if (Platform.OS !== 'web') {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') { Alert.alert('Permission needed', 'Allow photo access in Settings.'); return []; }
  }
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      selectionLimit: remaining,
      quality: 1,
    });
    if (result.canceled) return [];
    return await Promise.all(result.assets.map(a => compress(a.uri)));
  } catch { return []; }
}

export async function takePhoto() {
  const { status } = await ImagePicker.requestCameraPermissionsAsync();
  if (status !== 'granted') { Alert.alert('Camera needed', 'Allow camera access in Settings.'); return null; }
  try {
    const result = await ImagePicker.launchCameraAsync({ quality: 1 });
    if (result.canceled) return null;
    return await compress(result.assets[0].uri);
  } catch { return null; }
}

async function compress(uri) {
  try {
    const r = await ImageManipulator.manipulateAsync(uri, [{ resize: { width: 1200 } }], { compress: 0.7, format: ImageManipulator.SaveFormat.JPEG });
    return r.uri;
  } catch { return uri; }
}

export function showPhotoSource(onLibrary, onCamera) {
  Alert.alert('Add Photo', 'Choose source', [
    { text: '📷 Camera', onPress: onCamera },
    { text: '🖼️ Library', onPress: onLibrary },
    { text: 'Cancel', style: 'cancel' },
  ]);
}
