import React, {useState} from 'react';
import {View, Image, TextInput, Button} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';

//components
import PhotoIcon from '../assets/icons/PhotoIcon';
import MontserratSemiBold from './fonts/Montserrat-SemiBold';

//styles
import {theme} from '../styles/styles';

//types
import {NewPostScreenNavigation} from '../types/navigation';

//placeholders
const placeholder = require('../assets/placeholders/cat.jpg');

type NowyPostScreenRouteProp = NewPostScreenNavigation['route'];

const Index: React.FC<{
  route: NowyPostScreenRouteProp;
  // eslint-disable-next-line no-empty-pattern
}> = ({}): JSX.Element | null => {
  const [title, setTitle] = useState<string>('');
  const [articleText, setArticleText] = useState<string>('');

  console.log('title: ', title);
  console.log('article text: ', articleText);

  return (
    <View style={styles.container}>
      <View style={styles.newPostTitle}>
        <MontserratSemiBold
          color={theme.color.main}
          size={theme.fontSize.twelve}
          numberOfLines={1}
          style={styles.title}>
          Dodaj tytuł:
        </MontserratSemiBold>
        <TextInput
          style={styles.inputTitle}
          placeholder="Lorem ipsum..."
          placeholderTextColor={theme.color.grey}
          multiline={false}
          accessibilityLabel="Pole do wpisania tytułu nowego posta"
          accessibilityHint="Wpisz tytuł nowego posta"
          onChangeText={value => setTitle(value)}
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
          accessibilityLabel="Pole do wpisania treści nowego posta"
          accessibilityHint="Wpisz treść nowego posta"
          onChangeText={val => setArticleText(val)}
        />
      </View>
      <Button title="Add article" />
      <View style={styles.photo}>
        <PhotoIcon
          color={theme.color.white}
          width={scale(21)}
          height={verticalScale(21)}
        />
        <MontserratSemiBold
          color={theme.color.main}
          size={theme.fontSize.fourteen}
          numberOfLines={1}>
          Dodaj zdjęcie
        </MontserratSemiBold>
      </View>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: '23@vs',
    height: '100%',
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
    color: theme.color.grey,
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
    color: theme.color.grey,
  },
  photo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: '33@s',
    width: '100%',
    height: '48@vs',
  },
});
export default Index;
