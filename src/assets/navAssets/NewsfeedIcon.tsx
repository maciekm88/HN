import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const NewsfeedIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path
      d="M23.4 10.392C23.3993 10.3914 23.3988 10.3907 23.3982 10.3902L13.6081 0.600404C13.1908 0.182923 12.636 -0.046875 12.0458 -0.046875C11.4557 -0.046875 10.9009 0.182923 10.4834 0.600404L0.69839 10.3852C0.695094 10.3885 0.691615 10.392 0.688502 10.3953C-0.168433 11.2572 -0.166968 12.6555 0.692714 13.5152C1.08548 13.9082 1.60403 14.1356 2.15866 14.1596C2.18136 14.1618 2.20407 14.1629 2.22696 14.1629H2.61697V21.3673C2.61697 22.7932 3.77713 23.9532 5.20298 23.9532H9.03318C9.42155 23.9532 9.73631 23.6382 9.73631 23.25V17.6016C9.73631 16.951 10.2657 16.4218 10.9162 16.4218H13.1754C13.826 16.4218 14.3552 16.951 14.3552 17.6016V23.25C14.3552 23.6382 14.6699 23.9532 15.0583 23.9532H18.8885C20.3145 23.9532 21.4745 22.7932 21.4745 21.3673V14.1629H21.8363C22.4263 14.1629 22.9811 13.9331 23.3988 13.5154C24.2593 12.6544 24.2597 11.2535 23.4 10.392V10.392ZM22.4043 12.5211C22.2525 12.6729 22.0507 12.7566 21.8363 12.7566H20.7714C20.383 12.7566 20.0682 13.0714 20.0682 13.4597V21.3673C20.0682 22.0177 19.5391 22.5469 18.8885 22.5469H15.7614V17.6016C15.7614 16.1757 14.6014 15.0156 13.1754 15.0156H10.9162C9.49022 15.0156 8.33006 16.1757 8.33006 17.6016V22.5469H5.20298C4.55258 22.5469 4.02323 22.0177 4.02323 21.3673V13.4597C4.02323 13.0714 3.70847 12.7566 3.3201 12.7566H2.27347C2.26248 12.7559 2.25168 12.7553 2.24051 12.7551C2.03103 12.7515 1.83456 12.6684 1.68734 12.521C1.37423 12.2078 1.37423 11.6983 1.68734 11.385C1.68753 11.385 1.68753 11.3848 1.68771 11.3846L1.68826 11.3841L11.478 1.59467C11.6296 1.44287 11.8312 1.35938 12.0458 1.35938C12.2602 1.35938 12.4618 1.44287 12.6136 1.59467L22.4012 11.382C22.4027 11.3835 22.4043 11.385 22.4058 11.3864C22.7172 11.7001 22.7167 12.2086 22.4043 12.5211V12.5211Z"
      fill="none"
      stroke="currentColor"
    />
  </Svg>
);

export default NewsfeedIcon;
