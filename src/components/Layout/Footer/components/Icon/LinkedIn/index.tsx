//
// ────────────────────────────────────────────────────── I ──────────
//   :::::: I M P O R T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────
//

import React from 'react';
import { css, SerializedStyles } from '@emotion/core';

import * as style from './styles';

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

//
// ────────────────────────────────────────────────────────── III ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

const LinkedIn: React.FunctionComponent<Props> = ({
    width = '40.088',
    height = '39.633',
    viewBox = '0 0 40.088 39.633',
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
            <g transform="translate(0 -6.641)">
                <g transform="translate(0 6.641)">
                    <path
                        className="a"
                        d="M8.749,14.548H1.155a.941.941,0,0,0-.941.941V42.035a.941.941,0,0,0,.941.941h7.6a.941.941,0,0,0,.941-.941V15.489A.941.941,0,0,0,8.749,14.548ZM7.809,41.095H2.1V16.43H7.809Zm22.115-26.87a10.38,10.38,0,0,0-7.5,2.975l-.173-1.8a.941.941,0,0,0-.936-.851h-.019l-6.923.133a.942.942,0,0,0-.922.983c.087,1.938.084,4.2.08,6.827V42.169a.941.941,0,0,0,.941.941h7.6a.941.941,0,0,0,.941-.941V26.823a5.016,5.016,0,0,1,.2-1.688,4.293,4.293,0,0,1,3.829-2.451c2.323,0,3.709,1.767,3.709,4.728V42.169a.941.941,0,0,0,.941.941h7.461a.941.941,0,0,0,.941-.941V26.448C40.088,18.794,36.288,14.225,29.924,14.225Zm8.283,27h-5.58V27.412c0-4.016-2.2-6.61-5.591-6.61a6.2,6.2,0,0,0-5.578,3.64,6.5,6.5,0,0,0-.335,2.381V41.228H15.41V22.494c0-2.228.006-4.2-.046-5.95l5.1-.1.293,3.034a.942.942,0,0,0,.937.851h.16a.94.94,0,0,0,.8-.442,8.389,8.389,0,0,1,7.277-3.781c5.264,0,8.283,3.769,8.283,10.342v14.78h0ZM5.271,3.477A4.974,4.974,0,0,0,0,8.483a4.919,4.919,0,0,0,5.166,5A5.011,5.011,0,1,0,5.271,3.477ZM5.166,11.6A3.067,3.067,0,0,1,1.882,8.483,3.09,3.09,0,0,1,5.271,5.359,3.082,3.082,0,0,1,8.608,8.483,3.118,3.118,0,0,1,5.166,11.6Z"
                        transform="translate(0 -3.477)"
                    />
                </g>
            </g>
        </svg>
    );
};

export default LinkedIn;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
