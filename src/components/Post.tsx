import React from 'react';
import {View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

//components
import MontserratSemiBold from './fonts/Montserrat-SemiBold';
import MontserratMedium from './fonts/MontserratMedium';
import MontserratRegular from './fonts/MontserratRegular';

//styles
import {theme} from '../styles/styles';

//types
import {ArticleScreenNavigation} from '../types/navigation';

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
        <MontserratSemiBold
          color={theme.color.main}
          size={theme.fontSize.twentySix}
          numberOfLines={1}
          style={styles.text}>
          {route.params.name}
        </MontserratSemiBold>
      </View>
      <MontserratRegular
        color={theme.color.grey}
        size={theme.fontSize.ten}
        numberOfLines={1}
        style={styles.text}>
        {route.params.time}
      </MontserratRegular>
      <MontserratSemiBold
        color={theme.color.primaryMint}
        size={theme.fontSize.twenty}
        numberOfLines={5}
        style={styles.text}>
        {route.params.title}
      </MontserratSemiBold>
      <MontserratMedium
        color={theme.color.grey}
        size={theme.fontSize.sixteen}
        numberOfLines={25}
        style={styles.text}>
        {route.params.articleText}
      </MontserratMedium>
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
