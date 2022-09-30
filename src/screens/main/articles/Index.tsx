import {View, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';

//components
import ArticleItem from './ArticleItem';
import PollIcon from '../../../assets/icons/PollIcon';
import MontserratRegular from '../../../components/fonts/MontserratRegular';
import MontserratMedium from '../../../components/fonts/MontserratMedium';
import MontserratSemiBold from '../../../components/fonts/Montserrat-SemiBold';

//redux store
import store from '../../../redux/store';

//styles
import {theme} from '../../../styles/styles';
import {listHeader as styles} from './styles';

//types
import {ArticleScreenNavigation} from '../../../types/navigation';

const Index: React.FC = (): JSX.Element => {
  const selectArticles = (state: {DATA_LIST: any}) => state.DATA_LIST;
  const articlesList = selectArticles(store.getState());
  // console.log('articles list: ', articlesList);

  type ArticleScreenNavigationProp = ArticleScreenNavigation['navigation'];

  const renderItem = ({item}: any) => {
    return (
      <ArticleItem
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
      <>
        <TouchableOpacity
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
        </TouchableOpacity>
      </>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={articlesList}
        keyExtractor={item => item.id}
        initialNumToRender={10}
        renderItem={renderItem}
        // onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={poll}
        showsVerticalScrollIndicator={true}
      />
    </SafeAreaView>
  );
};

//   return (
//     <View style={{marginHorizontal: scale(23)}}>
//       <MontserratSemiBold size={24} color={theme.color.main}>
//         JESTEŚ NA PODSTRONIE ARTYKUŁY
//       </MontserratSemiBold>
//       <Text
//         style={{
//           fontSize: theme.fontSize.twelve,
//           color: theme.color.grey,
//           fontWeight: '400',
//         }}>
//         Przykładowy tekst w rozmiarze 12 Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Beatae, voluptas nemo accusamus at suscipit sed eius
//         mollitia sapiente praesentium, non adipisci rerum est labore
//         reprehenderit totam! Vel non perferendis exercitationem ipsum vero
//         veritatis quasi eum maxime? Expedita ipsam, numquam, suscipit inventore
//         quibusdam modi vero voluptatum tempora eius distinctio recusandae.
//         Ducimus.

//       </Text>
//     </View>
//   );
// };

export default Index;
