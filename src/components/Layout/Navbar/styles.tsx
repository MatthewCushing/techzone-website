//
// ─── IMPORTS ────────────────────────────────────────────────────────────────────
//

import { css } from '@emotion/core';

import { colors, fonts } from 'global/Theme';

//
// ─── STYLES ─────────────────────────────────────────────────────────────────────
//

export const ul = css`
    display: flex;
    list-style: none;
    position: absolute;
    width: 100%;
    z-index: 2;
    font-family: ${fonts.primary};
    font-size: 24px;
    color: #fff;
    /* margin-top: 48px; */

    & > li > .link {
        text-decoration: none;
        color: #fff;

        &.home,
        &.about,
        &.contact {
            color: ${colors.lightGreen};
        }
    }

    /* html:not([data-scroll='0']) {
        .sticky {
            background-color: #fff;
        }
    } */
`;

export const first = css`
    margin-left: 140px;
`;

export const second = css`
    margin-right: auto;
    align-self: center;
    margin-left: 10px;

    & .zone {
        color: ${colors.lightGreen};
        padding-left: 2px;
    }
`;

export const third = css`
    align-self: center;
`;

export const fourth = css`
    margin-left: 60px;
    align-self: center;
`;

export const last = css`
    margin-right: 140px;
    margin-left: 60px;
    align-self: center;
    text-decoration: none;
    color: #fff;
`;

//
// ────────────────────────────────────────────────────────────────────── END ─────
//
