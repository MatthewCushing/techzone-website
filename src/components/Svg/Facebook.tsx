import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

interface Props {
  width?: string;
  height?: string;
  viewBox?: string;
  fill?: string;
  styles?: SerializedStyles;
}

const SVG: React.FunctionComponent<Props> = ({
  width = '23.685',
  height = '39.587',
  viewBox = '0 0 23.685 39.587',
  fill = '#ced4d5',
  styles,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      css={css`
        ${styles}
      `}
    >
      <g transform="translate(-159.069)">
        <g transform="translate(159.069)">
          <g transform="translate(0)">
            <path
              fill={fill}
              d="M181.837.006l-6.017,0S175.7,0,175.479,0C174.244,0,168,.343,166.3,7.038a19.021,19.021,0,0,0-.607,5.648h-5.708a.918.918,0,0,0-.917.917v5.26a.918.918,0,0,0,.917.917h6.243V38.67a.918.918,0,0,0,.917.917h7.148a.918.918,0,0,0,.917-.917V19.8h6.263a.918.918,0,0,0,.917-.917V13.6a.918.918,0,0,0-.917-.917h-6.25V10.428c0-1.5.954-3.109,3.632-3.109h2.98a.918.918,0,0,0,.917-.917V.924A.917.917,0,0,0,181.837.006Zm-.917,5.478h-2.063c-3.776,0-5.467,2.483-5.467,4.944V13.6a.918.918,0,0,0,.917.917h6.25v3.444h-6.263a.918.918,0,0,0-.917.917V37.752h-5.314V18.862a.918.918,0,0,0-.917-.917H160.9V14.52h5.715a.918.918,0,0,0,.917-.936,19.876,19.876,0,0,1,.519-6.017,7.356,7.356,0,0,1,7.423-5.733c.128,0,.2,0,.278.006h5.163V5.484Z"
              transform="translate(-159.069)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SVG;
