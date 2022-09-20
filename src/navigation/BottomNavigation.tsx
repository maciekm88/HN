import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//types
import {BottomParamList} from '../types/navigation';

//Components
import BottomTabBar from './BottomTabBar';
import Main from '../screens/main/Index';
import Messages from '../screens/messages/Index';
import Friends from '../screens/friends/Index';
import Shop from '../screens/shop/Index';
import {Image, Pressable} from 'react-native';
import {theme} from '../styles/styles';
import {verticalScale} from 'react-native-size-matters';

const Tab = createBottomTabNavigator<BottomParamList>();

const BottomNavigation: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={({navigation}) => ({
        headerRight: () => (
          <Pressable
            accessibilityRole="button"
            onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../assets/placeholders/cat.jpg')}
              style={{
                width: 45,
                height: 45,
                borderRadius: 45 / 2,
                marginRight: 23,
              }}></Image>
          </Pressable>
        ),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Montserrat',
          fontWeight: '700',
          fontSize: verticalScale(16),
          color: theme.color.main,
          lineHeight: 26,
        },
      })}>
      <Tab.Screen
        name="Newsfeed"
        component={Main}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor.primary,
          },
        }}
      />
      <Tab.Screen
        name="Czat"
        component={Messages}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor.primary,
          },
        }}
      />
      <Tab.Screen
        name="Znajomi"
        component={Friends}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor.primary,
          },
        }}
      />
      <Tab.Screen
        name="Sklep"
        component={Shop}
        options={{
          headerStyle: {
            backgroundColor: theme.backgroundColor.primary,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
