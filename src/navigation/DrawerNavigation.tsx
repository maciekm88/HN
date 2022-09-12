import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {Button} from 'react-native';

//components
import BottomNavigation from './BottomNavigation';

//types
import {BottomScreenNavigation, DrawerParamList} from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent: React.FC<{
  navigation: BottomScreenNavigation['navigation'];
}> = ({navigation}): JSX.Element | null => {
  return (
    <DrawerContentScrollView>
      <Button onPress={() => navigation.closeDrawer()} title="Close Profile" />
    </DrawerContentScrollView>
  );
};

const DrawerNavigation: React.FC = (): JSX.Element | null => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        swipeEnabled: false,
      }}>
      <Drawer.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
