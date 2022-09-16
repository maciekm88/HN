/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

const MontserratSemiBold: React.FC<{
  color: string;
  size: number;
  children: React.ReactNode;
  style?: any;
  numberOfLines?: number;
}> = ({children, color, size, style, numberOfLines}) => {
  return (
    <Text
      numberOfLines={numberOfLines ? numberOfLines : 0}
      style={{...style, ...styles.text, color: color, fontSize: size}}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: 0.5,
    fontWeight: '600',
  },
});

export default MontserratSemiBold;
