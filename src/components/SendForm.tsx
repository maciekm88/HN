import React, {useState} from 'react';

import {View, TextInput, Button} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

//styles
import {theme} from '../styles/styles';

//types
import {NewPostScreenNavigation} from '../types/navigation';

//data
import DATA_LIST from '../screens/main/articles/data';

type NowyPostScreenRouteProp = NewPostScreenNavigation['route'];

const Index: React.FC<{
  route: NowyPostScreenRouteProp;
  // eslint-disable-next-line no-empty-pattern
}> = ({}): JSX.Element | null => {
  const [articlesList, setArticlesList] = useState(DATA_LIST);
  const [title, setTitle] = useState<string>('');
  const [articleText, setArticleText] = useState<string>('');
  const [id, setId] = useState<string>(Math.random().toString(36).slice(2, 14));
  const [index, setIndex] = useState<number>(articlesList.length);
  const [time, setTime] = useState(new Date().toLocaleString());

  const [newPostData, setNewPostData] = useState({
    id: Math.random().toString(36).slice(2, 14),
    index: index,
    name: 'Jan Kowalski',
    title: title,
    articleText: articleText,
    time: new Date().toLocaleString(),
  });

  const newPost = () => {
    setId(Math.random().toString(36).slice(2, 14));
    setIndex(index + 1);
    setTime(new Date().toLocaleString());
    setNewPostData(prev => ({...prev, id, index, title, articleText, time}));
    setArticlesList(current => [...current, newPostData]);
    DATA_LIST.push(newPostData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        style={styles.inputTitle}
        placeholder="Napisz coś"
        placeholderTextColor={theme.color.grey}
        multiline={false}
        accessibilityLabel="Pole do wpisania tytułu artykulu"
        accessibilityHint="Wpisz tytuł artykulu"
        onChangeText={val => setTitle(val)}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Napisz coś"
        placeholderTextColor={theme.color.grey}
        multiline={true}
        accessibilityLabel="Pole do wpisania treści artykulu"
        accessibilityHint="Wpisz treść artykulu"
        onChangeText={val => setArticleText(val)}
      />
      <Button title="Add article" onPress={newPost} />
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: '23@vs',
    height: '100%',
  },
  inputTitle: {
    width: '73%',
    height: '100%',
    color: theme.color.grey,
  },
  inputText: {
    marginLeft: '12@s',
    width: '79%',
    height: '100%',
    color: theme.color.grey,
  },
});
export default Index;
