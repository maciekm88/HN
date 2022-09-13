import React, {ReactNode} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';

//styles
import {theme} from '../styles/styles';

//icons
import NewsfeedIcon from '../assets/navAssets/NewsfeedIcon';
import ChatIcon from '../assets/navAssets/ChatIcon';
import FriendsIcon from '../assets/navAssets/FriendsIcon';
import ShopIcon from '../assets/navAssets/ShopIcon';

const NavIcons = (label: string, isFocused: boolean): ReactNode => {
  let color;
  if (isFocused) {
    color = theme.backgroundColor.quinary;
  } else {
    color = theme.color.primary;
  }
  switch (label) {
    case 'Panel':
      return (
        <NewsfeedIcon
          color={color}
          width={scale(24)}
          height={verticalScale(24)}
        />
      );
    case 'Czat':
      return (
        <ChatIcon color={color} width={scale(24)} height={verticalScale(24)} />
      );
    case 'Znajomi':
      return (
        <FriendsIcon
          color={color}
          width={scale(24)}
          height={verticalScale(24)}
        />
      );
    case 'Sklep':
      return (
        <ShopIcon color={color} width={scale(24)} height={verticalScale(24)} />
      );
  }
};

export default NavIcons;
