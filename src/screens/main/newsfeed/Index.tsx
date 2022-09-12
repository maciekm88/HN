import {Text, View} from 'react-native';
import React from 'react';
import PoppinsBold from '../../../components/fonts/PoppinsBold';
import {theme} from '../../../styles/styles';

const Index: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text
        style={{fontSize: 33, color: theme.color.tetriary, fontWeight: '400'}}>
        Przykładowy tekst 33
      </Text>
      <PoppinsBold size={33} color={theme.color.tetriary}>
        News Poppins Bold 33
      </PoppinsBold>
    </View>
  );
};

export default Index;
