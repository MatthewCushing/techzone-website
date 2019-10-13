//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { SerializedStyles } from '@emotion/core';

import Facebook from './Facebook';
import LinkedIn from './LinkedIn';
import Tumblr from './Tumblr';
import Twitter from './Twitter';
import Youtube from './Youtube';

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

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
