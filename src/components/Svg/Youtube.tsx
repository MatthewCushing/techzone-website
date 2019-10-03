//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/core';

import { colors } from '../Theme';

//
// ────────────────────────────────────────────────── II ──────────
//   :::::: T Y P E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────
//

interface Props {
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    styles?: SerializedStyles;
}

const SVG = styled('svg')`
    fill: ${colors.lightGray};
    transition: all 0.3s ease 0s;

    &:hover {
        fill: #ff0000;
        transform: translateY(-5px);
    }
`;

//
// ────────────────────────────────────────────────────────── III ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const Youtube: React.FunctionComponent<Props> = ({
    width = '54.273',
    height = '39.8',
    viewBox = '0 0 54.273 39.8',
    styles,
}) => {
    return (
        <SVG
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox={viewBox}
            css={css`
                ${styles}
            `}
        >
            <g transform="translate(0 -81.6)">
                <g transform="translate(0 81.6)">
                    <g transform="translate(0 0)">
                        <path
                            className="a"
                            d="M43.418,81.6H10.855A10.868,10.868,0,0,0,0,92.454v18.091A10.868,10.868,0,0,0,10.855,121.4H43.418a10.868,10.868,0,0,0,10.855-10.854V92.454A10.868,10.868,0,0,0,43.418,81.6Zm8.442,28.945a8.452,8.452,0,0,1-8.442,8.442H10.855a8.452,8.452,0,0,1-8.442-8.442V92.454a8.452,8.452,0,0,1,8.442-8.442H43.418a8.452,8.452,0,0,1,8.442,8.442ZM19.3,111.7l17.675-10.2L19.3,91.3Zm2.412-16.231L32.147,101.5l-10.438,6.025Z"
                            transform="translate(0 -81.6)"
                        />
                    </g>
                </g>
            </g>
        </SVG>
    );
};

export default Youtube;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
