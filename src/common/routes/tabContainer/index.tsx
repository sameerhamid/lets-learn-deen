import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {NavScreenTags} from '../../constants/navScreenTags';
import Home from '../../../screens/Home';
import {IMAGES} from '../../constants/images';
import Setting from '../../../screens/Setting';
import AddUser from '../../../screens/AddUser';
import ReportGeneration from '../../../screens/ReportGeneration';

const Tab = createBottomTabNavigator();

// Tabs navigation

const TabContainer = (): React.ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{
        // @ts-ignore
        showLabel: true,
        headerShown: false,
        // tabBarStyle: {backgroundColor: Colors.background},
      }}>
      <Tab.Screen
        name={NavScreenTags.HOME_TAB}
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.HOME}
              style={{
                height: 26,
                width: 26,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    'teal'
                  : //@ts-ignore
                    'grey',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NavScreenTags.SETTING_TAB}
        component={Setting}
        options={{
          title: 'Setting',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.SETTING}
              style={{
                height: 26,
                width: 26,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    'teal'
                  : //@ts-ignore
                    'grey',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NavScreenTags.ADD_USER_TAB}
        component={AddUser}
        options={{
          title: 'Add User',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.USER}
              style={{
                height: 26,
                width: 26,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    'teal'
                  : //@ts-ignore
                    'grey',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={NavScreenTags.REPORT_GENERATION_TAB}
        component={ReportGeneration}
        options={{
          title: 'Report Generation',
          tabBarIcon: ({focused}) => (
            <Image
              source={IMAGES.REPORT}
              style={{
                height: 26,
                width: 26,
                objectFit: 'contain',
                tintColor: focused
                  ? //@ts-ignore
                    'teal'
                  : //@ts-ignore
                    'grey',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabContainer;
