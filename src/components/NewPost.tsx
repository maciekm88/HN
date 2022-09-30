import React, {useState} from 'react';

import {View, Image, TextInput, Button} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import store from '../redux/store';

//components
import PhotoIcon from '../assets/icons/PhotoIcon';
import MontserratSemiBold from './fonts/Montserrat-SemiBold';

//styles
import {theme} from '../styles/styles';

//types
import {NewPostScreenNavigation} from '../types/navigation';

//placeholders
const placeholder = require('../assets/placeholders/cat.jpg');

//data
import {DATA_LIST} from '../screens/main/articles/data';

type NowyPostScreenRouteProp = NewPostScreenNavigation['route'];

const Index: React.FC<{
  route: NowyPostScreenRouteProp;
  // eslint-disable-next-line no-empty-pattern
}> = ({}): JSX.Element | null => {
  const dispatch = useDispatch();
  const [articlesList, setArticlesList] = useState(DATA_LIST);
  const [title, setTitle] = useState<string>('');
  const [articleText, setArticleText] = useState<string>('');
  const [id, setId] = useState<string>(Math.random().toString(36).slice(2, 14));
  const [index, setIndex] = useState<number>(articlesList.length);
  const [time, setTime] = useState(new Date().toLocaleString());

  // console.log('time: ', time);
  // console.log('id :', id);
  // console.log('index: ', index);
  // console.log('data length', articlesList.length);

  const [newPostData, setNewPostData] = useState({
    id: Math.random().toString(36).slice(2, 14),
    index: index,
    name: 'John Doe',
    title: title,
    articleText: articleText,
    time: new Date().toLocaleString(),
  });

  console.log('newpostdata = ', newPostData);

  const newPost = () => {
    setId(Math.random().toString(36).slice(2, 14));
    setIndex(index + 1);
    setTime(new Date().toLocaleString());
    setNewPostData(prev => ({...prev, id, index, title, articleText, time}));
    setArticlesList(current => [...current, newPostData]);
    // DATA_LIST.push(newPostData);
    // store.dispatch;
    // console.log('aaa');
    // console.log('bbb');
    // console.log('ccc');
    // console.log('ddd');
    console.log('newpostdata after button press = ', newPostData);

    if (newPostData.title !== '' && newPostData.articleText !== '') {
      DATA_LIST.push(newPostData);
      // store.dispatch;
      dispatch;
      console.log('store getstate: ', store.getState());
    } else {
      console.log('something went wrong');
    } //w ten sposob dodaje się tylko po drugim kliku
  };

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
          value={title}
          style={styles.inputTitle}
          placeholder="Lorem ipsum..."
          placeholderTextColor={theme.color.grey}
          multiline={false}
          accessibilityLabel="Pole do wpisania tytułu nowego posta"
          accessibilityHint="Wpisz tytuł nowego posta"
          onChangeText={val => setTitle(val)}
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
          onChangeText={val => {
            setArticleText(val);
          }}
        />
      </View>
      <Button
        title="Double tap to add post"
        onPress={newPost}
        color="#28235F"
      />
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
