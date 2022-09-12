import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HealthNationTabBars from './HealthNationTabBars';

//types
import {MainScreenParamList, MainScreenTabParamList} from '../types/navigation';

//Components
import Newsfeed from '../screens/main/newsfeed/Index';
import Events from '../screens/main/events/Index';
import Articles from '../screens/main/articles/Index';
import Video from '../screens/main/video/Index';

const Stack = createNativeStackNavigator<MainScreenParamList>();
const Tab = createMaterialTopTabNavigator<MainScreenTabParamList>();

const MainTopNavigation: React.FC = (): JSX.Element | null => {
  return (
    <Tab.Navigator
      tabBar={(props: any) => <HealthNationTabBars {...props} />}
      screenOptions={{tabBarScrollEnabled: true}}>
      <Tab.Screen name="Tablica" component={Newsfeed} />
      <Tab.Screen name="Wydarzenia" component={Events} />
      <Tab.Screen name="Artykuły" component={Articles} />
      <Tab.Screen name="Wideo" component={Video} />
    </Tab.Navigator>
  );
};

const Index: React.FC = (): JSX.Element | null => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainTopNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Index;
