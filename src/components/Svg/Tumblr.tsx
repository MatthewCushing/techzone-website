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
  width = '25.405',
  height = '39.999',
  viewBox = '0 0 25.405 39.999',
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
      <g transform="translate(-144.486)">
        <g transform="translate(144.486)">
          <g transform="translate(0)">
            <path
              className="a"
              fill={fill}
              d="M169.281,28.662a.9.9,0,0,0-1,.3c-1.5,1.942-4.146,2.378-5.214,2.475a2.916,2.916,0,0,1-2.543-.676,2.951,2.951,0,0,1-.6-2.012c0-.031,0-.063,0-.094v-9.8h8.57a.9.9,0,0,0,.9-.9V11.49a.9.9,0,0,0-.9-.9H159.7V.9a.9.9,0,0,0-.9-.9h-5.364a.9.9,0,0,0-.9.9c0,9.1-6.9,9.493-7.186,9.505a.9.9,0,0,0-.869.9v6.651a.9.9,0,0,0,.893.9l3.2.022V29.181c0,6.517,2.562,10.014,7.832,10.691a21.452,21.452,0,0,0,2.516.127,29.108,29.108,0,0,0,3.99-.245,12.335,12.335,0,0,0,6.721-3.071.9.9,0,0,0,.252-.624V29.515A.9.9,0,0,0,169.281,28.662Zm-1.189,7a11.142,11.142,0,0,1-5.448,2.314,29.779,29.779,0,0,1-6,.113c-2.915-.375-6.262-1.727-6.262-8.906v-11.2a.9.9,0,0,0-.893-.9l-3.2-.022V12.088c2.166-.408,7.654-2.236,8.034-10.289h3.587V11.49a.9.9,0,0,0,.9.9H167.6v4.665h-8.57a.9.9,0,0,0-.9.9V28.62a4.738,4.738,0,0,0,1.049,3.339,4.285,4.285,0,0,0,3.345,1.306c.223,0,.458-.011.706-.033a10.59,10.59,0,0,0,4.862-1.655v4.086Z"
              transform="translate(-144.486)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SVG;
