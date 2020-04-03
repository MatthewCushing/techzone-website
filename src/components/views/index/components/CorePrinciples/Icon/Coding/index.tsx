//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import * as style from './styles';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    styles?: SerializedStyles;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Coding: React.FunctionComponent<Props> = ({
    width = '65.6',
    height = '82',
    viewBox = '0 0 65.6 82',
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
                ${style.svg}
            `}
        >
            <path
                className="a"
                d="M106.767,0H54.833A6.842,6.842,0,0,0,48,6.833v36.9a6.842,6.842,0,0,0,6.833,6.833H73.521L71.57,57.4H67.133v2.733H94.467V57.4H90.031l-1.952-6.833h18.688a6.842,6.842,0,0,0,6.833-6.833V6.833A6.842,6.842,0,0,0,106.767,0ZM74.412,57.4l1.952-6.833h8.872L87.188,57.4Zm36.454-13.667a4.1,4.1,0,0,1-4.1,4.1H54.833a4.1,4.1,0,0,1-4.1-4.1V41h60.133Zm0-5.467H50.733V6.833a4.1,4.1,0,0,1,4.1-4.1h51.933a4.1,4.1,0,0,1,4.1,4.1Z"
                transform="translate(-48)"
            />
            <g transform="translate(4.1 62.867)">
                <path
                    className="a"
                    d="M111.633,368H73.367A1.367,1.367,0,0,0,72,369.367v16.4a1.367,1.367,0,0,0,1.367,1.367h38.267A1.367,1.367,0,0,0,113,385.767v-16.4A1.367,1.367,0,0,0,111.633,368Zm-1.367,16.4H74.733V370.733h35.533Z"
                    transform="translate(-72 -368)"
                />
            </g>
            <g transform="translate(9.567 73.8)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(9.567 68.333)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(15.033 68.333)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(20.5 68.333)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(31.433 68.333)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(25.967 68.333)">
                <g transform="translate(0)">
                    <rect className="a" width="2.733" height="2.733" />
                </g>
            </g>
            <g transform="translate(36.9 73.8)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(36.9 68.333)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(15.033 73.8)">
                <rect className="a" width="19.133" height="2.733" />
            </g>
            <g transform="translate(47.833 62.867)">
                <path
                    className="a"
                    d="M334.833,368A6.833,6.833,0,0,0,328,374.833V380.3a6.833,6.833,0,0,0,13.667,0v-5.467A6.833,6.833,0,0,0,334.833,368Zm4.1,12.3a4.1,4.1,0,0,1-8.2,0v-5.467a4.1,4.1,0,1,1,8.2,0Z"
                    transform="translate(-328 -368)"
                />
            </g>
            <g transform="translate(53.3 68.333)">
                <rect className="a" width="2.733" height="2.733" />
            </g>
            <g transform="translate(28.742 11.953)">
                <g transform="translate(0 0)">
                    <rect
                        className="a"
                        width="19.89"
                        height="2.732"
                        transform="translate(0 19.122) rotate(-74.032)"
                    />
                </g>
            </g>
            <g transform="translate(15.034 13.984)">
                <path
                    className="a"
                    d="M146.444,83.955l-1.749-2.1-8.2,6.833a1.367,1.367,0,0,0,0,2.1l8.2,6.833,1.749-2.1-6.94-5.784Z"
                    transform="translate(-136.004 -81.856)"
                />
            </g>
            <g transform="translate(40.125 13.984)">
                <path
                    className="a"
                    d="M293,88.864a1.365,1.365,0,0,0-.174-.174l-8.2-6.833-1.749,2.1,6.94,5.784-6.94,5.784,1.749,2.1,8.2-6.833A1.367,1.367,0,0,0,293,88.864Z"
                    transform="translate(-282.88 -81.856)"
                />
            </g>
        </svg>
    );
};

export default Coding;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//