import {moderateScale} from 'react-native-size-matters';

export const theme = {
  color: {
    white: '#fff',
    main: '#28235F',
    grey: '#7B7B7B',
    primaryMint: '#4FCBC2',
    secondary: 'lime',
    tetriary: 'brown',
  },
  backgroundColor: {
    main: '#4FCBC2',
    primary: '#F3F2F2',
    secondary: '#4FCBC2',
    tetriary: 'blue',
    black: 'black',
    quinary: 'red',
    senary: 'green',
  },
  fontSize: {
    nine: moderateScale(9),
    ten: moderateScale(10),
    twelve: moderateScale(12),
    fourteen: moderateScale(14),
    sixteen: moderateScale(16),
    eighteen: moderateScale(18),
    twenty: moderateScale(20),
    twentyTwo: moderateScale(22),
    twentySix: moderateScale(26),
  },
};
