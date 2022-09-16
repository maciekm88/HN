import axios from 'axios';
import {View, FlatList, SafeAreaView, Pressable, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';

//styles
import {listHeader as styles} from './styles';
import {theme} from '../../../styles/styles';

//Components
import ArticlePreview from './ArticlePreview';
import PollIcon from '../../../assets/icons/PollIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import MontserratRegular from '../../../components/fonts/MontserratRegular';
import MontserratMedium from '../../../components/fonts/MontserratMedium';
import MontserratSemiBold from '../../../components/fonts/Montserrat-SemiBold';

//types
import {ArticleScreenNavigation} from '../../../types/navigation';

const Index: React.FC = (): JSX.Element | null => {
  const [newsfeedData, setNewsfeedData] = useState([]);
  const [newsCount, setNewsCount] = useState();
  const [newsfeedPage, setNewsfeedPage] = useState(1);
  const [newsfeedPageData, setNewsfeedPageData] = useState([]);

  type ArticleScreenNavigationProp = ArticleScreenNavigation['navigation'];

  useEffect(() => {
    axios.get('https://api.npoint.io/4d4008557f9ac84ebe64').then(response => {
      setNewsfeedData(response.data.data);
      setNewsCount(response.data.data.length);
      setNewsfeedPage(1);
      setNewsfeedPageData(response.data.data.slice(0, 10));
    });
  }, []);

  const newsPages = Math.ceil(newsCount / 10);

  const loadMoreData = () => {
    if (newsfeedPage + 1 < newsPages) {
      setNewsfeedPage(newsfeedPage + 1);
      setNewsfeedPageData(newsfeedData.slice(10));
    }
  };

  //loadMoreData DO POPRAWY PILNIE!!

  const renderItem = ({item}: any) => {
    return (
      <ArticlePreview
        name={item.name}
        image={item.image}
        title={item.title}
        articleText={item.articleText}
        time={item.time}
      />
    );
  };

  const navigation = useNavigation<ArticleScreenNavigationProp>();

  const handlePost = (): void => {
    navigation.navigate('Post', {});
  };

  const poll = () => {
    return (
      <Pressable
        accessibilityRole="button"
        style={styles.poll}
        onPress={handlePost}>
        <View style={styles.pollDescription}>
          <MontserratSemiBold
            numberOfLines={1}
            color={theme.color.main}
            size={theme.fontSize.fourteen}
            style={styles.pollName}>
            Ankieta zdrowia
          </MontserratSemiBold>
          <MontserratMedium
            numberOfLines={1}
            color={theme.color.main}
            size={theme.fontSize.twelve}
            style={styles.pollName}>
            Dostęp do: Grup zdrowia
          </MontserratMedium>
          <MontserratRegular
            numberOfLines={1}
            color={theme.color.main}
            size={theme.fontSize.twelve}
            style={styles.pollName}>
            Czas wypełniania: ok. 4 min
          </MontserratRegular>
        </View>
        <View style={styles.iconPositioner}>
          <PollIcon
            color={theme.color.white}
            width={scale(18)}
            height={verticalScale(25)}
          />
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <SearchIcon width={scale(18)} height={verticalScale(18)} />
        <TextInput
          style={styles.input}
          multiline={false}
          accessibilityLabel="Pole do wyszukiwania"
          accessibilityHint="Wpisz wyszukiwaną frazę"
        />
      </View>
      <FlatList
        data={newsfeedPageData}
        // initialNumToRender={10}
        renderItem={renderItem}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={poll}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

export default Index;
