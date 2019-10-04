//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { SerializedStyles } from '@emotion/core';

import Facebook from './icons/Facebook';
import LinkedIn from './icons/LinkedIn';
import Tumblr from './icons/Tumblr';
import Twitter from './icons/Twitter';
import Youtube from './icons/Youtube';

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
