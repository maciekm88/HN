import axios from 'axios';
import {View, FlatList, SafeAreaView, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

//styles
import {listHeader as styles} from './styles';

//Components
import ArticlePreview from './ArticlePreview';
import {scale, verticalScale} from 'react-native-size-matters';
import PollIcon from '../../../assets/icons/PollIcon';
import {theme} from '../../../styles/styles';
import PoppinsBold from '../../../components/fonts/PoppinsBold';

//types
import {ArticleScreenNavigation} from '../../../types/navigation';

const Index: React.FC = (): JSX.Element | null => {
  const [newsfeedData, setNewsfeedData] = useState([]);
  // const [newsfeedPage, setNewsfeedPage] = useState([]);

  type ArticleScreenNavigationProp = ArticleScreenNavigation['navigation'];

  useEffect(() => {
    axios.get('https://api.npoint.io/4d4008557f9ac84ebe64').then(response => {
      setNewsfeedData(response.data.data);
    });
  }, []);

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
          <PoppinsBold
            numberOfLines={1}
            color={theme.color.main}
            size={theme.fontSize.fourteen}
            style={styles.pollName}>
            Ankieta zdrowia
          </PoppinsBold>
          <PoppinsBold
            numberOfLines={2}
            color={theme.color.main}
            size={theme.fontSize.twelve}
            style={styles.pollName}>
            Dostęp do: Grup zdrowia{'\n'}Czas wypełniania: ok. 4 min
          </PoppinsBold>
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
      <FlatList
        data={newsfeedData.slice(0, 10)}
        initialNumToRender={10}
        renderItem={renderItem}
        ListHeaderComponent={poll}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

export default Index;
