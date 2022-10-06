import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const CameraIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 21 18" {...props}>
    <Path
      d="M2.92041 3.68032V3.10432C2.92041 2.7862 3.17935 2.52832 3.49647 2.52832H4.26435C4.5825 2.52832 4.84041 2.78685 4.84041 3.10432V3.68032"
      stroke="#28235F"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5.97569 3.88H1.57462C1.2569 3.88 1 4.13868 1 4.45777V16.5502C1 16.8693 1.25727 17.128 1.57462 17.128H19.6254C19.9431 17.128 20.2 16.8693 20.2 16.5502V4.45777C20.2 4.13869 19.9427 3.88 19.6254 3.88H15.233L13.8334 1.49561C13.6727 1.22189 13.2848 1 12.9669 1H8.25477C7.93872 1 7.54797 1.22189 7.38607 1.49561L5.97569 3.88Z"
      stroke="#28235F"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M10.6 14.824C12.9328 14.824 14.824 12.9328 14.824 10.6C14.824 8.26713 12.9328 6.37598 10.6 6.37598C8.26713 6.37598 6.37598 8.26713 6.37598 10.6C6.37598 12.9328 8.26713 14.824 10.6 14.824Z"
      stroke="#28235F"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M9.64049 8.10352C9.05947 8.10352 8.10449 9.01342 8.10449 9.63951"
      stroke="#28235F"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M8.67969 3.30371H12.5197"
      stroke="#28235F"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);

export default CameraIcon;
