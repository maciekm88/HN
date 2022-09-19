import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {Button, View} from 'react-native';
import {verticalScale} from 'react-native-size-matters';

//components
import BottomNavigation from './BottomNavigation';

//types
import {
  BottomScreenNavigation,
  DrawerParamList,
  NewPostScreenNavigation,
} from '../types/navigation';

const Drawer = createDrawerNavigator<DrawerParamList>();

const CustomDrawerContent: React.FC<{
  navigation: BottomScreenNavigation['navigation'];
}> = ({navigation}): JSX.Element | null => {
  type NewPostScreenNavigationProp = NewPostScreenNavigation['navigation'];

  const nav = useNavigation<NewPostScreenNavigationProp>();

  const newPost = (): void => {
    nav.navigate('Nowy post', {});
  };

  return (
    <DrawerContentScrollView>
      <View
        style={{
          justifyContent: 'space-around',
          alignItems: 'stretch',
          height: verticalScale(185),
        }}>
        <Button
          onPress={() => navigation.closeDrawer()}
          title="Wróć"
          color="#7B7B7B"
        />
        <Button onPress={newPost} title="Nowy post" color="#4FCBC2" />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigation: React.FC = (): JSX.Element | null => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerType: 'front',
        swipeEnabled: true,
        drawerStyle: {
          backgroundColor: '#C4C4C4',
          width: '50%',
        },
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
