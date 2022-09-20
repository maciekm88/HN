import {Text, View} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';

//components
import MontserratSemiBold from '../../components/fonts/Montserrat-SemiBold';

//styles
import {theme} from '../../styles/styles';

const Index: React.FC = (): JSX.Element => {
  return (
    <View style={{marginHorizontal: scale(23)}}>
      <MontserratSemiBold size={24} color={theme.color.main}>
        JESTEŚ NA STRONIE SKLEP
      </MontserratSemiBold>
      <Text style={{color: theme.color.main}}>Shop</Text>
    </View>
  );
};

export default Index;
