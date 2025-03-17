import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import AppNavigator from 'navigation/AppNavigator';
import store from 'store/store';
import SplashScreen from 'components/SplashScreen';

const App = () => {
    return (
        <Provider store={store}>
            <SplashScreen />
            <SafeAreaProvider>
                <StatusBar barStyle="light-content"/>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
};

export default App;