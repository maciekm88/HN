import React from 'react';
import {View, TouchableOpacity} from 'react-native';
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
          <TouchableOpacity
            accessibilityHint="Nawiguje do innego ekranu aplikacji"
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            //   style={{...styles.button}}
          >
            <View>
              <PoppinsBold
                color={isFocused ? theme.color.tetriary : theme.color.primary}
                size={theme.fontSize.twelve}
                style={{
                  // ...styles.label,
                  backgroundColor: isFocused
                    ? theme.backgroundColor.tetriary
                    : theme.backgroundColor.primary,
                }}>
                {label}
              </PoppinsBold>
            </View>
          </TouchableOpacity>
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
    justifyContent: 'flex-start',
  },
  button: {
    paddingVertical: '6@vs',
    paddingHorizontal: '10@s',
  },
  label: {
    textTransform: 'uppercase',
    letterSpacing: '0.48@s',
    paddingVertical: '3@vs',
    paddingHorizontal: '14@s',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default HealthNationTabBars;
