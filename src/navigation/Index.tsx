import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//types
import {RootStackParamList} from '../types/navigation';

//Components
import DrawerNavigation from './DrawerNavigation';
import Post from '../components/Post';
import NewPost from '../components/NewPost';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Index: React.FC = (): JSX.Element | null => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Nowy post" component={NewPost} />
          <Stack.Group
            screenOptions={({route}) => ({
              title: route.params.title,
            })}></Stack.Group>
          <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Index;
