import React from 'react';
import {Pressable, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale, verticalScale, ScaledSheet} from 'react-native-size-matters';

//Components
import NavIcons from './NavIcons';

//styles
import {theme} from '../styles/styles';

const BottomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        {state.routes.map((route: any, index: number) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              accessibilityRole="button"
              accessibilityState={
                isFocused ? {selected: true} : {selected: false}
              }
              accessibilityLabel={options.tabBarAccessibilityLabel}
              accessibilityHint=""
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.container}>
              <View
                style={{
                  ...styles.buttonContainer,
                  color: isFocused
                    ? theme.backgroundColor.quinary
                    : theme.backgroundColor.tetriary,
                }}>
                {NavIcons(label, isFocused)}
              </View>
              {/* <Text style={{color: isFocused ? 'yellow' : '#222'}}>
                {label}
              </Text> */}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomTabBar;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.backgroundColor.secondary,
    height: verticalScale(70),
  },
  buttonContainer: {
    width: scale(50),
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
