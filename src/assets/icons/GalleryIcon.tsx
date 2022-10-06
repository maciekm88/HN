import React from 'react';
import Svg, {SvgProps, Path, G, Rect, ClipPath, Defs} from 'react-native-svg';

const GalleryIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 20 20" {...props}>
    <G clip-path="url(#clip0_650_773)">
      <Path
        d="M16.5625 5H0.3125V17.5H16.5625V5Z"
        stroke="#28235F"
        stroke-miterlimit="10"
      />
      <Path
        d="M3.125 4.375V2.5H19.6875V15H17.1875"
        stroke="#28235F"
        stroke-miterlimit="10"
      />
      <Path
        d="M0.3125 14.375L4.6875 10L9.0625 15L12.1875 13.125L16.5625 16.875"
        stroke="#28235F"
        stroke-miterlimit="10"
      />
      <Path
        d="M12.5 10.625C13.3629 10.625 14.0625 9.92544 14.0625 9.0625C14.0625 8.19956 13.3629 7.5 12.5 7.5C11.6371 7.5 10.9375 8.19956 10.9375 9.0625C10.9375 9.92544 11.6371 10.625 12.5 10.625Z"
        stroke="#28235F"
        stroke-miterlimit="10"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_650_773">
        <Rect width="20" height="20" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default GalleryIcon;
