//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { SerializedStyles } from '@emotion/core';

import Coding from './Coding';
import CreativeThinking from './CreativeThinking';
import Social from './Social';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    name: string;
    width?: string;
    height?: string;
    viewBox?: string;
    fill?: string;
    styles?: SerializedStyles;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const Icon: React.FunctionComponent<Props> = ({
    name,
    width,
    height,
    viewBox,
    fill,
    styles,
}) => {
    switch (name) {
        case 'coding':
            return (
                <Coding
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    fill={fill}
                    styles={styles}
                />
            );
        case 'creative':
            return (
                <CreativeThinking
                    width={width}
                    height={height}
                    viewBox={viewBox}
                    fill={fill}
                    styles={styles}
                />
            );
        case 'social':
            return (
                <Social
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

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
