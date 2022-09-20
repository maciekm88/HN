import React from 'react';
import {View, Pressable, TextInput, ScrollView} from 'react-native';
import {theme} from '../styles/styles';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';

//components
import MontserratSemiBold from '../components/fonts/Montserrat-SemiBold';
import SearchIcon from '../assets/icons/SearchIcon';

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
    <>
      <View>
        <View style={styles.searchContainer}>
          <SearchIcon width={scale(18)} height={verticalScale(18)} />
          <TextInput
            style={styles.input}
            multiline={false}
            accessibilityLabel="Pole do wyszukiwania"
            accessibilityHint="Wpisz wyszukiwaną frazę"
          />
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
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
                <>
                  <View style={styles.navButtons}>
                    <Pressable
                      accessibilityHint="Nawiguje do innego zakładki aplikacji w obrębie obecnego ekranu"
                      accessibilityRole="button"
                      accessibilityLabel={options.tabBarAccessibilityLabel}
                      testID={options.tabBarTestID}
                      onPress={onPress}
                      onLongPress={onLongPress}
                      key={index}>
                      <MontserratSemiBold
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
                      </MontserratSemiBold>
                    </Pressable>
                  </View>
                </>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  searchContainer: {
    width: '304@s',
    backgroundColor: theme.backgroundColor.white,
    marginHorizontal: '23@s',
    marginVertical: '20@vs',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: '10@ms',
    paddingHorizontal: '12@s',
  },
  input: {
    width: '94%',
    paddingHorizontal: '12@s',
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: '23@s',
    marginBottom: '22@vs',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  navButtons: {
    paddingRight: '8@s',
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
