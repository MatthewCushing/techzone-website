import React from 'react';
import { SerializedStyles } from '@emotion/core';
import Facebook from './Svg/Facebook';
import LinkedIn from './Svg/LinkedIn';
import Tumblr from './Svg/Tumblr';
import Twitter from './Svg/Twitter';
import Youtube from './Svg/Youtube';

interface Props {
  name: string;
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  styles?: SerializedStyles;
}

const Icon: React.FunctionComponent<Props> = ({
  name,
  width,
  height,
  viewBox,
  fill,
  styles,
}) => {
  switch (name) {
    case 'facebook':
      return (
        <Facebook
          width={width}
          height={height}
          viewBox={viewBox}
          fill={fill}
          styles={styles}
        />
      );
    case 'linkedIn':
      return (
        <LinkedIn
          width={width}
          height={height}
          viewBox={viewBox}
          fill={fill}
          styles={styles}
        />
      );
    case 'tumblr':
      return (
        <Tumblr
          width={width}
          height={height}
          viewBox={viewBox}
          fill={fill}
          styles={styles}
        />
      );
    case 'twitter':
      return (
        <Twitter
          width={width}
          height={height}
          viewBox={viewBox}
          fill={fill}
          styles={styles}
        />
      );
    case 'youtube':
      return (
        <Youtube
          width={width}
          height={height}
          viewBox={viewBox}
          fill={fill}
          styles={styles}
        />
      );
    default:
      return <p>Missing Icon</p>;
  }
};

export default Icon;
