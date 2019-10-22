//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';

import { SerializedStyles } from '@emotion/core';
import * as style from './styles';
import Icon from '../Icon';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    styles: SerializedStyles;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const SocialMedia: React.FC<Props> = ({ styles }) => {
    return (
        <div css={style.container}>
            <h1 css={styles}>Social Media</h1>
            <a href="https://www.facebook.com">
                <Icon name="facebook" styles={style.icon} />
            </a>
            <a href="https://www.linkedin.com">
                <Icon name="linkedIn" styles={style.icon} />
            </a>
            <a href="https://www.tumblr.com">
                <Icon name="tumblr" styles={style.icon} />
            </a>
            <a href="https://www.twitter.com">
                <Icon name="twitter" styles={style.icon} />
            </a>
            <a href="https://www.youtube.com">
                <Icon name="youtube" />
            </a>
        </div>
    );
};

export default SocialMedia;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
