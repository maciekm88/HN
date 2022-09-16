import React from 'react';
import {View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {theme} from '../styles/styles';

//types
import {ArticleScreenNavigation} from '../types/navigation';
import PoppinsBold from './fonts/PoppinsBold';

type ArtykułScreenRouteProp = ArticleScreenNavigation['route'];

const Index: React.FC<{
  route: ArtykułScreenRouteProp;
}> = ({route}): JSX.Element | null => {
  return (
    <View style={styles.container}>
      <View style={styles.author}>
        <Image
          source={route.params.image}
          style={styles.image}
          resizeMode={'center'}
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel="Zdjęcie autora"
          accessibilityHint="Przedstawia zdjęcie wybranego autora"
        />
        <PoppinsBold
          color={theme.color.main}
          size={theme.fontSize.twentySix}
          numberOfLines={1}
          style={styles.text}>
          {route.params.name}
        </PoppinsBold>
      </View>
      <PoppinsBold
        color={theme.color.grey}
        size={theme.fontSize.ten}
        numberOfLines={1}
        style={styles.text}>
        {route.params.time}
      </PoppinsBold>
      <PoppinsBold
        color={theme.color.primaryMint}
        size={theme.fontSize.twenty}
        numberOfLines={5}
        style={styles.text}>
        {route.params.title}
      </PoppinsBold>
      <PoppinsBold
        color={theme.color.grey}
        size={theme.fontSize.sixteen}
        numberOfLines={25}
        style={styles.text}>
        {route.params.articleText}
      </PoppinsBold>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: '23@vs',
    marginHorizontal: '23@s',
    height: '100%',
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    color: theme.color.main,
    marginBottom: '5@vs',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
  },
  text: {},
});
export default Index;
