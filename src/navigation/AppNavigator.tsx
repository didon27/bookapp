import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from 'screens/MainScreen';
import DetailsScreen from 'screens/DetailsScreen';
import { Book } from 'types/booksTypes';
import Screens from 'constants/screens';

export type RootStackParamList = {
  Main: undefined;
  Details: { book: Book };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.Main}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={Screens.Main} component={MainScreen} />
      <Stack.Screen name={Screens.Details} component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;