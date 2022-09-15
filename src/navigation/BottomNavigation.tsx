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
import {Image, TouchableOpacity} from 'react-native';

const Tab = createBottomTabNavigator<BottomParamList>();

const BottomNavigation: React.FC = (): JSX.Element => {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={({navigation}) => ({
        headerRight: () => (
          // <Button onPress={() => navigation.openDrawer()} title="Profil" />
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => navigation.openDrawer()}>
            <Image
              source={require('../assets/placeholders/cat.jpg')}
              style={{width: 45, height: 45, borderRadius: 45 / 2}}></Image>
          </TouchableOpacity>
        ),
      })}>
      <Tab.Screen name="Panel" component={Main} />
      <Tab.Screen name="Czat" component={Messages} />
      <Tab.Screen name="Znajomi" component={Friends} />
      <Tab.Screen name="Sklep" component={Shop} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
