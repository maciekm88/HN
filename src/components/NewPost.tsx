import React, {useState} from 'react';
import {
  Alert,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import {scale, ScaledSheet, verticalScale} from 'react-native-size-matters';
import {useDispatch} from 'react-redux';
import store from '../redux/store';
import {PermissionsAndroid} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

//components
import MontserratSemiBold from './fonts/Montserrat-SemiBold';
import CameraIcon from '../assets/icons/CameraIcon';
import GalleryIcon from '../assets/icons/GalleryIcon';

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
  const [picture, setPicture] = useState('');

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

  //add photo from camera

  const addFromCamera = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            quality: 1,
          },
          (response: any) => {
            if (response.didCancel) {
              setPicture('');
            } else {
              if (response.assets[0].fileSize > 20971520) {
                Alert.alert(
                  'Zbyt duży rozmiar pliku',
                  'Maksymalna wielkość pliku to 20MB.',
                  [{text: 'OK'}],
                );
                setPicture('');
              } else {
                setPicture(response.assets[0].uri);
                // console.log('camera response: ', response.assets[0])
              }
            }
          },
        );
      } else if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        Alert.alert('Brak pozwolenia', 'na dostęp do kamery.', [{text: 'OK'}]);
      }
    } catch (err) {
      console.warn(err);
    }
  };

  //add existing photo from gallery

  const addFromGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response: any) => {
        if (response.didCancel) {
          setPicture('');
        } else if (response.errorCode) {
          Alert.alert(
            'Błąd',
            'Przykro mi. Nie możesz dodać zdjęcia z galerii.',
            [{text: 'OK'}],
          );
        } else if ((response.assets[0].type, response.assets[0].fileSize)) {
          if (
            response.assets[0].type !== 'image/jpg' &&
            response.assets[0].type !== 'image/png' &&
            response.assets[0].type !== 'image/jpeg'
          ) {
            Alert.alert(
              'Nieprawidłowy format',
              'Zdjęcie musi być w formacie .jpg lub .jpeg.',
              [{text: 'OK'}],
            );
          } else if (response.assets[0].fileSize > 20971520) {
            Alert.alert(
              'Zbyt duży rozmiar pliku',
              'Maksymalna wielkość pliku to 20MB.',
              [{text: 'OK'}],
            );
          } else {
            setPicture(response.assets[0].uri);
          }
        }
      },
    );
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
        <TouchableOpacity
          accessible={true}
          style={styles.photoButton}
          accessibilityLabel="Zrób zdjęcie"
          accessibilityHint="Przenosi do aparatu i pozwala zrobić zdjęcie"
          accessibilityRole="button"
          onPress={addFromCamera}>
          <CameraIcon
            color={theme.color.white}
            width={scale(21)}
            height={verticalScale(21)}
          />
          <MontserratSemiBold
            color={theme.color.main}
            size={theme.fontSize.fourteen}
            numberOfLines={1}>
            Zdjęcie z aparatu
          </MontserratSemiBold>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          style={styles.photoButton}
          accessibilityLabel="Dodaj zdjęcie z galerii"
          accessibilityHint="Przenosi do galerii i pozwala wybrać zdjęcie"
          accessibilityRole="button"
          onPress={addFromGallery}>
          <GalleryIcon
            color={theme.color.white}
            width={scale(21)}
            height={verticalScale(21)}
          />
          <MontserratSemiBold
            color={theme.color.main}
            size={theme.fontSize.fourteen}
            numberOfLines={1}>
            Zdjęcie z galerii
          </MontserratSemiBold>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.photoPreview}
        source={{
          uri: picture,
        }}
      />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '16@s',
    width: '100%',
    height: '48@vs',
  },
  photoButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '50%',
  },
  photoPreview: {
    marginHorizontal: '33@s',
    height: '50%',
    resizeMode: 'contain',
  },
});
export default Index;
