import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import Constants from 'expo-constants';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({ shouldShowAlert: true, shouldPlaySound: true, shouldSetBadge: true }),
});

export async function registerForPushNotificationsAsync() {
  if (!Device.isDevice) return 'SIMULATOR_TOKEN';
  const { status: existing } = await Notifications.getPermissionsAsync();
  let final = existing;
  if (existing !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    final = status;
  }
  if (final !== 'granted') return null;
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('ajala', {
      name: 'Ajala', importance: Notifications.AndroidImportance.MAX, lightColor: '#C8813A',
    });
  }
  try {
    const projectId = Constants?.expoConfig?.extra?.eas?.projectId;
    if (projectId) {
      const token = await Notifications.getExpoPushTokenAsync({ projectId });
      return token.data;
    }
  } catch (e) {}
  return null;
}

export async function sendLocalNotification({ title, body }) {
  await Notifications.scheduleNotificationAsync({ content: { title, body, sound: true }, trigger: null });
}

export const NotifTemplates = {
  newReview:   (name, trip) => ({ title: '⭐ New Review', body: `${name} reviewed "${trip}"` }),
  tourGuide:   ()           => ({ title: '🧭 You\'re a Tour Guide!', body: 'Your DM is now open for partnerships.' }),
  newMessage:  (name)       => ({ title: `💬 ${name}`, body: 'Sent you a message' }),
  newFollower: (name)       => ({ title: `🌍 ${name} followed you`, body: '' }),
  tripStarted: (trip)       => ({ title: '▶️ Trip Started!', body: `"${trip}" is now live.` }),
  tripEnded:   (trip)       => ({ title: '⭐ How was your trip?', body: `"${trip}" ended. Leave a review!` }),
};
