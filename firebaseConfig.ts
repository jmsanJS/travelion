// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FB_APIKEY,
  authDomain: process.env.EXPO_PUBLIC_FB_AUTHDOMAIN,
  projectId: process.env.EXPO_PUBLIC_FB_PROJECTID,
  storageBucket: process.env.EXPO_PUBLIC_FB_STORAGEBUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FB_MESSAGINGSENDERID,
  appId: process.env.EXPO_PUBLIC_FB_APPID
};

// Initialize Firebase app only if there are no initialized apps
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getFirestore(app);