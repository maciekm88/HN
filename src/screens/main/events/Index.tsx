import {Text, View} from 'react-native';
import React from 'react';

//styles
import {theme} from '../../../styles/styles';

const Index: React.FC = (): JSX.Element => {
  return (
    <View>
      <Text style={{color: theme.color.main}}>Wydarzenia</Text>
    </View>
  );
};

export default Index;
