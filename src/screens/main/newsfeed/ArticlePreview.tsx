import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//types
import {ArticleScreenNavigation} from '../../../types/navigation';

//styles
import {theme} from '../../../styles/styles';
import {item as styles} from './styles';

//components
import PoppinsBold from '../../../components/fonts/PoppinsBold';
import HeartIcon from '../../../assets/icons/HeartIcon';
import {scale, verticalScale} from 'react-native-size-matters';

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
        <PoppinsBold
          color={theme.color.main}
          size={theme.fontSize.twelve}
          numberOfLines={1}
          style={styles.title}>
          {name}
        </PoppinsBold>
      </View>
      <View style={styles.postTitle}>
        <PoppinsBold
          numberOfLines={1}
          color={theme.color.main}
          size={theme.fontSize.twelve}
          style={styles.leadTitle}>
          {title.replace(/^(.{30}[^\s]*).*/, '$1')}...
          {/* this replace expression returns first 30 characters plus any subsequent non-space characters*/}
        </PoppinsBold>
        <HeartIcon
          style={styles.heartIcon}
          width={scale(22)}
          height={verticalScale(25)}
        />
      </View>
      <View style={styles.articleText}>
        <PoppinsBold
          numberOfLines={2}
          color={theme.color.grey}
          size={theme.fontSize.ten}
          style={styles.leadText}>
          {articleText.replace(/^(.{100}[^\s]*).*/, '$1')}...
          {/* this replace expression returns first 100 characters plus any subsequent non-space characters*/}
        </PoppinsBold>
        <PoppinsBold
          numberOfLines={1}
          color={theme.color.primaryMint}
          size={theme.fontSize.ten}
          style={styles.more}>
          Więcej
        </PoppinsBold>
      </View>
      <PoppinsBold
        numberOfLines={1}
        color={theme.color.grey}
        size={theme.fontSize.ten}
        style={styles.postTime}>
        {time} - random json time
      </PoppinsBold>
    </Pressable>
  );
};

export default ArticlePreview;
