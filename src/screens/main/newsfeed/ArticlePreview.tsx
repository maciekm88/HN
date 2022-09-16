import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {scale, verticalScale} from 'react-native-size-matters';

//types
import {ArticleScreenNavigation} from '../../../types/navigation';

//styles
import {theme} from '../../../styles/styles';
import {item as styles} from './styles';

//components
import HeartIcon from '../../../assets/icons/HeartIcon';
import MontserratSemiBold from '../../../components/fonts/Montserrat-SemiBold';
import MontserratMedium from '../../../components/fonts/MontserratMedium';

//placeholders
const placeholder = require('../../../assets/placeholders/cat.jpg');

type ArticleScreenNavigationProp = ArticleScreenNavigation['navigation'];

type Props = {
  name: string;
  image: string;
  title: string;
  articleText: string;
  time: string;
};

const ArticlePreview: React.FC<Props> = ({
  name,
  title,
  articleText,
  time,
}): JSX.Element => {
  const navigation = useNavigation<ArticleScreenNavigationProp>();

  const handlePost = (): void => {
    navigation.navigate('Post', {
      name: name,
      image: placeholder,
      title: title,
      articleText: articleText,
      time: time,
    });
  };

  return (
    <Pressable
      style={styles.container}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`Otwórz artykuł: ${title} `}
      accessibilityHint={`Przenosi do szczegółowego widoku artykułu.`}
      onPress={handlePost}>
      <View style={styles.postAuthor}>
        <Image
          source={placeholder}
          style={styles.image}
          resizeMode={'center'}
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel={`zdjęcie autora: ${name}`}
          accessibilityHint="Przedstawia zdjęcie wybranego autora"
        />
        <MontserratSemiBold
          color={theme.color.main}
          size={theme.fontSize.twelve}
          numberOfLines={1}
          style={styles.title}>
          {name}
        </MontserratSemiBold>
      </View>
      <View style={styles.postTitle}>
        <MontserratSemiBold
          numberOfLines={1}
          color={theme.color.main}
          size={theme.fontSize.twelve}
          style={styles.leadTitle}>
          {title.replace(/^(.{30}[^\s]*).*/, '$1')}...
          {/* this replace expression returns first 30 characters plus any subsequent non-space characters*/}
        </MontserratSemiBold>
        <HeartIcon
          style={styles.heartIcon}
          width={scale(22)}
          height={verticalScale(25)}
        />
      </View>
      <View style={styles.articleText}>
        <MontserratMedium
          numberOfLines={2}
          color={theme.color.grey}
          size={theme.fontSize.ten}
          style={styles.leadText}>
          {articleText.replace(/^(.{100}[^\s]*).*/, '$1')}...
          {/* this replace expression returns first 100 characters plus any subsequent non-space characters*/}
        </MontserratMedium>
        <MontserratMedium
          numberOfLines={1}
          color={theme.color.primaryMint}
          size={theme.fontSize.ten}
          style={styles.more}>
          Więcej
        </MontserratMedium>
      </View>
      <MontserratMedium
        numberOfLines={1}
        color={theme.color.grey}
        size={theme.fontSize.ten}
        style={styles.postTime}>
        {time} - random json time
      </MontserratMedium>
    </Pressable>
  );
};

export default ArticlePreview;
