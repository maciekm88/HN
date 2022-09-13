import {Text, View} from 'react-native';
import React from 'react';
import PoppinsBold from '../../../components/fonts/PoppinsBold';
import {theme} from '../../../styles/styles';

const Index: React.FC = (): JSX.Element => {
  return (
    <View>
      <PoppinsBold size={24} color={theme.color.main}>
        Nagłówek w rozmiarze 24
      </PoppinsBold>
      <Text
        style={{
          fontSize: theme.fontSize.twelve,
          color: theme.color.grey,
          fontWeight: '400',
        }}>
        Przykładowy tekst w rozmiarze 12 Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Beatae, voluptas nemo accusamus at suscipit sed eius
        mollitia sapiente praesentium, non adipisci rerum est labore
        reprehenderit totam! Vel non perferendis exercitationem ipsum vero
        veritatis quasi eum maxime? Expedita ipsam, numquam, suscipit inventore
        quibusdam modi vero voluptatum tempora eius distinctio recusandae.
        Ducimus.
      </Text>
    </View>
  );
};

export default Index;