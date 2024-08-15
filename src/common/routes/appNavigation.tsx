import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TabContainer from './tabContainer';
import {navigationRef} from '../utils/navigatorUtils';
import {NavScreenTags} from '../constants/navScreenTags';
import StudentDetails from '../../screens/Home/StudentDetails';

const Stack = createStackNavigator();

const RooStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NavScreenTags.BOTTOM_TAB_NAV}
        component={TabContainer}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name={NavScreenTags.STUDENT_DETAILS}
        component={StudentDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RooStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
