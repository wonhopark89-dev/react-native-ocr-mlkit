/**
 * Created by Dima Portenko on 05.07.2021
 */
import React from 'react';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';

import * as routes from './routes';
import {SelectImageScreen} from '../screens/SelectImageScreen';
import {RouteProp} from '@react-navigation/native';
import {ProcessImageScreen} from '../screens/ProcessImageScreen';

type RootStackParamList = {
  SelectScreen: undefined;
  ProcessImageScreen: {
    uri: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export type SelectScreenNavigationProps = StackNavigationProp<RootStackParamList, 'SelectScreen'>;

export type ProcessImageNavigationProps = StackNavigationProp<RootStackParamList, 'ProcessImageScreen'>;

export type ProcessImageRouteProps = RouteProp<RootStackParamList, 'ProcessImageScreen'>;

export const Navigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: 'black',
    }}>
    <Stack.Screen name={'SelectScreen'} component={SelectImageScreen} />
    <Stack.Screen name={'ProcessImageScreen'} component={ProcessImageScreen} />
  </Stack.Navigator>
);
