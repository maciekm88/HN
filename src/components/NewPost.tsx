import React from 'react';
import {View, Image, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {theme} from '../styles/styles';

//types
import {NewPostScreenNavigation} from '../types/navigation';
import PoppinsBold from './fonts/PoppinsBold';

//placeholders
const placeholder = require('../assets/placeholders/cat.jpg');

type NowyPostScreenRouteProp = NewPostScreenNavigation['route'];

const Index: React.FC<{
  route: NowyPostScreenRouteProp;
  // eslint-disable-next-line no-empty-pattern
}> = ({}): JSX.Element | null => {
  return (
    <View style={styles.container}>
      <View style={styles.newPostTitle}>
        <PoppinsBold
          color={theme.color.main}
          size={theme.fontSize.twelve}
          numberOfLines={1}
          style={styles.title}>
          Dodaj tytuł:
        </PoppinsBold>
        <TextInput
          style={styles.inputTitle}
          placeholder="Lorem ipsum..."
          placeholderTextColor={theme.color.grey}
          multiline={true}
          accessibilityLabel="Pole do wpisania tytułu nowego posta"
          accessibilityHint="Wpisz tytuł nowego posta"
        />
      </View>
      <View style={styles.newPostText}>
        <Image
          source={placeholder}
          style={styles.image}
          resizeMode={'center'}
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel="Zdjęcie autora"
          accessibilityHint="Przedstawia zdjęcie wybranego autora"
        />
        <TextInput
          style={styles.inputText}
          placeholder="Napisz coś"
          placeholderTextColor={theme.color.grey}
          multiline={true}
          accessibilityLabel="Pole do wpisania tytułu nowego posta"
          accessibilityHint="Wpisz tytuł nowego posta"
        />
      </View>
      <View style={styles.photo}></View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: '23@vs',
    height: '100%',
    backgroundColor: theme.backgroundColor.primary,
  },
  newPostTitle: {
    paddingHorizontal: '33@s',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.color.lines,
    height: '48@vs',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    width: '27%',
  },
  inputTitle: {
    width: '73%',
    height: '100%',
  },
  newPostText: {
    paddingHorizontal: '33@s',
    height: '111@vs',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.color.lines,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.color.main,
    marginBottom: '5@vs',
  },
  image: {
    width: '50@ms',
    height: '50@ms',
    borderRadius: 50 / 2,
  },
  inputText: {
    marginLeft: '12@s',
    width: '79%',
    height: '100%',
  },
  photo: {},
});
export default Index;
