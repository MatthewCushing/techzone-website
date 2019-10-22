//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';

import { colors, fonts } from 'global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const ul = css`
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 1;
    list-style: none;
    display: grid;
    grid-template-columns: auto 1fr auto auto auto;
    grid-template-rows: 3rem;
    font-size: 24px;
    font-family: ${fonts.primary};
    margin: 0 140px;

    & > li > a {
        color: white;
        text-decoration: none;
    }

    & > li > .home,
    & > li > .about,
    & > li > .contact {
        color: ${colors.lightGreen};
    }
`;

export const logoAlign = css`
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: 1fr;

    & > span {
        align-self: center;
    }
`;

export const tech = css`
    color: ${colors.lightGreen};
    margin-left: 10px;
`;

export const zone = css`
    margin-left: 2px;
`;

export const spacing = css`
    margin-left: 50px;
`;

export const verticalAlign = css`
    align-self: center;
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
