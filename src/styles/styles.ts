import {moderateScale} from 'react-native-size-matters';

export const theme = {
  color: {
    primary: 'gold',
    secondary: 'lime',
    tetriary: 'brown',
  },
  backgroundColor: {
    primary: 'rebeccapurple',
    secondary: 'yellow',
    tetriary: 'blue',
    quaternary: 'black',
    quinary: 'red',
    senary: 'green',
  },
  fontSize: {
    nine: moderateScale(9),
    twelve: moderateScale(12),
    fourteen: moderateScale(14),
    sixteen: moderateScale(16),
    eighteen: moderateScale(18),
    twenty: moderateScale(20),
    twentyTwo: moderateScale(22),
    twentySix: moderateScale(26),
  },
};
