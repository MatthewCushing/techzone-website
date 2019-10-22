//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import React from 'react';
import { Link } from 'gatsby';
import { SerializedStyles } from '@emotion/core';

import * as style from './styles';

//
// ─── TYPES ──────────────────────────────────────────────────────────────────────
//

interface Props {
    styles: SerializedStyles;
}

//
// ─── COMPONENT ──────────────────────────────────────────────────────────────────
//

const SiteLinks: React.FC<Props> = ({ styles }) => {
    return (
        <div css={style.container}>
            <h1 css={styles}>Site Links</h1>
            <Link to="/" css={style.links}>
                HOME
            </Link>
            <Link to="/" css={style.links}>
                ABOUT
            </Link>
            <Link to="/" css={style.links}>
                BLOGS
            </Link>
            <Link to="/" css={style.links}>
                TEAMS
            </Link>
            <Link to="/" css={style.links}>
                CONTACT
            </Link>
        </div>
    );
};

export default SiteLinks;
