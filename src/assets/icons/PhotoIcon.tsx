import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const PhotoIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18 20H4V6H13V4H4C2.9 4 2 4.9 2 6V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V11H18V20ZM10.21 16.83L8.25 14.47L5.5 18H16.5L12.96 13.29L10.21 16.83ZM20 4V1H18V4H15C15.01 4.01 15 6 15 6H18V8.99C18.01 9 20 8.99 20 8.99V6H23V4H20Z"
      fill="#28235F"
    />
  </Svg>
);

export default PhotoIcon;
