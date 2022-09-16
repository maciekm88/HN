import React from 'react';
import {View, Pressable} from 'react-native';
import {theme} from '../styles/styles';
import {ScaledSheet} from 'react-native-size-matters';

//components
import PoppinsBold from '../components/fonts/PoppinsBold';

const HealthNationTabBars: React.FC = ({
  state,
  descriptors,
  navigation,
}: any): JSX.Element | null => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tapBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tapBarLabel !== undefined
            ? options.tapBarLabel
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
            navigation.navigate(route.name);
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
            accessibilityHint="Nawiguje do innego zakładki aplikacji w obrębie obecnego ekranu"
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}>
            <View>
              <PoppinsBold
                color={isFocused ? theme.color.white : theme.color.grey}
                size={theme.fontSize.twelve}
                style={{
                  ...styles.label,
                  backgroundColor: isFocused
                    ? theme.backgroundColor.main
                    : theme.backgroundColor.primary,
                  borderWidth: isFocused ? 2 : 2,
                  borderColor: isFocused
                    ? theme.backgroundColor.main
                    : theme.color.grey,
                }}>
                {label}
              </PoppinsBold>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    height: '46@vs',
    backgroundColor: theme.backgroundColor.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 97,
  },
  label: {
    letterSpacing: '0.48@s',
    paddingVertical: '3@vs',
    paddingHorizontal: '14@s',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 10,
  },
});

export default HealthNationTabBars;
