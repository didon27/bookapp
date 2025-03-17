import { getApp, initializeApp } from '@react-native-firebase/app';
import { getRemoteConfig, fetchAndActivate, getValue, setDefaults, setConfigSettings } from '@react-native-firebase/remote-config';

const firebaseConfig = {
    apiKey: "AIzaSyDaE0HdS1xDvOuHPGwD3QFbFM6Ujoc3_1k",
    authDomain: "book-app-cc0a8.firebaseapp.com",
    projectId: "book-app-cc0a8",
    storageBucket: "book-app-cc0a8.appspot.com",
    messagingSenderId: "161428970931",
    appId: "1:161428970931:ios:21b12d70ea5165ea15bfc6",
    databaseURL: "https://book-app-cc0a8.firebaseio.com",
};

export const initializeFirebase = async (): Promise<void> => {    
    try {
        let app;
        try {
            app = getApp();
        } catch (error) {
            app = initializeApp(firebaseConfig);
        }

        const remoteConfig = getRemoteConfig(app);

        await setDefaults(remoteConfig, {
            json_data: JSON.stringify({
                books: [],
                top_banner_slides: [],
                you_will_like_section: []
            }),
            details_carousel: JSON.stringify([])
        });

        await setConfigSettings(remoteConfig, {
            minimumFetchIntervalMillis: __DEV__ ? 0 : 3600000,
        });

        await fetchAndActivate(remoteConfig);
        console.log('Firebase successfully initialized!');
    } catch (error) {
        console.error('Firebase initialization error:', error);
        throw error;
    }
};

export const getRemoteConfigValue = async (key: string): Promise<string> => {
    try {        
        const app = getApp();
        const remoteConfig = getRemoteConfig(app);
        
        const value = getValue(remoteConfig, key).asString();
        
        if (!value) {
            throw new Error(`No value for key: ${key}`);
        }
        return value;
    } catch (error) {
        console.error(`Error getting Remote Config for key ${key}:`, error);
        throw error;
    }
};